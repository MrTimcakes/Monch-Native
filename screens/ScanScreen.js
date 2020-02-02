import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function ScanScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Hello</Text>
      </View>
    </ScrollView>
  );
}

ScanScreen.navigationOptions = {
  title: 'Scan',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
