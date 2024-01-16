import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen/Homescreen';

const ShopNavigation = () => {
  const ShopNavigator = createNativeStackNavigator();

  return (
    <ShopNavigator.Navigator>
      <ShopNavigator.Screen
        name="Shop"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </ShopNavigator.Navigator>
  );
};

export default ShopNavigation;
