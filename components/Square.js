import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Square(props){
  const [state, setState] = React.useState({isLoaded: false});
  
  const resize = ({
    nativeEvent: {
      layout: { width, height },
    },
  }) => {
    setState({ width, height, isLoaded: true });
  };

  const getStyle = () => {
    const inputStyle = StyleSheet.flatten(props.style) || {};
    const { aspectRatio = 1 } = inputStyle;
    const style = [inputStyle, { aspectRatio }];

    if (state.isLoaded) {
      const { width = 0, height = 0 } = state;
      if (width === 0) {
        style.push({ width: height * aspectRatio, height });
      } else {
        style.push({ width, height: width * aspectRatio });
      }
    }
    return style;
  };

  return (
    <View {...props} style={getStyle()} onLayout={resize} />
  );

}
