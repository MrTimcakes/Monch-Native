// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Image, Button, Text, View } from 'react-native';
import { withFirebaseHOC } from '../utilities/Firebase'

// import InitialScreen from '../screens/Initial';

const Stack = createStackNavigator();

function AppContainer(P) {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // setIsLoggedIn(  )
  // let user = P.firebase.auth().currentUser;

  // console.log(user);

  P.firebase.auth().onAuthStateChanged((user) => {
    console.log("Auth State Changed");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  const _cacheResourcesAsync = async => {
    const images = [
      require('../assets/icon.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    ); 
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Initial" >       
          {!isLoggedIn? <Stack.Screen name="Auth" component={AuthNavigation}/>: null }
          {isLoggedIn? <Stack.Screen name="App" component={AppNavigation}/>: null }     
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default withFirebaseHOC(AppContainer);