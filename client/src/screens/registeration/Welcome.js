import {useNavigation} from '@react-navigation/core';
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
import {COLORS} from '../../constants';
import CustomButton from '../../customs/CustomButton';
import CustomCarouselView from '../../customs/CustomCarouselView';
const {width, height} = Dimensions.get('screen');
import {data} from '../../customs/dataCarusel';

const Welcome = () => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#000',
      flex: 1,
      alignItems: 'center',
    },
    btns: {
      alignItems: 'center',
      position: 'absolute',
      zIndex: 200,
      bottom: 40,
      paddingLeft: 30,
      paddingRight: 30,
      width: width,
    },
    btn1: {
      width: '100%',
      backgroundColor: COLORS.primary,
    },
    btn2: {
      width: '100%',
    },
  });

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.btns}>
        <CustomButton
          onPressAction={handleLogin}
          style={styles.btn2}
          buttonTitle={'Login'}
        />
        <CustomButton
          onPressAction={handleSignUp}
          style={styles.btn1}
          buttonTitle={'SignUp'}
        />
      </View>

      <CustomCarouselView data={data} />
    </View>
  );
};
export default Welcome;
