import {BottomTabBar} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {COLORS} from '../constants';

export default function CustomTabBar(props) {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
}
