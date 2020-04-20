import React, { useState, useEffect } from 'react'
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import TimeAgo from 'javascript-time-ago';

import Colors from '../constants/Colors';

import MonchHeader from 'Monch/components/MonchHeader';
import Post from 'Monch/components/Post';

import { withFirebaseHOC } from '../utilities/Firebase'

function FeedScreen(P) {
  const [feed, setFeed] = useState(null);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(()=>{
    fetchPosts('OS2GbNqiREVn3WBh3y0U6zvgg4w2'); // Temporary, fetch posts from me
  },[])

  const fetchPosts = (uid) => {
    P.firebase.firestore().collection("users").doc(uid).collection("posts").get().then(function(querySnapshot) {
      let allPosts = [];
      querySnapshot.forEach(function(doc) { allPosts = [...allPosts, doc.data()]; });
      setFeed(allPosts);
      setRefreshing(false);
    });
  }

  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener 
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    console.log("Feed MultiFuncPress");
  }

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      {/* <Stories /> */}
      <FlatList
        // ListFooterComponent={Stories}
        // ListFooterComponentStyle={{paddingBottom: 25}}
        // ListFooterComponentStyle={{ marginTop: -25 }}
        inverted={true}
        // initialScrollIndex={feed.length - 1}
        data={feed}
        renderItem={({ item }) => <Post item={item}/>}
        keyExtractor={item => item.postId}
        ListHeaderComponent={<View></View>}
        ListHeaderComponentStyle={{height:80}}
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

export default withFirebaseHOC(FeedScreen)