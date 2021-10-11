import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CaruselItem = ({width, widthView, heightView, item}) => {
  const styles = StyleSheet.create({
    container: {
      width: width,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {
      width: widthView,
      height: heightView,
      resizeMode: 'cover',
      borderRadius: 20,
    },
    title: {
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
      fontWeight: '700',
      color: '#FFF',
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{uri: item.uri}} style={styles.img} />
    </View>
  );
};
export default CaruselItem;
