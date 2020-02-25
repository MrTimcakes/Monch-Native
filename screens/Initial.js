import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { withFirebaseHOC } from '../config/Firebase'

function InitialScreen(props) {

  useEffect(() => {

    (async ()=>{
      await props.firebase.checkUserAuth(user => {
        if (user) {
          // if the user has previously logged in
          props.navigation.navigate('App')
        } else {
          // if the user has previously signed out from the app
          props.navigation.navigate('Auth')
        }
      })
    })();

  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Initial Screen</Text>
      <Button
        title="Go to App"
        onPress={() => props.navigation.navigate('App')}
      />
    </View>
  );
}

export default withFirebaseHOC(InitialScreen)