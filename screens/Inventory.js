import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { withFirebaseHOC } from '../config/Firebase'

function InventoryScreen(props) {

  const SignOut = async () => {
    try {
      await props.firebase.signOut()
      props.navigation.navigate('Auth')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
        <Text>Monch Inventory</Text>
        <Button
          title='Signout'
          onPress={SignOut}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default withFirebaseHOC(InventoryScreen)