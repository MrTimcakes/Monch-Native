import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text, RefreshControl } from 'react-native';
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
      <View style={InvItemStyles.info}>
        <Text style={InvItemStyles.ProductName}>{item.product_name}</Text>
        <Text style={InvItemStyles.quantity}>{item.quantity}</Text>
      </View>
    </TouchableOpacity>
  );
}

const InvItemStyles = StyleSheet.create({
  ItemContainer: {
    flex: 1,
    // backgroundColor: '#325466',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    // width: '100%',
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
    borderRadius: 10,
  },
  info:{
    // backgroundColor: '#6668',
    width: '80%',
    // marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity:{

  }
})

function InventoryScreen(P) {
  const [search, setSearch] = useState('');
  const [inventoryData, setInventoryData] = useState(null);
  const [refreshing, setRefreshing] = React.useState(true);

  const ForceFetch = () => {
    let uid = P.firebase.auth().currentUser.uid;
    P.firebase.firestore().collection("inventories").doc(uid).get().then((doc) => {
      if (doc.exists) {
        setInventoryData( Object.entries(doc.data()) );
      }
      setRefreshing(false);
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  useEffect(() => {
    let uid = P.firebase.auth().currentUser.uid;
    var unsubscribe = P.firebase.firestore().collection("inventories").doc(uid).onSnapshot((doc) => {
      if (doc.exists) {
        setInventoryData( Object.entries(doc.data()) );
      }
      setRefreshing(false);
    })

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
      <SearchBar placeholder="Search Your Inventory" platform="ios" onChangeText={setSearch} value={search} containerStyle={{backgroundColor:'transparent'}}/>
      <FlatList style={styles.listContainer}
        data={inventoryData}
        renderItem={({ item }) => ( <InventoryItem {...item[1]} /> )}
        keyExtractor={item => item[1].uuid}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={ForceFetch}
          />
        }
      />
      {/* <FlatList style={styles.listContainer}
        data={inventoryData} 
      /> */}
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
function InventoryNavigator(P){
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

export default InventoryNavigator