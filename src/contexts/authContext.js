import React, { useReducer, createContext } from 'react';
import { SignInReducer } from '../reducers/authReducer';

export const SignInContext = createContext();

export const SignInContextProvider = (props) => {
  const [SignedIn, dispatchSignedIn] = useReducer(SignInReducer, {
    userToken: null,
  });

  return (
    <SignInContext.Provider value={{ SignedIn, dispatchSignedIn }}>
      {props.children}
    </SignInContext.Provider>
  );
};
