import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  SearchBar,
} from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { withFirebaseHOC } from '../utilities/Firebase'

import MonchHeader from 'Monch/components/MonchHeader';

import ScanScreen from 'Monch/screens/ScanScreen';

function InventoryItem( item ) {
  return (
    <TouchableOpacity style={InvItemStyles.ItemContainer}>
      <View style={InvItemStyles.ProductImageContainer}>
        { item.image_front_thumb_url && <Image style={InvItemStyles.ProductImage} source={{uri: item.image_front_thumb_url}} /> }
      </View>
      <Text style={InvItemStyles.ProductName}>{item.product_name}</Text>
    </TouchableOpacity>
  );
}

const InvItemStyles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  ProductName:{
    //
  },
  ProductImageContainer:{
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  },
  ProductImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
})

function InventoryScreen(P) {
  const [search, setSearch] = useState('');
  const [InventoryData, SetInventoryData] = useState(
      {Inventory:[]}
    );

  useEffect(() => {
    let uid = P.firebase.auth().currentUser.uid;
    if(uid){
      var unsubscribe = P.firebase.firestore().collection("inventories").doc(uid).onSnapshot(function(doc) {
        if (doc.exists) {
          SetInventoryData( doc.data() )
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })

    }

    return unsubscribe;
  });

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      <SearchBar placeholder="Search Your Inventory" platform="ios" onChangeText={setSearch} value={search} containerStyle={{backgroundColor:'transparent'}}/>
      <FlatList style={styles.listContainer}
        data={InventoryData.Inventory}
        renderItem={({ item }) => (
          <InventoryItem {...item} />
        )}
        keyExtractor={item => item.uuid}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fAfAfA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer:{
    flex: 1,
    width: '100%',
  }
})

const Stack = createStackNavigator();
function StackContainer(P){

  useEffect(() => { return P.navigation.addListener("MultiFuncPress", MuliFuncAction); }, [P.navigation]); // Add listener for MultiFunction Button
  const MuliFuncAction = () => {
    if( !P.navigation.isFocused() ){return} // If not focused do nothing
    P.navigation.navigate("Scan");
  }


  return (
    <Stack.Navigator headerMode="none" initialRouteName="InventoryRoot">
      <Stack.Screen name="InventoryRoot" component={withFirebaseHOC(InventoryScreen)} />
      <Stack.Screen name="Scan" component={withFirebaseHOC(ScanScreen)} />
    </Stack.Navigator>
  );
}

export default StackContainer