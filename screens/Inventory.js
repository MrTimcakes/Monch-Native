import React, { useState } from 'react'
import { View, Image, TouchableOpacity, FlatList, StyleSheet, Text, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withFirebaseHOC } from '../utilities/Firebase'

import MonchHeader from 'Monch/components/MonchHeader';

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

function InventoryScreen(props) {

  const [InventoryData, SetInventoryData] = useState(
      {Inventory:[]}
    );

  props.firebase.firestore().collection("inventories").doc(props.firebase.auth().currentUser.uid).onSnapshot(function(doc) {
    if (doc.exists) {
      SetInventoryData( doc.data() )
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <MonchHeader />
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

export default withFirebaseHOC(InventoryScreen)