import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Barcode from '../assets/SVGs/Barcode.jsx'

function MonchBottomTabBar({ state, descriptors, navigation }) {

  const IconMap = {
    'Inventory': <FontAwesome name={'shopping-basket'} size={25} />,
    'Recipies': <FontAwesome name={'cutlery'} size={25} />,
    'Feed': <FontAwesome name={'feed'} size={25} />,
    'Profile': <FontAwesome name={'user'} size={25} />,
    // 'Button': <TouchableOpacity style={styles.Button}><FontAwesome name={'barcode'} size={25} /></TouchableOpacity>
    'Button': <TouchableOpacity style={styles.Button}><Barcode width={25} height={25} viewBox={'0 0 75 56'}/></TouchableOpacity>
  }
  
  const TabBarElement = (route, index) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined ? options.tabBarLabel
        : options.title !== undefined ? options.title
        : route.name;
  
    const isFocused = state.index === index;
  
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
      });
  
      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name);
      }
    };
  
    const onLongPress = () => {
      navigation.emit({
        type: 'tabLongPress',
        target: route.key,
      });
    };
  
    return (
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityStates={isFocused ? ['selected'] : []}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.TabBarElement}
        key={route.key}
      >
        {IconMap[route.name]}
        {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          {label}
        </Text> */}
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.BottomTabBar}>

      {state.routes.map( TabBarElement )}

    </View>
  );
}

const styles = StyleSheet.create({
  BottomTabBar: {
    position: 'absolute',
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    bottom: 0,
    height: 50,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    // elevation:12,
    // shadowOffset: { width: 15, height: 15 },
    // shadowColor: "grey",
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // marginTop: 150
  },
  TabBarElement:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  Button: {
    backgroundColor: '#5663FF',
    width: 50,
    height: 50,
    borderRadius: 50,
    // position: 'absolute',
    top: -25,
    // zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


// function TabBarElement(route){
//   console.log(route)

//   switch(route.name){
//     case 'Inventory':
//       iconName = focused ? 'shopping-basket' : 'shopping-basket';
//       break;
//     case 'Recipies':
//       iconName = focused ? 'cutlery' : 'cutlery';
//       break;
//     case 'Feed':
//       iconName = focused ? 'feed' : 'feed';
//       break;
//     case 'Profile':
//       iconName = focused ? 'user' : 'user';
//       break;
//     default:
//       iconName = focused ? 'info-circle' : 'info-circle';
//   }

//   return(
//     <View>
//       <FontAwesome name={iconName} />;
//       <Text>Boi</Text>
//     </View>
//   );
// }

export default MonchBottomTabBar