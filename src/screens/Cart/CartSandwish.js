import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Icon } from 'react-native-elements';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../global/Styles';
import { restaurantsData } from '../../global/Data';
import { Alert } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CartSandwish({ navigation, route }) {
  const {
    id,
    index,
    productName,
    productDetails,
    image,
    price,
    quantity,
    productId,
  } = route.params;

  const [dataCart, setDataCart] = useState([]);

  //get data from local DB by ID
  useEffect(() => {
    AsyncStorage.getItem('cart')
      .then((cart) => {
        if (cart !== null) {
          const cartfood = JSON.parse(cart);
          return setDataCart(cartfood);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const onChangeQual = (i, type) => {
    const dataCar = dataCart;
    let cantd = dataCar[i].quantity;
    console.log(cantd);

    if (type) {
      cantd = cantd + 1;
      dataCar[i].quantity = cantd;
      setDataCart(dataCar);
    } else if (type == false && cantd >= 2) {
      cantd = cantd - 1;
      dataCar[i].quantity = cantd;
      setDataCart(dataCar);
    } else if (type == false && cantd == 1) {
      dataCar.splice(i, 1);
      setDataCart(dataCar);
    }
  };
  const onLoadTotal = () => {
    var total = 0;
    const cart = dataCart;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price * cart[i].quantity;
    }
    return total;
  };
  const removeItem = async (productId) => {
    // try {
    //   const product = await AsyncStorage.getItem('cart');
    //   let productFav = JSON.parse(product);
    //   const productItems = productFav.filter(function (e) {
    //     return e.productId !== productId;
    //   });

    //   // updating 'products' with the updated 'productsItems'
    //   await AsyncStorage.setItem('cart', JSON.stringify(productItems));
    // } catch (error) {
    //   console.log('error: ', error);
    // }
    try {
      const cart = await AsyncStorage.getItem('cart');
      let cartItems = JSON.parse(cart);
      const updatedCartItems = cartItems.filter(function (e) {
        return e.productId !== productId;
      });

      await AsyncStorage.setItem('cart', JSON.stringify(updatedCartItems));
      setDataCart([...updatedCartItems]);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  console.log(dataCart);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ height: 20 }} />
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.buttons }}>
        Cart food
      </Text>
      <View style={{ height: 10 }} />

      <View style={{ flex: 1 }}>
        <ScrollView>
          {dataCart.map((item, i) => {
            return (
              <View
                style={{
                  width: SCREEN_WIDTH - 20,
                  margin: 10,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  borderBottomWidth: 2,
                  borderColor: '#cccccc',
                  paddingBottom: 10,
                }}
              >
                <Image
                  resizeMode={'contain'}
                  style={{ width: SCREEN_WIDTH / 3, height: SCREEN_WIDTH / 3 }}
                  source={item.image}
                />
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'trangraysparent',
                    padding: 10,
                    justifyContent: 'space-between',
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                      {item.productName}
                    </Text>
                    <Text>{item.productDetails}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: colors.buttons,
                        fontSize: 20,
                      }}
                    >
                      {item.price * item.quantity} dh
                    </Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      {/* <TouchableOpacity
                        onPress={() => {
                          return onChangeQual(i, false);
                        }}
                      >
                        <Icon
                          name='minus-circle'
                          type='material-community'
                          size={35}
                          color={colors.buttons}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          paddingHorizontal: 8,
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}
                      >
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          return onChangeQual(i, true);
                        }}
                      >
                        <Icon
                          name='plus-circle'
                          type='material-community'
                          size={35}
                          color={colors.buttons}
                        />
                      </TouchableOpacity> */}
                      <Text
                        style={{
                          paddingHorizontal: 8,
                          fontWeight: 'bold',
                          fontSize: 18,
                        }}
                      >
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          return removeItem(item.productId);
                        }}
                      >
                        <Icon
                          name='delete'
                          size={30}
                          type='material'
                          color={colors.buttons}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}

          <View style={{ height: 20 }} />
          <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}>
            Total: {onLoadTotal()} dh
          </Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyOrders', {
                image: image,
                productName: productName,
                productDetails: productDetails,
                price: price,
                productId: productId,
              })
            }
            style={{
              backgroundColor: colors.buttons,
              width: SCREEN_WIDTH - 40,
              alignItems: 'center',
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              CHECKOUT
            </Text>
          </TouchableOpacity>

          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
    </View>
  );
}
