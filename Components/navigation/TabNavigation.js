import React from 'react';
import { View, Image,StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccountNavigation from './AccountNavigation';
import CartNavigation from './CartNavigation';
import FavouriteNavigation from './FavouriteNavigation';
import SeachNavigation from './SeachNavigation';
import ShopNavigation from './ShopNavigation';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  const renderTabBarIcon = (route, focused, size) => {
    let iconSource;
    if (route.name === 'HomeStack') {
      iconSource = focused ? require('../../Image/ic_shop.png') : require('../../Image/ic_shop.png');
    } else if (route.name === 'CartStack') {
      iconSource = focused ? require('../../Image/ic_cart.png') : require('../../Image/ic_cart.png');
    } else if (route.name === 'HeartStack') {
      iconSource = focused ? require('../../Image/ic_heart.png') : require('../../Image/ic_heart.png');
    } else if (route.name === 'UserStack') {
      iconSource = focused ? require('../../Image/ic_user.png') : require('../../Image/ic_user.png');
    }else if (route.name === 'SearchStack') {
        iconSource = focused? require('../../Image/ic_search.png') : require('../../Image/ic_search.png');
    }else if (route.name === 'SettingsStack') {
      iconSource = focused? require('../../Image/ic_user.png') : require('../../Image/ic_user.png');
    }
     else {
      iconSource = require('../../Image/warning.png');
    }

    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={iconSource} style={{ width: size , height: size, marginRight: 5 }} />
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
      <Tab.Screen name="SearchStack" component={SeachNavigation} options={{ headerTitle: 'Search' }} />
      <Tab.Screen name="CartStack" component={CartNavigation} options={{ headerTitle: 'Cart' }} />
      <Tab.Screen name="HeartStack" component={FavouriteNavigation} options={{ headerTitle: 'Heart' }} /> 
      <Tab.Screen name="SettingsStack" component={AccountNavigation} options={{ headerTitle: 'Setting' }} />
    </Tab.Navigator>
  );
};
export default TabNavigation;
