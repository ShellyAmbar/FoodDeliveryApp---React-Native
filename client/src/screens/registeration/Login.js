import React, {useContext, useEffect, useRef, useState} from 'react';
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
//import {AuthContext} from '../navigation/AuthProvider';
import {useNavigation, useTheme} from '@react-navigation/native';
import {authCreators} from '../../models/root-actions';
import {COLORS} from '../../constants';
import CaruselBackground from '../../customs/CaruselBackground';
import {data} from '../../customs/dataCarusel';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  // const {googleLogin, fbLogin} = useContext(AuthContext);
  const authState = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {login} = bindActionCreators(authCreators, dispatch);
  let scrollX = useRef(new Animated.Value(0)).current;
  const [offset, setoffset] = useState(0);
  const {width, height} = Dimensions.get('screen');

  let emailPattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/,
  );
  let passwordPattern = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
  );

  const loginRequest = (email, password) => {
    try {
      if (email.length === 0 || password.length === 0) {
        throw 'empthy data';
      }
      if (!emailPattern.test(email)) {
        throw 'Please enter valid email address.';
      }
      if (!passwordPattern.test(password)) {
        throw 'Password should have Upper case chars, special chars and numbers. Try again.';
      }
      console.log(email + password);
      login(email, password, () => {
        if (authState.err) {
          console.log('authState.err', authState.err);
        }
        if (authState.message) {
          console.log('authState', authState);
          //  navigation.navigate('Tabs');
        }
      });
    } catch (e) {
      alert(e);
      console.log(e);
    }
  };
  useEffect(() => {
    let num = data.length;
    const interval = setInterval(
      () => {
        if (num > 0) {
          num--;

          scrollX.setValue(width * num);
        } else {
          num = data.length;
          // clearInterval(interval);
        }
      },
      1000,
      200,
    );
  }, []);

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
      marginBottom: 30,
      fontWeight: '700',
    },
    navButton: {
      marginTop: 15,
      marginVertical: 35,
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
      marginVertical: 40,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: COLORS.primary,
      fontFamily: 'Lato-Regular',
    },
    button: {
      position: 'absolute',
      end: 0,
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
      bottom: 20,
      marginVertical: 35,
      borderBottomColor: COLORS.primary,
      borderBottomWidth: 1,
    },
    termsButtonText: {
      fontSize: 15,
      color: COLORS.white,
      marginTop: 20,
    },
    carousel: {
      flex: 1,
      width: width,
      height: height,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>Login</Text>

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
            isEncript={true}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            placeholderText="Password"
            imageName="locked"
          />

          <View style={styles.row}>
            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
              <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
            <FormButton
              style={styles.button}
              buttonTitle="Sign In"
              onPress={() => loginRequest(email, password)}
            />
          </View>

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
            <Text style={{color: '#FFF'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.navButtonText}>Sign Up</Text>
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

export default Login;
