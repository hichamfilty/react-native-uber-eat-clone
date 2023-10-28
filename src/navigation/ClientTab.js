import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import { colors } from '../global/Styles';
import Search from '../screens/Search/Search';
import MyOrders from '../screens/MyOrders';
import Myaccount from '../screens/Myaccount';
import SearchClientStack from './SearchClientStack';
import RestaurantHome from '../screens/RestaurantHome';
import MenuProduct from '../screens/Search/MenuProduct';
import Preference from '../screens/Search/Preference';
import CartSandwish from '../screens/Cart/CartSandwish';

const Tab = createBottomTabNavigator();

const ClientTab = ({ navigation, route }) => {
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'RestaurantHome' || 'MenuProduct') {
      return navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      return navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <Tab.Navigator
    // screenOptions={{ tabBarStyle: { backgroundColor: colors.buttons } }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name='home' type='material' color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='RestaurantHome'
        component={RestaurantHome}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name='Preference'
        component={Preference}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name='MenuProduct'
        component={MenuProduct}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name='SearchScreen'
        component={SearchClientStack}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name='search' type='material' color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='CartSandwish'
        component={CartSandwish}
        options={{
          headerShown: false,
          tabBarVisible: false,
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name='MyOrders'
        component={MyOrders}
        options={{
          tabBarLabel: 'My Orders',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='view-list' type='material' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='MyAccount'
        component={Myaccount}
        options={{
          tabBarLabel: 'My Account',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' type='material' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ClientTab;
