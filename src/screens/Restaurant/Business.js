import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { colors } from '../../global/Styles';

const Business = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header
        title='Restaurants Business'
        type='arrow-left'
        navigation={navigation}
      />
      <Text>Wellcome to Businessconsole </Text>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
