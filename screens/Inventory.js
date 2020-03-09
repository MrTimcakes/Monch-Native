import React, { useState } from 'react'
import { SafeAreaView, View, Image, TouchableOpacity, FlatList, StyleSheet, Text, } from 'react-native';
import { withFirebaseHOC } from '../utilities/Firebase'

function InventoryItem( item ) {
  return (
    <TouchableOpacity style={InvItemStyles.ItemContainer} >
      { item.image_front_thumb_url && <Image style={InvItemStyles.ProductImage} source={{uri: item.image_front_thumb_url}} /> }
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
  ProductImage:{
    width: 50,
    height: 50,
    marginLeft: 5,
    marginRight: 5,
  }
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
      
      <FlatList style={styles.listContainer}
        data={InventoryData.Inventory}
        renderItem={({ item }) => (
          <InventoryItem {...item} />
        )}
        keyExtractor={item => item.code}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer:{
    flex: 1,
    width: '100%',
  }
})

export default withFirebaseHOC(InventoryScreen)