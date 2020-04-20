import React, { useState, useEffect } from 'react'
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native';

import PostHead from './PostHead';
import PostImage from './PostImage';
import PostBody from './PostBody';


function Post(P){
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

export default Post;