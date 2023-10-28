import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { Icon } from 'react-native-elements';
import React, { useContext, useState } from 'react';
import CountDown from 'react-native-countdown-component';
import { SignInContext } from '../contexts/authContext';
import HomeHeader from '../components/HomeHeader';
import { colors } from '../global/Styles';
import { filterData, restaurantsData } from '../global/Data';
import Restaurants from '../components/Restaurants';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Home = ({ navigation }) => {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [delivery, setDelivery] = useState(true);
  const [indexCheck, setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View
          style={{ backgroundColor: colors.cardbackground, paddingBottom: 5 }}
        >
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                return setDelivery(true);
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}
              >
                <Text>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                return setDelivery(false);
                //navigation.navigate('RestaurantMap')
              }}
            >
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}
              >
                <Text>Pickup</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>Categories</Text>
        </View>
        <View>
          <FlatList
            data={filterData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => {
                    return setIndexCheck(item.id);
                  }}
                >
                  <View
                    style={
                      indexCheck === item.id
                        ? { ...styles.smallCardSelected }
                        : { ...styles.smallCard }
                    }
                  >
                    <Image
                      style={{ height: 60, width: 60, borderRadius: 30 }}
                      source={item.image}
                    />
                    <View>
                      <Text
                        style={
                          indexCheck === item.id
                            ? { ...styles.smallCardTextSected }
                            : { ...styles.smallCardText }
                        }
                      >
                        {item.name}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
        <View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Free Delivery</Text>
          </View>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  marginLeft: 15,
                  fontSize: 16,
                  marginTop: -10,
                  marginRight: 5,
                }}
              >
                Options changing in
              </Text>
              <CountDown
                until={3600}
                size={14}
                digitStyle={{ backgroundColor: colors.lightgreen }}
                digitTxtStyle={{ color: colors.cardbackground }}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{ d: 'Day', h: 'Hour', m: 'Min', s: 'Sec' }}
              />
            </View>
            <FlatList
              style={{ marginTop: 10, marginBottom: 10 }}
              horizontal={true}
              data={restaurantsData}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <Restaurants
                      screenWidth={SCREEN_WIDTH * 0.35}
                      images={item.images}
                      restaurantName={item.restaurantName}
                      farAway={item.farAway}
                      businessAddress={item.businessAddress}
                      averageReview={item.averageReview}
                      numberOfReview={item.numberOfReview}
                      OnPressFoodCard={() => {
                        return navigation.navigate('RestaurantHome', {
                          id: index,
                          restaurant: item.restaurantName,
                        });
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Promotions available</Text>
          </View>
          <View>
            <FlatList
              data={restaurantsData}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ marginTop: 10, marginBottom: 10 }}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({ item, index }) => {
                return (
                  <Restaurants
                    OnPressFoodCard={() => {
                      return navigation.navigate('RestaurantHome', {
                        id: index,
                        restaurant: item.restaurantName,
                      });
                    }}
                    screenWidth={SCREEN_WIDTH * 0.35}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                );
              }}
            />
          </View>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Restaurants in your Area</Text>
          </View>
          <View style={{ width: SCREEN_WIDTH, paddingTop: 15 }}>
            {restaurantsData.map((item) => {
              return (
                <View key={item.id} style={{ paddingBottom: 20 }}>
                  <Restaurants
                    OnPressFoodCard={() => {
                      return navigation.navigate('RestaurantHome', {
                        id: item.id,
                        restaurant: item.restaurantName,
                      });
                    }}
                    screenWidth={SCREEN_WIDTH * 0.95}
                    images={item.images}
                    restaurantName={item.restaurantName}
                    farAway={item.farAway}
                    businessAddress={item.businessAddress}
                    averageReview={item.averageReview}
                    numberOfReview={item.numberOfReview}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {delivery && (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              return navigation.navigate('RestaurantMap');
            }}
          >
            <Icon
              name='place'
              type='material'
              size={32}
              color={colors.buttons}
            />
            <Text style={{ color: colors.grey2 }}>Map</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    paddingTop: 7,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },

  deliveryText: {
    marginLeft: 5,
    fontSize: 16,
  },

  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 10,
  },

  clockView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    backgroundColor: colors.cardbackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  addressView: {
    flexDirection: 'row',
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  headerText: {
    color: colors.grey2,
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  headerTextView: {
    backgroundColor: colors.grey5,
    paddingVertical: 3,
  },

  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },

  smallCardTextSected: {
    fontWeight: 'bold',
    color: colors.cardbackground,
  },

  smallCardText: {
    fontWeight: 'bold',
    color: colors.grey2,
  },

  floatButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
    backgroundColor: 'white',
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
  },
});
