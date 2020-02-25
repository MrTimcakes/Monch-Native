import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withFirebaseHOC } from '../config/Firebase'

function RecipiesScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Monch Recipies!</Text>
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

export default withFirebaseHOC(RecipiesScreen)