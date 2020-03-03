import React from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native'
import { SvgUri } from 'react-native-svg';
import BottomDrawer from 'rn-bottom-drawer';

export default function ItemDrawer(props) {
  return (
    <BottomDrawer
        containerHeight={500}
        offset={50}
        downDisplay={350}
        startUp={false}
        roundedEdges={true}
        shadow={true}
        // backgroundColor={'#555555'}
      >
        <View>
          <Bar></Bar>
          {/* <Text>Get directions to your location {props.code}</Text> */}
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <View style={styles.container}>
            <Text style={styles.productName}>Long Grain 2 Minute Rice</Text>
            <View style={styles.tobenamed}>
              <Image style={{width: 75, height: 75}} resizeMode={'contain'} source={{uri: 'https://static.openfoodfacts.org/images/products/501/003/451/4003/front_en.82.200.jpg'}} />
              <SvgUri width="100%" height="100%" uri="https://static.openfoodfacts.org/images/misc/nutriscore-b.svg" />
            </View>
          </View>
        </View>
      </BottomDrawer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center"
  },
  productName: {
    fontSize: 18,
  },
  tobenamed: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between", 
  }
})

export const Bar = ({ barStyle }) => {
  return (
    <View style={BarStyles.barContainer}>
      <View style={[BarStyles.bar, barStyle]} />
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  bar: {
    width: "40%",
    height: 6,
    borderRadius: 5,
    marginTop: 6,
    marginBottom: 0,
    backgroundColor: "#e2e2e2"
  }
});