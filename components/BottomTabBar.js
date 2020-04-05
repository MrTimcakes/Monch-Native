import React, { useState, useEffect } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import Colors from '../constants/Colors';

import Inventory from '../assets/SVG/Inventory.jsx';
import Recipies from '../assets/SVG/Recipies.jsx';
import Feed from '../assets/SVG/Feed.jsx';
import Profile from '../assets/SVG/Profile.jsx';

function MultiFunc(props){

  return (
    <TouchableOpacity style={MF.container}>
      <Text style={{color: 'white',fontSize: 38}}>+</Text>
    </TouchableOpacity>
  );
}

const MF = StyleSheet.create({
  container:{
    position: 'absolute',
    backgroundColor: Colors.color2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 65,
    height: 65,
    borderRadius: 50,
    // borderWidth: 1,
    left: (Dimensions.get('window').width/2) - (65/2),
    // top: -30,
    bottom: 20,
    zIndex: 9999,
  },
});



function BottomTabBar(props) {
  let { state, descriptors, navigation } = props;
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setIsVisible(false);
  };

  const _keyboardDidHide = () => {
    setIsVisible(true);
  };

  return (
    // <View style={{ flexDirection: 'row', display: isVisible ? null : 'none' }}>
    <View style={S.dev} pointerEvents="box-none">
      <MultiFunc />
      <View style={ StyleSheet.flatten([S.BottomTabBar, {display: isVisible ? null : 'none'}]) }>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
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

          const renderIcon = () =>{
            iconSize = 25;
            switch(route.name){
              case 'Inventory':
                return <Inventory width={iconSize} height={iconSize} isActive={isFocused} />
                break;
              case 'Recipies':
                return <Recipies width={iconSize} height={iconSize} isActive={isFocused}/>
                break;
              case 'Feed':
                return <Feed width={iconSize} height={iconSize} isActive={isFocused}/>
                break;
              case 'Profile':
                return <Profile width={iconSize} height={iconSize} isActive={isFocused}/>
                break;
              default:
                return <Inventory width={iconSize} height={iconSize}/>
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={ S.TabItem }
              key={route.key}
            >
              {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text> */}
              {renderIcon(route.name)}
              
            </TouchableOpacity>
          );
        })}      

      </View>
    </View>
  );
}

const S = StyleSheet.create({
  BottomTabBar:{
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    // backgroundColor: '#F3F3F3',
    backgroundColor: 'white',
    bottom: 0,
    height: 50,
    width: Dimensions.get('window').width,
    borderTopLeftRadius: 25, 
    borderTopRightRadius: 25,
    // borderWidth: 1,
  },
  TabItem:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    // backgroundColor: '#CCC',
    // borderWidth: 1,
    
  },
  dev:{
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
    // backgroundColor: 'yellow',
    width: Dimensions.get('window').width,
    height: 100,
  },
});

export default BottomTabBar;