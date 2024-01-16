import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from '../cart/Cart'

const CartNavigation = () => {
    const CartNavigation = createNativeStackNavigator();
  return (
    <CartNavigation.Navigator>
      <CartNavigation.Screen name="Cart" component={Cart} options={{ headerShown: false}} />
    </CartNavigation.Navigator>
  )
}

export default CartNavigation