import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Square from './Square';

export default function PhotoGridItem(props){
  const { hasMulti } = props;
  return (
    <Square
      style={{
        aspectRatio: 1,
        flex: 0.333,
        marginRight: 1,
      }}
    >
      <TouchableOpacity
        // onPress={() =>
        //  Navigate to post page
        //   NavigationService.navigate('Profile_Details', { item: props })
        // }
        activeOpacity={0.6}
        style={{ flex: 1 }}
      >
        <Image
          style={{
            resizeMode: 'cover',
            flex: 1,
          }}
          source={props.source}
        />
      </TouchableOpacity>

      {hasMulti && (
        <Ionicons
          style={{
            transform: [{ scaleX: -1 }],
            position: 'absolute',
            top: 8,
            right: 8,
          }}
          name={'md-copy'}
          size={26}
          color={'white'}
        />
      )}
    </Square>
  );
}
