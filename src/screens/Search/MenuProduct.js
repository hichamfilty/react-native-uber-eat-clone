import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import {
  Route1,
  Route2,
  Route3,
  Route4,
  Route5,
  Route6,
  Route7,
  Route8,
  Route9,
} from '../Restaurant/MenuTabs';
import React, { useState } from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import Header from '../../components/Header';
import { colors } from '../../global/Styles';
import { menuData } from '../../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MenuProduct({ navigation, route }) {
  const { id, restaurant } = route.params;
  const [routes] = useState(menuData);
  const [index, setIndex] = useState(0);

  const renderTabBar = (props) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.tabStyle}
        scrollEnabled={true}
        style={styles.tab}
        labelStyle={styles.tabLabel}
        contentContainerStyle={styles.tabContainer}
      />
    );
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return (
          <Route1
            navigation={navigation}
            id={id}
            index={index}
            restaurant={restaurant}
          />
        );
      case 2:
        return (
          <Route2
            navigation={navigation}
            id={id}
            restaurant={restaurant}
            index={index}
          />
        );
      case 3:
        return (
          <Route3 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 4:
        return (
          <Route4 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 5:
        return (
          <Route5 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 6:
        return (
          <Route6 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 7:
        return (
          <Route7 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 8:
        return (
          <Route8 navigation={navigation} id={id} restaurant={restaurant} />
        );
      case 9:
        return (
          <Route9 navigation={navigation} id={id} restaurant={restaurant} />
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header title='The Menu' type='arrow-left' navigation={navigation} />
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.text1}>{restaurant} menu: </Text>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition='top'
        navigation={navigation}
        route={route}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  container: { flex: 1, top: 0, left: 0, right: 0, marginTop: 20 },

  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 25,
  },

  text1: {
    fontWeight: 'bold',
    marginLeft: 40,
    color: '#05579F',
    fontSize: 18,
  },

  view2: { marginTop: 5, paddingBottom: 20 },

  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: 'space-between',
    // alignItems:"center"
  },

  tabContainer: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  tabLabel: { fontWeight: 'bold', color: colors.cardbackground },

  tabStyle: { width: SCREEN_WIDTH / 4, maxHeight: 45 },
  scene2: { backgroundColor: '#673ab7' },
});
