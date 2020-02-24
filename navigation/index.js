// import { createSwitchNavigator, createAppContainer } from 'react-navigation'
// import Initial from '../screens/Initial'
// import AuthNavigation from './AuthNavigation'
// import AppNavigation from './AppNavigation'

// const SwitchNavigator = createSwitchNavigator(
//   {
//     Initial: Initial,
//     Auth: AuthNavigation,
//     App: AppNavigation
//   },
//   {
//     initialRouteName: 'Initial'
//   }
// )

// const AppContainer = createAppContainer(SwitchNavigator)

// export default AppContainer


import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.navigator>
    </NavigationContainer>
  );
}