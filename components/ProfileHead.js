import React, {useEffect, useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { 
  Avatar,
  Button,
} from 'react-native-elements';
import Colors from '../constants/Colors';

export default function ProfileHead() {
  return (
    <View style={profile.Head}>
      {/* <Avatar style={profile.Image} title="MD" /> */}
      <Avatar style={profile.Image} source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', }} showEditButton rounded size={"xlarge"} />
      <View style={profile.Info}>
        <Text style={profile.Title}>Timothy Adamson</Text>
        <Text style={profile.Bio}>I like to eat food, a lot of food.</Text>
      </View>
      <View style={profile.Stats}>
      <View style={profile.Stat}>
          <Text style={profile.StatValue}>12</Text>
          <Text style={profile.StatTitle}>Badges</Text>
        </View>
        <View style={profile.Stat}>
          <Text style={profile.StatValue}>125</Text>
          <Text style={profile.StatTitle}>Followers</Text>
        </View>
        <View style={profile.Stat}>
          <Text style={profile.StatValue}>45</Text>
          <Text style={profile.StatTitle}>Following</Text>
        </View>
      </View>
      <View style={profile.Buttons}>
        <Button title="Follow" />
        <Button title="Block" type="outline" />
      </View>
    </View>
  );
  }

  const profile = StyleSheet.create({
    Head: {
      alignItems: 'center'
    },
    Image: {
      width: 128,
      height: 128,
      borderRadius: 128,
      margin: 15,
    },
    Info: {
      // margin: 15,
    },
    Title: {
      fontSize: 22,
      color: Colors.color4
    },
    Bio: {
      fontSize: 14,
      color: Colors.color3
    },
    Stats: {
      paddingLeft: 25,
      paddingRight: 25,
      margin: 10,
      // backgroundColor: 'pink',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    Stat: {
      alignItems: 'center',
    },
    StatTitle: {
      color: Colors.color3,
      fontSize: 14,
    },
    StatValue: {
      color: Colors.color1,
      fontSize: 18,
    },
    Buttons: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      margin: 10,
    },
  })