import {
  Text,
  StyleSheet,
  View,
  Image,
  Platform,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../global/Styles';
import { CheckBox, Icon } from 'react-native-elements';
import { restaurantsData } from '../../global/Data';

const Preference = ({ navigation, route }) => {
  const {
    id,
    image,
    restaurant,
    productDetails,
    productName,
    price,
    index,
    productId,
  } = route.params;

  const [dataCart, setDataCart] = useState([]);

  const [preference, setPreference] = useState(
    restaurantsData[id].Sandwiches[index].preferenceData
  );
  const [required, setRequired] = useState(
    restaurantsData[id].Sandwiches[index].required
  );
  const [minimum_quantity, setMinimum_quantity] = useState(
    restaurantsData[id].Sandwiches[index].minimum_quatity
  );
  const [count, setCount] = useState(0);

  const addToCart = () => {
    return navigation.navigate('MyOrders', {
      id,
      index,
      productName,
      productDetails,
      productId,
      image,
      price,
    });
  };

  const onClickAddCart = async (data) => {
    const itemCart = {
      productId: productId,
      productName: productName,
      image: image,
      quantity: 1,
      price: price,
    };
    AsyncStorage.getItem('cart')
      .then((dataCart) => {
        if (dataCart !== null) {
          //we have data
          const cart = JSON.parse(dataCart);
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemCart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        }
        alert('Add to Cart');
      })
      .catch((err) => {
        return alert(err);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.backgroundImage} source={image} />
        </View>

        <View style={styles.bar}>
          <Text style={styles.title}>Preference</Text>
        </View>
        <View style={styles.view12}>
          <Icon
            name='arrow-left'
            type='material-community'
            color={colors.cardbackground}
            size={25}
            onPress={() => {
              return navigation.goBack();
            }}
          />
        </View>

        <View style={styles.view1}>
          <Text style={styles.text1}>{restaurant} Restaurant</Text>

          <Text style={styles.textName}>{productName}</Text>
          <Text style={styles.text2}>{productDetails}</Text>
          <Text style={styles.textName}>{price} dh</Text>
        </View>

        <View style={styles.view2}>
          <Text style={styles.text3}>Choose a meal type</Text>
          <View style={styles.view3}>
            <Text style={styles.text4}>REQUIRED</Text>
          </View>
        </View>
        <View style={styles.view4}>
          <View style={styles.view5}>
            <View style={styles.view6}>
              <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checked={true}
                checkedColor={colors.buttons}
              />
              <Text style={styles.text5}>- - - - -</Text>
            </View>
            <Text style={styles.text6}>{price.toFixed(2)} dh </Text>
          </View>
        </View>
        <View>
          {preference.map((item) => {
            return (
              <View key={item.id}>
                <View style={styles.view7}>
                  <Text style={styles.text8}>
                    {
                      restaurantsData[id].Sandwiches[index].preferenceTitle[
                        preference.indexOf(item)
                      ]
                    }
                  </Text>
                  {required[preference.indexOf(item)] && (
                    <View key={item.id} style={styles.view9}>
                      <Text style={styles.text7}>
                        {minimum_quantity[preference.indexOf(item)]} required
                      </Text>
                    </View>
                  )}
                </View>
                <View style={styles.view10}>
                  {item.map((items) => {
                    return (
                      <View style={styles.view4}>
                        <View style={styles.view19}>
                          <View style={styles.view6}>
                            <CheckBox
                              center
                              checkedIcon='check-square-o'
                              uncheckedIcon='square-o'
                              checked={false}
                              checkedColor={colors.buttons}
                            />
                            <Text
                              key={items.id}
                              style={{ color: colors.grey2, marginLeft: -10 }}
                            >
                              {items.name}
                            </Text>
                          </View>
                          <Text style={styles.text6}>
                            {items.price.toFixed(2)} dh
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          onClickAddCart();
          addToCart();
        }}
      >
        <View style={styles.view17}>
          <View style={styles.view18}>
            <Text>Add to my order cart</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  container: { flex: 1 },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: colors.buttons,
    overflow: 'hidden',
    height: 180, //HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    width: '100%', //null,
    height: 180, //HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    //paddingTop: Platform.OS !== 'ios' ?
    //HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: { backgroundColor: 'white', padding: 10, marginBottom: 10 },

  text1: {
    fontSize: 20,
    color: colors.grey1,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  textName: {
    fontSize: 16,
    color: '#011A30',
    fontWeight: 'bold',
  },
  text2: { fontSize: 14, color: colors.grey2, marginTop: 5 },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginLeft: 10,
  },

  view3: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text4: { fontWeight: 'bold', color: colors.grey3, padding: 5 },

  view4: { backgroundColor: 'white', marginBottom: 10 },
  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  view6: { flexDirection: 'row', alignItems: 'center' },
  text5: { fontWeight: 'bold', marginLeft: -10 },
  text6: { fontSize: 16, fontWeight: 'bold' },

  view7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text8: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey1,
    marginLeft: 10,
  },

  view9: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },

  text7: { fontWeight: 'bold', color: colors.grey3, padding: 5 },

  view10: { backgroundColor: 'white', marginBottom: 10 },

  view11: { flexDirection: 'row', alignItems: 'center' },

  view12: { position: 'absolute', top: 35, left: 15 },

  view13: { paddingBottom: 0, marginTop: 5 },

  text11: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.grey3,
  },

  view14: {
    flexDirection: 'row',
    backgroundColor: colors.cardbackground,
    paddingVertical: 5,
    marginBottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },

  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text9: { fontWeight: 'bold', fontSize: 18 },
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view17: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.cardbackground,
    marginTop: -5,
  },

  view18: {
    backgroundColor: colors.buttons,
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom: 0,
    width: 320,
    borderRadius: 12,
  },

  text10: { padding: 10, fontWeight: 'bold', fontSize: 18 },

  view19: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});
