import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { withFirebaseHOC } from '../config/Firebase'

function FeedScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Monch Feed!</Text>
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

export default withFirebaseHOC(FeedScreen)