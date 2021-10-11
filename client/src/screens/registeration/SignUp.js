import React, {useContext, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import FormInput from '../../customs/FormInput';
import FormButton from '../../customs/FormButton';
import SocialButton from '../../customs/SocialButton';
//import {AuthContext} from '../../navigation/AuthProvider';
import {useNavigation, useTheme} from '@react-navigation/native';
import {authCreators} from '../../models/root-actions';
import {COLORS} from '../../constants';
import {data} from '../../customs/dataCarusel';
import CaruselBackground from '../../customs/CaruselBackground';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [orgenization, setOrgenization] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repitedPassword, setRepitedPassword] = useState('');
  let scrollX = useRef(new Animated.Value(0)).current;
  const {width, height} = Dimensions.get('screen');
  const navigation = useNavigation();
  // const {googleLogin, fbLogin} = useContext(AuthContext);
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {signup} = bindActionCreators(authCreators, dispatch);
  let emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  );
  let passwordPattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );
  let phonePattern = new RegExp(/^[0-9\b]+$/);
  const signupRequest = () => {
    try {
      if (
        email.length === 0 ||
        password.length === 0 ||
        firstName.length === 0 ||
        orgenization.length === 0
      ) {
        throw 'Data is empthy';
      }
      if (!emailPattern.test(email)) {
        throw 'Please enter valid email address.';
      }
      if (password !== repitedPassword) {
        throw 'Passwords are not the same. Try again.';
      } else if (!passwordPattern.test(password)) {
        throw 'Password should have Upper case chars, special chars and numbers. Try again.';
      }
      if (!phonePattern.test(phone)) {
        throw 'Phone is not valid.';
      }

      signup(
        email,
        firstName,
        lastName,
        orgenization,
        phone,
        password,

        () => {
          if (authState.err) {
            console.log('authState.err', authState.err);
          }
          if (authState.message) {
            console.log('authState', authState);
          }
        },
      );
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };

  const styles = StyleSheet.create({
    container: {
      height: height,
      width: width,

      alignItems: 'center',
    },
    content: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    scrollView: {
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 100,
      padding: 20,
    },
    image: {
      marginTop: 60,
      borderRadius: 80,
      borderWidth: 1,
      borderColor: '#afa3f5',
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    textTitle: {
      color: COLORS.primary,
      marginTop: 30,
      alignSelf: 'center',
      fontSize: 40,
      marginBottom: 10,
      fontWeight: '700',
    },
    textSubTitle: {
      alignSelf: 'flex-start',
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
      fontWeight: '400',
      color: COLORS.white,
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    signupButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primary,
      fontFamily: 'Lato-Regular',
    },
    button: {
      alignSelf: 'flex-start',
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      padding: 20,
    },
    row: {
      flex: 1,
      flexDirection: 'row',

      alignItems: 'center',
      width: '100%',
    },
    termsButton: {
      bottom: 50,
      marginVertical: 35,
      borderBottomColor: COLORS.primary,
      borderBottomWidth: 1,
    },
    termsButtonText: {
      fontSize: 15,
      color: COLORS.white,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>Sign Up</Text>

          <Text style={styles.textSubTitle}>Personal Details</Text>
          <FormInput
            labelValue={firstName}
            onChangeText={value => setfirstName(value)}
            placeholderText="First Name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={lastName}
            onChangeText={value => setLastName(value)}
            placeholderText="Last Name"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={email}
            onChangeText={userEmail => setEmail(userEmail)}
            placeholderText="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            imageName="email"
          />

          <FormInput
            labelValue={orgenization}
            onChangeText={orgenization => setOrgenization(orgenization)}
            placeholderText="Orgenization"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <FormInput
            labelValue={phone}
            onChangeText={phone => setPhone(phone)}
            placeholderText="Phone"
            autoCapitalize="none"
            keyboardType="numeric"
            autoCorrect={false}
          />

          <Text style={styles.textSubTitle}>Password</Text>

          <FormInput
            isEncript={true}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Password"
            imageName="locked"
          />
          <FormInput
            isEncript={true}
            labelValue={repitedPassword}
            onChangeText={userPassword => setRepitedPassword(userPassword)}
            placeholderText="Retype Password"
            imageName="locked"
          />

          <FormButton
            style={styles.button}
            buttonTitle="Sign Up"
            onPress={() => signupRequest()}
          />

          {Platform.OS === 'android' ? (
            <View>
              <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
              />

              <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
              />
            </View>
          ) : null}

          <View style={styles.signupButton}>
            <Text>have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.termsButton}
            // onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.termsButtonText}>
              Our Terms of Use and Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CaruselBackground
        style={styles.carousel}
        scrollX={scrollX}
        data={data}
        width={width}
      />
    </View>
  );
};

export default SignUp;
