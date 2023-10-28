import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { restaurantsData } from '../../global/Data';
import MenuCard from '../../components/MenuCard';

export function Route1({ navigation, id, restaurant }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} sandwiches:</Text>
        {restaurantsData[id].Sandwiches.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                image={item.image}
                price={item.price}
                productDetails={item.details}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export function Route2({ navigation, id, restaurant }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} burgers:</Text>
        {restaurantsData[id].Burgers.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export const Route3 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Tacos:</Text>
        {restaurantsData[id].Tacos.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export function Route4({ navigation, id, restaurant }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Salades:</Text>
        {restaurantsData[id].Salads.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export const Route5 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Plates:</Text>
        {restaurantsData[id].Plate.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export const Route6 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Italian:</Text>
        {restaurantsData[id].Italian.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export const Route7 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Pizza:</Text>
        {restaurantsData[id].Pizza.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export const Route8 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Desserts:</Text>
        {restaurantsData[id].Desserts.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export const Route9 = ({ navigation, id, restaurant }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.view2}>
        <Text>{restaurant} Drinks:</Text>
        {restaurantsData[id].Drinks.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                return navigation.navigate('Preference', {
                  id: id,
                  image: item.image,
                  productName: item.name,
                  productDetails: item.details,
                  price: item.price,
                  restaurant: restaurant,
                  index: index,
                  productId: item.id,
                });
              }}
              key={item.id}
            >
              <MenuCard
                productId={item.id}
                productName={item.name}
                price={item.price}
                productDetails={item.details}
                image={item.image}
                productId={item}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  view2: { marginTop: 5, paddingBottom: 20 },

  scene2: { backgroundColor: '#673ab7' },
});
