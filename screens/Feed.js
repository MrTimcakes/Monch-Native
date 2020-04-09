import React from 'react'
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  Avatar,
} from 'react-native-elements';

import Colors from '../constants/Colors';

import MonchHeader from 'Monch/components/MonchHeader';

import { withFirebaseHOC } from '../utilities/Firebase'


function Stories(props){
  return(
    <View style={S.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={S.ScrollContainer}>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
        <View style={S.avatar}><Text>HI</Text></View>
      </ScrollView>
    </View>
  )
}
const S = StyleSheet.create({
  container: {
    // backgroundColor: '#CCAAFF',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 50 + 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: -25,
    zIndex: 50,
    overflow: 'hidden',
    // borderBottomColor: '#00000080',
    // borderBottomWidth: 1,
  },
  ScrollContainer:{
    // backgroundColor: '#546459',
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
});


function PostHead(P){
  return (
    <View style={PH.container}>
      <View style={PH.head}>
        <View style={PH.avatar}>
          <Text>HI</Text>
        </View>
        <View style={PH.info}>
          <Text style={PH.username}>MrTimcakes</Text>
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
    // alignItems: 'center',
    zIndex: 1,
    width: '80%',
    marginBottom: -(25 + 25 + 50),
    paddingTop: 25 + 5,
  },
  head: {
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
      <Text>Image</Text>
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
  }
});

function PostBody(P){
  return (
    <View style={PB.container}>
      <Text>130 Likes</Text>
      <Text>Recipie: Grilled Salmon & Salad Lunch</Text>
      <Text>MrTmcakes Lunch #MonchApp</Text>
      <Text>10 Minutes Ago</Text>
    </View>
    )
  }

const PB = StyleSheet.create({
  container: {
    // backgroundColor: '#0000AA',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 2,
    borderRadius: 25,
    width: '100%',
    // height: 300,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -25,
    marginBottom: -25,
  }
});

function FeedScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{justifyContent:'center',alignItems:'center'}} >

        <PostHead />
        <PostImage />
        <PostBody />

        <PostHead />
        <PostImage />
        <PostBody />

        <PostHead />
        <PostImage />
        <PostBody />


      </ScrollView>
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