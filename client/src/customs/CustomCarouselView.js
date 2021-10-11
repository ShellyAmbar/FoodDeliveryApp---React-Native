import React, {useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CarouselView from './CarouselView';
import CaruselBackground from './CaruselBackground';

const {width, height} = Dimensions.get('screen');
const CustomCarouselView = ({data}) => {
  let scrollX = useRef(new Animated.Value(0)).current;
  const imageW = width * 0.7;
  const imageH = imageW * 1.54;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <CaruselBackground scrollX={scrollX} data={data} width={width} />

      <CarouselView
        width={width}
        scrollX={scrollX}
        data={data}
        style={styles.carousel}
      />
    </View>
  );
};
export default CustomCarouselView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  carousel: {
    flex: 1,
  },
  backImage: {},
});
