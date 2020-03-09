import React, {useEffect, useState} from 'react'
import {
  Text,
  View,
} from "react-native";

export default function ProfileHead() {
    return (
      <View style={{ padding: 20, flexDirection: "row" }}>
        <View style={{ width: 96, height: 96, borderRadius: 192, borderWidth: 1, marginRight: 10 }} />
  
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 5
          }}
        >
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>39</Text>
              <Text>Posts</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>339</Text>
              <Text>followers</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>395</Text>
              <Text>following</Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: "100%",
              marginLeft: 1,
              alignItems: "center"
            }}
          >
            <Text>Edit Profile</Text>
          </View>
        </View>
      </View>
    );
  }