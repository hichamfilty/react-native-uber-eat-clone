import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Business from '../screens/Restaurant/Business';
import ClientTab from './ClientTab';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name='Client'
        component={ClientTab}
        options={{
          headerShown: false,
          tilte: 'Client',
          drawerIcon: ({ focussed, size }) => {
            return (
              <Icon
                type='material-community'
                name='home'
                color={focussed ? '#7cc' : 'grey'}
                size={size}
              />
            );
          },
        }}
      />

      <Drawer.Screen name='Bussiness' component={Business} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
