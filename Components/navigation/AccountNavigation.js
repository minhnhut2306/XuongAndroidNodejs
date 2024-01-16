import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../account/Account';

const AccountNavigation = () => {
    const AccountStack = createNativeStackNavigator();

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </AccountStack.Navigator>
    );
}

export default AccountNavigation;
