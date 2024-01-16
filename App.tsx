import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import AccountNavigation from './Components/navigation/AccountNavigation';
import CartNavigation from './Components/navigation/CartNavigation';
import FavouriteNavigation from './Components/navigation/FavouriteNavigation';
import SeachNavigation from './Components/navigation/SeachNavigation';
import ShopNavigation from './Components/navigation/ShopNavigation';
import TabNavigation from './Components/navigation/TabNavigation';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="TabNavigation" >
      <Stack.Screen name="ShopNavigation" component={ShopNavigation} options={{ headerShown: false}} />
      <Stack.Screen name="SeachNavigation" component={SeachNavigation} options={{ headerShown: false}} />
      <Stack.Screen name="FavouriteNavigation" component={FavouriteNavigation} options={{ headerShown: false}} />
      <Stack.Screen name="CartNavigation" component={CartNavigation} options={{ headerShown: false}} />
      <Stack.Screen name="AccountNavigation" component={AccountNavigation} options={{ headerShown: false}} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

const styles = StyleSheet.create({

});

export default App;
