import React, { useState, useEffect } from 'react'
import { 
  View,
  Image,
} from 'react-native';


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

export default PostImage;