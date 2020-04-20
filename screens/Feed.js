import React, { useState, useEffect } from 'react'
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import NewProfilePostScreen from 'Monch/screens/NewProfilePost';
import PostListScreen from 'Monch/screens/PostList';

import MonchHeader from 'Monch/components/MonchHeader';
import Post from 'Monch/components/Post';
import Colors from '../constants/Colors';

import { withFirebaseHOC } from '../utilities/Firebase'

const PAGE_SIZE = 5;

function FeedScreen({firebase}) {
  const [feed, setFeed] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [lastKnownKey, setLastKnownKey] = useState(0);

  useEffect(()=>{
    fetchPosts();
  },[])

  // const fetchPosts = async lastKey => {
  //   // If we are currently getting posts, then bail out..
  //   if (refreshing) { return; }
  //   setRefreshing(true);

  //   // The data prop will be an array of posts, the cursor will be used for pagination.
//   const { data, cursor } = await firebase.getPaged({
  //     size: PAGE_SIZE,
  //     start: lastKey
  //   });

  //   setLastKnownKey(cursor);
  //   // Iteratively add posts
  //   // let allPosts = [];
  //   // if(feed){allPosts=[...feed]};
  //   // console.log("All Posts => ", allPosts)
  //   // for (let child of data) {
  //   //   allPosts = [...allPosts, child]
  //   // }
  //   console.log("Data => ", JSON.stringify(data))

  //   console.log("\n")
  //   let allPosts = [];
  //   if(feed){allPosts=[feed, data]};
  //   setFeed(allPosts);

  //   // Finish loading, this will stop the refreshing animation.
  //   setRefreshing(false);
  // }

  // const onPressFooter = () => fetchPosts(lastKnownKey);

  // const FooterComponent = () => {
  //   return(
  //     <View style={{alignItems: 'center'}}>
  //       <TouchableOpacity onPress={onPressFooter}><Text>Load more!</Text></TouchableOpacity>
  //     </View>
  //   )
  // }

  useEffect(()=>{
    fetchPosts(); // Temporary, fetch global posts
  },[])

  const fetchPosts = async () => {
    firebase.firestore().collection('globalPosts').orderBy('timestamp', 'desc').limit(50).get().then(function(querySnapshot) {
      // console.log(querySnapshot)
      let allPosts = [];
      querySnapshot.forEach(function(doc) { allPosts = [...allPosts, doc.data()]; });
      // console.log(JSON.stringify(allPosts))
      setFeed(allPosts);
      setRefreshing(false);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      {/* <Stories /> */}
      <FlatList
        // ListFooterComponent={FooterComponent}
        // ListFooterComponentStyle={{paddingBottom: 25}}
        // ListFooterComponentStyle={{ marginTop: -25 }}
        inverted={true}
        // initialScrollIndex={feed.length - 1}
        data={feed}
        renderItem={({ item }) => <Post item={item}/>}
        keyExtractor={item => item.postId}
        ListHeaderComponent={<View></View>}
        ListHeaderComponentStyle={{height:80}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={fetchPosts} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 50,
    // backgroundColor: '#0000FF',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
})

const Stack = createStackNavigator();
function FeedNavigator(P){
  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener for MultiFunction Button
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    P.navigation.navigate("New Post");
  }

  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={withFirebaseHOC(FeedScreen)} options={{ headerShown: false }}/>
      <Stack.Screen name="New Post" component={withFirebaseHOC(NewProfilePostScreen)} />
      <Stack.Screen name="Post List" component={withFirebaseHOC(PostListScreen)} />
    </Stack.Navigator>
  );
}

export default withFirebaseHOC(FeedNavigator)