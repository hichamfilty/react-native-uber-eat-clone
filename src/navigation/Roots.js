import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { SignInContext } from '../contexts/authContext';

const Roots = () => {
  const { SignedIn } = useContext(SignInContext);

  return (
    <NavigationContainer>
      {SignedIn.userToken === null ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Roots;
