import React, { useState, useEffect } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
} from 'react-native'


function PostHead(P){
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

export default PostHead;