import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RestaurantMap from '../screens/Restaurant/RestaurantMap';
import DrawerNavigator from './DrawerNavigator';
import ClientTab from './ClientTab';
import RestaurantHome from '../screens/RestaurantHome';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='DrawerNavigator'
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='RestaurantMap'
        component={RestaurantMap}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
