import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, parameters } from '../global/Styles';
import { Icon } from 'react-native-elements';

const Header = ({ type, navigation, title }) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 8 }}>
        <Icon
          type='material-community'
          name={type}
          color={colors.heaherText}
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    marginTop: 10,
  },

  headerText: {
    color: colors.heaherText,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
