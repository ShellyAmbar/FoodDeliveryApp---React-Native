import React from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';

const CaruselBackground = ({data, scrollX, width}) => {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            source={{uri: item.uri}}
            key={`image-${index}`}
            style={[StyleSheet.absoluteFillObject, {opacity}]}
            blurRadius={20}
          />
        );
      })}
    </View>
  );
};
export default CaruselBackground;
const styles = StyleSheet.create({});
