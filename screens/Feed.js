import React, { useEffect } from 'react'
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
import { 
  Avatar,
} from 'react-native-elements';

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
  return (
    <View style={PH.container}>
      <View style={PH.head}>
        <View style={PH.avatar}>
          <Text>HI</Text>
        </View>
        <View style={PH.info}>
          <Text style={PH.username}>{P.item.account}</Text>
          <Text style={PH.location}>Location</Text>
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
  return (
    <View style={PI.container}>
      {/* <Text>Image</Text> */}
      <Image style={PI.image} source={{ uri: P.item.source.uri, }} />
    </View>
    )
}

const PI = StyleSheet.create({
  container: {
    backgroundColor: '#00AA00',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
    zIndex: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

function PostBody(P){
  return (
    <View style={PB.container}>
      <View style={PB.buttons}>
        <Text>130 Likes</Text>
      </View>
      <TouchableOpacity><Text style={PB.recipie}>Recipie: Grilled Salmon & Salad Lunch</Text></TouchableOpacity>
      <View style={PB.descContainer}>
        <TouchableOpacity><Text style={PB.username}>{P.item.account}: </Text></TouchableOpacity>
        <Text>Lunch #MonchApp</Text>
      </View>
      <Text style={PB.timestamp}>10 Minutes Ago</Text>
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

  const MuliFuncAction = () => {
    console.log("Feed MultiFuncPress");
  }

  useEffect(() => {
    console.log("Effects Triggered");
    var MultiFuncUnsubscribe = P.navigation.addListener('MultiFuncPress', MuliFuncAction);
    const FocusListenerUnsub = P.navigation.addListener('focus', () => {
      MultiFuncUnsubscribe = P.navigation.addListener('MultiFuncPress', MuliFuncAction);
    });
    const BlurListenerUnsub = P.navigation.addListener('blur', () => {
      if(MultiFuncUnsubscribe){MultiFuncUnsubscribe();}
    });

    return ()=>{
      if(MultiFuncUnsubscribe){MultiFuncUnsubscribe();}
      if(FocusListenerUnsub){FocusListenerUnsub();}
      if(BlurListenerUnsub){BlurListenerUnsub();}
    };
  }, [P.navigation]);






  const  newData = DummyData;

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      {/* <Stories /> */}
      <FlatList
        ListFooterComponent={Stories}
        // ListFooterComponentStyle={{paddingBottom: 25}}
        ListFooterComponentStyle={{ marginTop: -25 }}
        inverted={true}
        initialScrollIndex={DummyData.length-1}
        data={newData}
        renderItem={({ item }) => <Post item={item}/>}
        keyExtractor={item => item.postID}
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

export function MultiFuncAction(P){
  console.log("Here");
}