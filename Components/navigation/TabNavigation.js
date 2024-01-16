import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AccountNavigation from './AccountNavigation';
import CartNavigation from './CartNavigation';
import ExploreNavigation from './ExploreNavigation';
import FavouriteNavigation from './FavouriteNavigation';
import ShopNavigation from './ShopNavigation';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const renderTabBarIcon = (route, focused, size) => {
    let iconSource;

    if (route.name === 'HomeStack') {
      iconSource = focused ? require('../../Image/shop.png') : require('../../Image/shop.png');
    } else if (route.name === 'CartStack') {
      iconSource = focused ? require('../../Image/cart.png') : require('../../Image/cart.png');
    } else if (route.name === 'HeartStack') {
      iconSource = focused ? require('../../Image/heart.png') : require('../../Image/heart.png');
    } else if (route.name === 'SettingsStack') {
      iconSource = focused ? require('../../Image/user.png') : require('../../Image/user.png');
    } else if (route.name === 'SearchStack') {
      iconSource = focused ? require('../../Image/search.png') : require('../../Image/search.png');
    }
    else {
      iconSource = require('../../Image/warning.png');
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={iconSource} style={{ width: size, height: size, marginRight: 5 }} />
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => renderTabBarIcon(route, focused, size),
      })}>
      <Tab.Screen name="HomeStack" component={ShopNavigation} options={{ headerTitle: 'Home' }} />
      <Tab.Screen name="SearchStack" component={ExploreNavigation} options={{ headerTitle: 'Search' }} />
      <Tab.Screen name="CartStack" component={CartNavigation} options={{ headerTitle: 'Cart' }} />
      <Tab.Screen name="HeartStack" component={FavouriteNavigation} options={{ headerTitle: 'Heart' }} />
      <Tab.Screen name="SettingsStack" component={AccountNavigation} options={{ headerTitle: 'Setting' }} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
