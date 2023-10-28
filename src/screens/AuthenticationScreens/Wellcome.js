import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import Swiper from 'react-native-swiper';
import { colors, parameters } from '../../global/Styles';
import { Button } from 'react-native-elements';
import { SignInContext } from '../../contexts/authContext';
import { auth } from '../../../config/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Wellcome = ({ navigation }) => {
  const { dispatchSignedIn } = useContext(SignInContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is signed in
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: { userToken: 'signed-in' },
        });
      } else {
        //user is signed out
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: { userToken: null },
        });
      }
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 26, color: colors.grey1, fontWeight: 'bold' }}>
          Uber Benimellal
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: colors.grey3,
            fontWeight: 'bold',
            marginTop: 20,
          }}
        >
          DISCOVER RESTAURANTS IN YOUR AREA
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'center', marginTop: 60 }}>
        <Swiper autoplay={true} style={{ height: 250 }}>
          <View style={styles.slide1}>
            <Image
              source={require('../../assets/14.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={require('../../assets/5.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../assets/20.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={require('../../assets/22.jpg')}
              style={{ height: '100%', width: '100%' }}
            />
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 20 }}>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title='Login'
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
          <Button
            title='Register'
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
