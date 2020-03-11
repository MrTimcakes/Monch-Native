import React, {useEffect, useState} from 'react'
import {
  View,
  ScrollView,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import ProfileHead from '../components/ProfileHead';
import PhotoGrid from '../components/PhotoGrid';
import Posts from '../constants/dummyData';

import { withFirebaseHOC } from '../utilities/Firebase'

function ProfileScreen(props) {
  useEffect(() => {
    props.navigation.setOptions({ title: 'MrTimcakes' })
  });

  return (
    <View>
      {/* <ProfileHead /> */}
      <PhotoGrid data={Posts} ListHeaderComponent={ProfileHead} />
    </View>
  );
}

const Stack = createStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default withFirebaseHOC(ProfileNavigator)
