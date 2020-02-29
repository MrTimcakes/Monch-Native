import React, { useState, useEffect } from 'react';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { Image, Button, Text, View } from 'react-native';
import { withFirebaseHOC } from '../utilities/Firebase'

function InitialScreen(props) {

  const [isReady, setIsReady] = useState(false);
  const [isLoginKnown, setisLoginKnown] = useState(false);

  useEffect(() => {

    (async ()=>{
      await props.firebase.checkUserAuth(user => {
        if (user) {
          // if the user has previously logged in
          setisLoginKnown(true);
          props.navigation.navigate('App')
        } else {
          // if the user has previously signed out from the app
          setisLoginKnown(true);
          props.navigation.navigate('Auth')
        }
      })
    })();

  });

  const _cacheResourcesAsync = async => {
    const images = [require('../assets/icon.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }

  if (!isReady || !isLoginKnown) {
    return (
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    ); 
  }

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../assets/icon.png')} />
    </View>
  );
}

export default withFirebaseHOC(InitialScreen)