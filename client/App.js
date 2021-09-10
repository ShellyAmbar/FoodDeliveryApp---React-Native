import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Resturant, OrderDelivery} from './src/screens';
const Stack = createStackNavigator();

import {View, Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Resturant" component={Resturant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
