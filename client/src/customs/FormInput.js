import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Image, Animated} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';
import IconEntypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

//import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({
  isEncript,
  labelValue,
  placeholderText,
  imageName,

  ...rest
}) => {
  const [isEncriptOpen, setisEncriptOpen] = useState(false);
  const [iconName, seticonName] = useState('eye-with-line');

  const onPressEncription = () => {
    if (isEncriptOpen) {
      seticonName('eye-with-line');
      setisEncriptOpen(false);
    } else {
      seticonName('eye');
      setisEncriptOpen(true);
    }
  };

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 1,
      duration: 400,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver: true,
      toValue: 0,
      duration: 400,
    }).start(() => {
      fadeIn();
    });
  };

  return (
    <View style={styles.inputContainer}>
      {imageName && (
        <Animated.View style={{opacity: fadeAnim}}>
          <Fontisto
            size={20}
            style={styles.icon}
            onPress={() => onPressEncription()}
            name={imageName}
          />
        </Animated.View>
      )}

      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#FFF"
        {...rest}
        secureTextEntry={!isEncriptOpen && isEncript}
        onFocus={() => {
          fadeOut();
        }}
        onBlur={() => {}}
      />
      {isEncript && (
        <IconEntypo
          size={20}
          style={styles.icon}
          onPress={() => onPressEncription()}
          name={iconName}
        />
      )}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 15,
    borderBottomColor: '#ccc',

    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0000',
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  icon: {
    padding: 10,
    zIndex: 100,
    color: '#FFF',
  },
});
