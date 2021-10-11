import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constants';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const CustomButton = ({buttonTitle, style, onPressAction}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressAction()}
      style={[styles.buttonContainer, style]}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
