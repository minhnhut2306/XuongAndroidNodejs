import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourite from '../favourite/Favourite';

const FavouriteNavigation = () => {
  const FavouriteNavigator = createNativeStackNavigator();

  return (
    <FavouriteNavigator.Navigator>
      <FavouriteNavigator.Screen
        name="Favourite"
        component={Favourite}
        options={{ headerShown: false }}
      />
    </FavouriteNavigator.Navigator>
  );
};

export default FavouriteNavigation;
