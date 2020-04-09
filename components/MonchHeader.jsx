import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native'

import TitlePath from 'Monch/assets/SVG/TitlePath';

function MonchHeader(P){

  return(
    <View style={S.container}>
      <TitlePath height={30} fill={'#323232'} stroke={'#323232'}/>
    </View>
  );
}

const S = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderBottomColor: '#00000080',
    borderBottomWidth: 1,
  },
});

export default MonchHeader;
