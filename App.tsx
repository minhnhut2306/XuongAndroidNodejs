import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AccountNavigation from './Components/navigation/AccountNavigation';
import CartNavigation from './Components/navigation/CartNavigation';
import ExploreNavigation from './Components/navigation/ExploreNavigation';
import FavouriteNavigation from './Components/navigation/FavouriteNavigation';
import ShopNavigation from './Components/navigation/ShopNavigation';
import TabNavigation from './Components/navigation/TabNavigation';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation" >
        <Stack.Screen name="AccountNavigation" component={AccountNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="CartNavigation" component={CartNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="ExploreNavigation" component={ExploreNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="FavouriteNavigation" component={FavouriteNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="ShopNavigation" component={ShopNavigation} options={{ headerShown: false}} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;