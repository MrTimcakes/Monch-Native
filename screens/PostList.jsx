import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';

import { withFirebaseHOC } from 'Monch/utilities/Firebase';

import Post from 'Monch/components/Post';

function PostList({route, firebase}){
  const [ post, setPost ] = useState(null);

  useEffect(() => {
    setPost( route.params?.post );
  }, []);

  // const FetchPost = (uid = uid, postId = postId) => {
  //   firebase.firestore().collection("users").doc(uid).collection("posts").doc(postId).get().then(function(doc) {
  //     if (doc.exists) {
  //       setPost( doc.data() );
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   }).catch(function(error) {
  //       console.log("Error getting document:", error);
  //   });
  
  // }

  if(post){
    return(
      <ScrollView>
        <Post item={post} />
        <View style={{height:80}}></View>
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