import React from 'react';
import { FlatList, View, Text } from 'react-native';

// import 

export default function PostList(P){
  return (
    <View>
      <Text>Test: {P.route.params?.postId}</Text>
    </View>
    // <FlatList
    //   contentContainerStyle={{ marginBottom: 64 }}
    //   renderItem={({ item }) => <PhotoGridItem {...item} />}
    //   keyExtractor={(item, index) => item.postId}
    //   {...props}
    // />
  );
}