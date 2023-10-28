import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import { colors } from '../global/Styles';

export default function Myaccount({ navigation }) {
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
      <Text>Myaccount</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
