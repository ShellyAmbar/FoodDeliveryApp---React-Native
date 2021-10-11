import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, OrderDelivery, Resturant} from '../screens';
import Tabs from '../navigation/tabs';
const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Tabs'}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Resturant" component={Resturant} />
      <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
