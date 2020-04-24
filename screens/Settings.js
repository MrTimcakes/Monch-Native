import React, { useState, useEffect } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  FlatList,
  TextInput,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



import { withFirebaseHOC } from 'Monch/utilities/Firebase'

function Settings({firebase}){
  return (
    <SafeAreaView>
      
      <Text>Monch Settigns</Text>

    </SafeAreaView>
  );
}

export default withFirebaseHOC(Settings)