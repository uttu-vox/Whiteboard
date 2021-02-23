
//ページ遷移処理
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import start from './start';
import board from './board';

// スタックナビゲーションの作成
// くそげーナビゲーション

const AppNavigation = createStackNavigator(
  {
    Select1: {
      screen: start,
      navigationOptions: {
        gestureEnabled: false,
        headerShown:false
      },
    },
    Select2: {
      screen: board,
      navigationOptions: {
        gestureEnabled: false,
        headerShown:false
      },
    },
  },

  {
    mode: 'card',
    initialRouteName: 'Select1',
  }
);
export default createAppContainer(AppNavigation);