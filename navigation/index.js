import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

import InitialScreen from '../screens/Initial';

const Stack = createStackNavigator();

export default function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Initial" >
        <Stack.Screen name="Initial" component={InitialScreen}/>
        <Stack.Screen name="Auth" component={AuthNavigation}/>
        <Stack.Screen name="App" component={AppNavigation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}