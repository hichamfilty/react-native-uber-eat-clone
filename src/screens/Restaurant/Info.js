import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { restaurantsData } from '../../global/Data';

export default function Info({ navigation, restaurant, id }) {
  return (
    <View>
      <Text>{restaurant}</Text>
      <Text>
        {restaurantsData[id].map((item, index) => {
          return (
            <View key={item.index}>
              <Text>{item.businessAddress}</Text>
            </View>
          );
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
