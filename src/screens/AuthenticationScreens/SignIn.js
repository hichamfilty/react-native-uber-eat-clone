import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState, useRef, useContext } from 'react';
import { Formik } from 'formik';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';
import { colors, title, parameters } from '../../global/Styles';
import Home from '../Home';
import ClientTab from '../../navigation/ClientTab';
import DrawerNavigator from '../../navigation/DrawerNavigator';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/Firebase';
import { SignInContext } from '../../contexts/authContext';

const SignIn = ({ navigation }) => {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInpput1 = useRef(1);
  const textInput2 = useRef(2);

  const { dispatchSignedIn } = useContext(SignInContext);

  // const signIn = () => {
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // };

  const signIn = async (data) => {
    try {
      const { email, password } = data;
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: { userToken: 'signed-in' },
        });
      }

      console.log('user is logged in');
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Header title='Login' type='arrow-left' navigation={navigation} />
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text style={title}>Sign In</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={styles.text1}>Please enter your email and password</Text>
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          return signIn(values);
        }}
      >
        {(props) => (
          <View>
            <View style={{ marginTop: 20 }}>
              <View>
                <TextInput
                  style={styles.TextInput1}
                  placeholder='Email'
                  ref={textInpput1}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                />
              </View>

              <View style={styles.TextInput2}>
                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}
                >
                  <Icon
                    name='lock'
                    iconStyle={{ color: colors.grey3 }}
                    type='material'
                    style={{}}
                  />
                </Animatable.View>

                <TextInput
                  style={{ flex: 1 }}
                  placeholder='Password'
                  ref={textInput2}
                  onFocus={() => {
                    setTextInput2Fossued(false);
                  }}
                  onBlur={() => {
                    setTextInput2Fossued(true);
                  }}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                />

                <Animatable.View
                  animation={textInput2Fossued ? '' : 'fadeInLeft'}
                  duration={400}
                >
                  <Icon
                    name='visibility-off'
                    iconStyle={{ color: colors.grey3 }}
                    type='material'
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
              <Button
                title='SIGN IN'
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                onPress={props.handleSubmit}
                // onPress={() => {
                //   return navigation.navigate('DrawerNavigator');
                // }}
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>
          Forgot Password ?
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title='Sign In With Google'
          button
          type='google'
          style={styles.SocialIcon}
          onPress={() => {}}
        />
      </View>

      <View style={{ marginTop: 25, marginLeft: 20 }}>
        <Text style={{ ...styles.text1 }}>New to Uber Benimellal</Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginHorizontal: 20 }}>
        <Button
          title='Register'
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text1: {
    color: colors.grey3,
    fontSize: 16,
  },

  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },

  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#147ae0',
    height: 40,
    paddingHorizontal: 20,
  },

  createButtonTitle: {
    color: '#147ae0',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
