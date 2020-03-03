import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import InventoryScreen from '../screens/Inventory';
import RecipiesScreen from '../screens/Recipies';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

import ScanScreen from '../screens/ScanScreen';
import MonchBottomTabBar from '../components/MonchBottomTabBar';

const Tab = createBottomTabNavigator();
const screenOptions=({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Inventory':
        iconName = focused ? 'shopping-basket' : 'shopping-basket';
        break;
      case 'Recipies':
        iconName = focused ? 'cutlery' : 'cutlery';
        break;
      case 'Feed':
        iconName = focused ? 'feed' : 'feed';
        break;
      case 'Profile':
        iconName = focused ? 'user' : 'user';
        break;
      default:
        iconName = focused ? 'info-circle' : 'info-circle';
    }

    // You can return any component that you like here!
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
})

const tabBarOptions={
  activeTintColor: Colors.tabIconSelected,
  inactiveTintColor: Colors.tabIconDefault,
}

function TabContainer() {
  return (
    <Tab.Navigator headerMode="none"
    // initialRouteName="Recipies" screenOptions={screenOptions} tabBarOptions={tabBarOptions} 
    tabBar={props => <MonchBottomTabBar {...props} />} >
      <Tab.Screen name="Inventory" component={InventoryScreen}/>
      <Tab.Screen name="Recipies" component={RecipiesScreen}/>
      <Tab.Screen name="Button" component={ ScanScreen }/>
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

