import React, {useEffect, useState} from 'react'
import {
  View,
  ScrollView,
  Text,
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';

import NewProfilePostScreen from 'Monch/screens/NewProfilePost';

import ProfileHead from '../components/ProfileHead';
import PhotoGrid from '../components/PhotoGrid';
import Posts from '../constants/dummyData';

import { withFirebaseHOC } from '../utilities/Firebase'

function ProfileScreen(props) {
  useEffect(() => {
    props.navigation.setOptions({ title: 'MrTimcakes' })
  }, []);

  return (
    <View>
      {/* <ProfileHead /> */}
      <PhotoGrid data={Posts} ListHeaderComponent={ProfileHead} />
    </View>
  );
}


const Stack = createStackNavigator();
function ProfileNavigator(P){
  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener for MultiFunction Button
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    P.navigation.navigate("New Post");
  }

  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={withFirebaseHOC(ProfileScreen)} options={{ headerShown: true }} />
      <Stack.Screen name="New Post" component={withFirebaseHOC(NewProfilePostScreen)} />
    </Stack.Navigator>
  );
}

export default withFirebaseHOC(ProfileNavigator)