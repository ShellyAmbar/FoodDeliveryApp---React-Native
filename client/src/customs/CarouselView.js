import React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CaruselItem from './CaruselItem';

const CarouselView = ({data, scrollX, width}) => {
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;

  return (
    <Animated.FlatList
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollX}}}],
        {
          useNativeDriver: true,
        }, // Optional async listener
      )}
      horizontal
      pagingEnabled
      data={data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return (
          <CaruselItem
            width={width}
            widthView={imageW}
            heightView={imageH}
            item={item}
          />
        );
      }}
    />
  );
};
export default CarouselView;

const styles = StyleSheet.create({});
