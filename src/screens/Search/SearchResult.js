import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import { colors } from '../../global/Styles';
import Header from '../../components/Header';
import { restaurantsData } from '../../global/Data';
import SearchResultCard from '../../components/SearchResultCard';
import RestaurantHome from '../RestaurantHome';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchResult({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header
        title='Categories results'
        type='arrow-left'
        navigation={navigation}
      />
      <View>
        <FlatList
          data={restaurantsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <SearchResultCard
                screenWidth={SCREEN_WIDTH}
                images={item.images}
                averageReview={item.averageReview}
                numberOfReview={item.numberOfReview}
                restaurantname={item.restaurantName}
                farAway={item.farAway}
                businnesAddress={item.businessAddress}
                productData={item.productData}
                OnPressRestaurantCard={() => {
                  navigation.navigate('RestaurantHome', {
                    id: index,
                    restaurant: item.restaurantName,
                  });
                }}
              />
            );
          }}
          ListHeaderComponent={
            <Text style={styles.listHeader}>
              {restaurantsData.length} Result for {route.params.item}
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40,
  },

  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
});
