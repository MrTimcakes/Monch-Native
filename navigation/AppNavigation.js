import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InventoryScreen from '../screens/Inventory';
import RecipiesScreen from '../screens/Recipies';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator headerMode="none" initialRouteName="Recipies" >
      <Tab.Screen name="Inventory" component={InventoryScreen}/>
      <Tab.Screen name="Recipies" component={RecipiesScreen}/>
      <Tab.Screen name="Feed" component={FeedScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator headerMode="none" initialRouteName="App" >
      <Drawer.Screen name="App" component={TabContainer}/>
      <Drawer.Screen name="Settings" component={SettingsScreen}/>
    </Drawer.Navigator>
  );
}

