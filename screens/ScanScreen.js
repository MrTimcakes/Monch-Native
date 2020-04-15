import React, { useState, useEffect } from 'react';
import { 
  ActivityIndicator,
  ScrollView, 
  StyleSheet, 
  Text, 
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import { createID } from 'Monch/utilities/utilities'

import Colors from 'Monch/constants/Colors';

import SwipeablePanel from 'Monch/components/SwipeablePanel';

import Nutriscore from 'Monch/assets/SVG/Nutriscore';
import Plus from 'Monch/assets/SVG/Plus';

import firebase from 'firebase/app';

export default function ScanScreen({firebase}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState(null);

  const closePanel = () => {
    setScanned(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setProductData( (await (await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)).json()) )
    setScanned(true);
  };

  const handleAddToInventory = () => {
    let uid = firebase.auth().currentUser.uid;
    firebase.firestore().collection("inventories").doc(uid).set({
      [productData.product.product_name]: {
        code: productData.code, 
        product_name: productData.product.product_name,
        image_front_thumb_url: productData.product.image_front_thumb_url,
        quantity: firebase.firestore.FieldValue.increment(1),
        dateModified: Date.now(),
        dataSource: 'OpenFoodFacts',
        uid: createID(),
      }
    }, { merge: true })
    .then(function() {
      setProductData(null);
      setScanned(false);
    })
    .catch(function(error) {
      alert("Something went wrong, try again later\nError: ", error);
    });
  }

  const PanelContent = () => {

    if(!productData){
      return (
        <View style={SS.loading}>
          <ActivityIndicator size="large" color={Colors.color2} style={{transform: [{ scale: 2 }]}} />
        </View>
      )
    }

    if(productData.status == 0){ // Product doesn't exist TODO: Ask user to add it
      return (
        <View style={SS.loading}>
          <Text>{productData.code} Doesn't exist in the database :(</Text>
        </View>
      )
    }

    if(!productData.product.product_name){
      return (
        <View style={SS.loading}>
          <Text>A Problem Occured :(</Text>
        </View>
      )
    }
    
    return(
      <View style={SU.container}>
        <View style={SU.title}>
        <Text style={SU.productName}>{productData.product.product_name}</Text>
        </View>
        <View style={SU.topLevel}>
          { productData.product.image_front_small_url ? <Image style={SU.productImage} source={{uri: productData.product.image_front_small_url}} /> : null }
          { productData.product.nutriscore_grade ? <Nutriscore width={160} height={60} score={productData.product.nutriscore_grade.toUpperCase()} /> : null}
          <TouchableOpacity style={SU.addButton} onPress={handleAddToInventory}>
            <Plus width={80} height={80} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  if (hasPermission === null) {
    return <View style={SS.centered}><Text>Requesting for camera permission</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={SS.centered}><Text>No access to camera</Text></View>;
  }

  return (
    <View style={SS.container}>
      <BarCodeScanner width="100%" height="100%"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <SwipeablePanel fullWidth noBackgroundOpacity closeOnTouchOutside isActive={scanned} onClose={closePanel} >
        <PanelContent />
      </SwipeablePanel>

    </View>
  );
} 

const SS = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  loadingText: {
    fontSize: 26,
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#458',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const SU = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    alignItems: 'center',
  },
  productName:{ 
    fontSize: 18,
  },
  topLevel:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // backgroundColor: '#333',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 7.5,
  },
  addButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.color2,
  }
})
