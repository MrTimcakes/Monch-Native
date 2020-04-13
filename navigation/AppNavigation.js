import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import MonchTabBar from '../components/BottomTabBar';
import EmptyComponent from '../components/EmptyComponent';

import InventoryScreen from '../screens/Inventory';
import RecipiesScreen from '../screens/Recipies';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

import DevScreen from '../screens/Dev';
import Login2 from '../screens/auth/Login.jsx';

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator tabBar={props => <MonchTabBar {...props}/>} >
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Recipies" component={RecipiesScreen} />
      <Tab.Screen name="MULTIFUNC" component={EmptyComponent}/>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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