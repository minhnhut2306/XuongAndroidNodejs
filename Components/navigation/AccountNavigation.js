import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '../account/Account'

const AccountNavigation = () => {
    const AccountNavigation = createNativeStackNavigator();
  return (
      <AccountNavigation.Navigator>
        <AccountNavigation.Screen name="Account" component={Account} options={{ headerShown: false}} />
      </AccountNavigation.Navigator>
  )
}

export default AccountNavigation