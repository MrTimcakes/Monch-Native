import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MonchTabBar from '../components/BottomTabBar';
import EmptyComponent from '../components/EmptyComponent';

import InventoryScreen from '../screens/Inventory';
import RecipiesScreen from '../screens/Recipies';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import SignoutScreen from '../screens/auth/Signout';

const Tab = createBottomTabNavigator();
function TabContainer() {
  return (
    <Tab.Navigator tabBar={props => <MonchTabBar {...props}/>} >
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Recipies" component={RecipiesScreen} />
      <Tab.Screen name="MULTIFUNC" component={EmptyComponent} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function App() {
  return (
    <Drawer.Navigator headerMode="none" initialRouteName="App" >
      <Drawer.Screen name="App" component={TabContainer}/>
      <Drawer.Screen name="Settings" component={SettingsScreen}/>
      <Drawer.Screen name="Sign Out" component={SignoutScreen}/>
    </Drawer.Navigator>
  );
}

export default App;