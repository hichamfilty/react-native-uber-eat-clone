import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  getFocusedRouteNameFromRoute,
  NavigationRouteContext,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import Search from '../screens/Search/Search';
import SearchResult from '../screens/Search/SearchResult';
import MenuProduct from '../screens/Search/MenuProduct';
import Preference from '../screens/Search/Preference';
import RestaurantHome from '../screens/RestaurantHome';
import Restaurants from '../components/Restaurants';
import Home from '../screens/Home';
import MyOrders from '../screens/MyOrders';
import CartSandwish from '../screens/Cart/CartSandwish';

const Stack = createNativeStackNavigator();

export default function SearchClientStack({ navigation, route }) {
  // hide buttom tab bar
  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'RestaurantHome' || 'MenuProduct') {
      return navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      return navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Search'
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SearchResult'
        component={SearchResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='RestaurantHome'
        component={RestaurantHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Restaurants'
        component={Restaurants}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MenuProduct'
        component={MenuProduct}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='MyOrders'
        component={MyOrders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Preference'
        component={Preference}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
