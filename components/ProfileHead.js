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

export default function ProfileHead({profile}) {
  return (
    <View style={PS.Head}>
      {/* <Avatar style={PS.Image} title="MD" /> */}
      <Avatar style={PS.Image} source={{ uri: profile?.profileImage ?? 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', }} rounded size={"xlarge"} />
      <View style={PS.Info}>
        <Text style={PS.Title}>{profile?.username ?? ''}</Text>
        <Text style={PS.Bio}>{profile?.bio ?? 'Ask me to write a bio!'}</Text>
      </View>
      <View style={PS.Stats}>
      <View style={PS.Stat}>
          <Text style={PS.StatValue}>{profile?.badges.length.toString() ?? '0'}</Text>
          <Text style={PS.StatTitle}>Badges</Text>
        </View>
        <View style={PS.Stat}>
          <Text style={PS.StatValue}>{profile?.followers ?? '0'}</Text>
          <Text style={PS.StatTitle}>Followers</Text>
        </View>
        <View style={PS.Stat}>
          <Text style={PS.StatValue}>{profile?.following ?? '0'}</Text>
          <Text style={PS.StatTitle}>Following</Text>
        </View>
      </View>
      <View style={PS.Buttons}>
        <Button title="Follow" />
        <Button title="Block" type="outline" />
      </View>
    </View>
  );
  }

  const PS = StyleSheet.create({
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
      textAlign: 'center',
      color: Colors.color4
    },
    Bio: {
      fontSize: 14,
      textAlign: 'center',
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