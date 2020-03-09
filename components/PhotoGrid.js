import React from 'react';
import { FlatList } from 'react-native';

import PhotoGridItem from './PhotoGridItem';

export default function PhotoGrid(props){
  return (
    <FlatList
      numColumns={3}
      columnWrapperStyle={{
        marginHorizontal: -1,
        marginBottom: 1,
        justifyContent: 'space-between',
      }}
      contentContainerStyle={{ marginBottom: 64 }}
      renderItem={({ item }) => <PhotoGridItem {...item} />}
      keyExtractor={(item, index) => item.key + ' ' + index}
      {...props}
    />
  );
}