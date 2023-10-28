import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import { colors } from '../../global/Styles';
import Header from '../../components/Header';

export default function RestaurantMap({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header
        title='Restaurants Map'
        type='arrow-left'
        navigation={navigation}
      />
      <Text>Find your Restaurant on Map</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
  },
});
