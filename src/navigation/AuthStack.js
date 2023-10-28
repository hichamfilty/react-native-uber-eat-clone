import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wellcome from '../screens/AuthenticationScreens/Wellcome';
import SignIn from '../screens/AuthenticationScreens/SignIn';
import SignUp from '../screens/AuthenticationScreens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Wellcome'
        component={Wellcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
