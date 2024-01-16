import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Explore from '../explore/Explore'

const ExploreNavigation = () => {
    const ExploreNavigation = createNativeStackNavigator();
  return (
    <ExploreNavigation.Navigator>
      <ExploreNavigation.Screen name="Explore" component={Explore} options={{ headerShown: false}} />
    </ExploreNavigation.Navigator>
  )
}

export default ExploreNavigation