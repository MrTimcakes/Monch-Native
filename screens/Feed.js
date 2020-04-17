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
import DummyData from '../constants/dummyData';

import MonchHeader from 'Monch/components/MonchHeader';

import { withFirebaseHOC } from '../utilities/Firebase'


function Stories(props){
  return(
    <View style={S.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={S.ScrollContainer}>
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </ScrollView>
    </View>
  )
}

function StoryItem(P){
  return(
    <View style={S.item}>
      <View style={S.avatar}><Text>HI</Text></View>
      <Text style={S.username}>You</Text>
    </View>
  )
}

const S = StyleSheet.create({
  container: {
    // backgroundColor: '#CCAAFF',
    backgroundColor: Colors.offWhite,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60 + 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // marginBottom: -25,
    zIndex: 50,
    overflow: 'hidden',
    // borderBottomColor: '#00000080',
    // borderBottomWidth: 1,
  },
  ScrollContainer:{
    // backgroundColor: '#546459',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#84DC2A',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  username: {
    marginTop: -5,
    fontSize: 12,
  },
});


function PostHead(P){
  // console.log(P)
  const { authorUid, authorUsername, location } = P.item;
  return (
    <View style={PH.container}>
      <View style={PH.head}>
        <TouchableOpacity style={PH.avatar}>
          <Text>HI</Text>
        </TouchableOpacity>
        <View style={PH.info}>
          <TouchableOpacity><Text style={PH.username}>{authorUsername ?? 'PLACEHOLDER'}</Text></TouchableOpacity>
          <Text style={PH.location}>{location?.shortName ?? ''}</Text>
        </View>
      </View>
    </View>
    )
}

const PH = StyleSheet.create({
  container: {
    // backgroundColor: '#AA0000',
    // justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    width: '100%',
    marginBottom: -(25 + 25 + 50),
    paddingTop: 25 + 5,
  },
  head: {
    width: '80%',
    // backgroundColor: '#AA0000',
    backgroundColor: '#FAFAFA',
    borderRadius: 7.5,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#84DC2A',
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  info: {
    justifyContent: 'center',
    height: 50,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontWeight: 'normal',
  },
});

function PostImage(P){
  const { imageWidth, imageHeight, image } = P.item;
  const aspect = imageWidth / imageHeight || 1;

  return (
    <View style={{
      backgroundColor: "#D8D8D8",
      width: "100%",
      aspectRatio: aspect
    }}>
      {/* <Text>Image</Text> */}
      <Image style={{ width: '100%', height: '100%', }} source={{ uri: image, }} resizeMode='contain' />
    </View>
    )
}

function PostBody(P){
  const { authorUid, authorUsername, location, description, likes, postId, recipie, timestamp } = P.item;
  const timeAgo = new TimeAgo('en-US')
  return (
    <View style={PB.container}>
      <View style={PB.buttons}>
        <Text>{likes ?? '0'} Likes</Text>
      </View>
      {recipie ? // TODO: Link to recipie via recipie?.uuid
        <TouchableOpacity><Text style={PB.recipie}>Recipie: {recipie?.shortName ?? 'Missing'}</Text></TouchableOpacity>
      : null }
      <View style={PB.descContainer}>
        <TouchableOpacity><Text style={PB.username}>{authorUsername}: </Text></TouchableOpacity>
      <Text>{description ?? ''}</Text>
      </View>
      <Text style={PB.timestamp}>{timeAgo.format(timestamp)}</Text>
    </View>
    )
  }

const PB = StyleSheet.create({
  container: {
    // backgroundColor: '#0000AA',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 5,
    borderRadius: 25,
    width: '100%',
    // height: 300,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -25,
    marginBottom: -25,
    overflow: 'visible',
  },
  buttons: {
    
  },
  descContainer: {
    flexDirection: 'row',
  },
  recipie: {
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  timestamp: {
    color: '#AAA',
  },
});


function Post(P){
  // console.log(P)
  return (
    <View style={Pstyles.container}>
      <PostHead item={P.item} />
      <PostImage item={P.item} />
      <PostBody item={P.item} />
    </View>
    )
}

const Pstyles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'visible',
  }
});

function FeedScreen(P) {
  // const  newData = DummyData.reverse();
  const [feed, setFeed] = useState(null);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(()=>{
    fetchPosts('OS2GbNqiREVn3WBh3y0U6zvgg4w2'); // Temporary, fetch posts from me
  },[])

  const fetchPosts = (uid) => {
    P.firebase.firestore().collection("users").doc(uid).collection("posts").get().then(function(querySnapshot) {
      let allPosts = [];
      querySnapshot.forEach(function(doc) { allPosts = [...allPosts, doc.data()]; });
      console.log( allPosts == querySnapshot )
      setFeed(allPosts);
      setRefreshing(false);
    });
  }

  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener 
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    console.log("Feed MultiFuncPress");
  }



  const  newData = DummyData;

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      {/* <Stories /> */}
      <FlatList
        // ListFooterComponent={Stories}
        // ListFooterComponentStyle={{paddingBottom: 25}}
        // ListFooterComponentStyle={{ marginTop: -25 }}
        inverted={true}
        // initialScrollIndex={newData.length - 1}
        // initialScrollIndex={DummyData.length-1}
        data={feed}
        renderItem={({ item }) => <Post item={item}/>}
        keyExtractor={item => item.postID}
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