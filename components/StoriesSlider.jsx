import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

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

export default Stories;