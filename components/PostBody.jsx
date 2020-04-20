import React, { useState, useEffect } from 'react'
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'
import TimeAgo from 'javascript-time-ago';

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

export default PostBody;