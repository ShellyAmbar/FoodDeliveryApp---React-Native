import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {Home, Resturant, OrderDelivery} from './src/screens';
import {COLORS, icons} from '../constants';
const Tab = createBottomTabNavigator();

export default function tabs() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
