import React, {useEffect, useState} from 'react'
import { 
  Linking,
  Text,
  View,
} from 'react-native';

export default function ProfileBody(){
  return(
    <View style={{ paddingHorizontal: 12, }}>
      <Text style={{ fontSize: 16, marginBottom: 4, fontWeight: '500' }}>Timothy Adamson</Text>
      <Text style={{ fontSize: 16 }}>
        I like to eat food, a lot of food.
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: '#003569',
          marginBottom: 4,
          fontWeight: '500',
        }}
        onPress={() => Linking.openURL('https:/MrTimcakes.com/')}>
        MrTimcakes.com
      </Text>
    </View>
  )
}