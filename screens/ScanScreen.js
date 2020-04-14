import React, { useState, useEffect } from 'react';
import { 
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

import SwipeablePanel from 'Monch/components/SwipeablePanel';

import Nutriscore from 'Monch/assets/SVG/Nutriscore';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [swipeablePanelActive, setSwipeablePanelActive] = useState(true);

  const openPanel = () => {
    setSwipeablePanelActive(true);
  };

  const closePanel = () => {
    setSwipeablePanelActive(false);
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    let productName = (await (await fetch(`https://world.openfoodfacts.org/api/v0/product/${data}.json`)).json()).product.product_name
    alert(`Bar code with type ${type} and data ${data} has been scanned! Product: ${productName}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={SS.container}>
      <BarCodeScanner width="100%" height="100%"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}

      <SwipeablePanel
        fullWidth
        noBackgroundOpacity
        closeOnTouchOutside
        isActive={swipeablePanelActive}
        onClose={closePanel}
        onPressCloseButton={closePanel}
      >
        
        <View style={SU.container}>
          <View style={SU.title}>
            <Text>Long Grain 2 Minute Rice</Text>
          </View>
          <View style={SU.topLevel}>
            <Image style={SU.productImage} source={{uri: 'https://static.openfoodfacts.org/images/products/501/003/451/4003/front_en.82.200.jpg'}} />
            <Nutriscore width={160} height={60} score='B' />
            <Button title="ADD" />
          </View>
        </View>


      </SwipeablePanel>

    </View>
  );
} 

const SS = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#458',
  },
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
  topLevel:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 7.5,
  },
  nutriscore: {
    width: 60,
    height: 60,
    borderRadius: 20,

  }
})
