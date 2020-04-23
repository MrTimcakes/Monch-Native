import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { withFirebaseHOC } from 'Monch/utilities/Firebase';

import Post from 'Monch/components/Post';

function PostList({route, firebase}){
  const [ post, setPost ] = useState(null);

  useEffect(() => {
    setPost( route.params?.post );
  }, []);

  if(post){
    return(
      <ScrollView>
        <Post item={post} />
        <View style={{height:100}}></View>
      </ScrollView>
    ) 
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading</Text>
    </View>
  );
}

export default withFirebaseHOC(PostList)