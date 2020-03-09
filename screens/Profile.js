import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import ProfileHead from '../components/ProfileHead';
import ProfileBody from '../components/ProfileBody';
import PhotoGrid from '../components/PhotoGrid';
// import Posts, { Highlights } from '../constants/Posts';
import Posts from '../constants/dummyData';

import { withFirebaseHOC } from '../utilities/Firebase'

function ProfileScreen(props) {
  useEffect(() => {
    props.navigation.setOptions({ title: 'MrTimcakes' })
  });

  return (
    <View>
      <ProfileHead />
      <ProfileBody />
      <PhotoGrid data={Posts} />
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
