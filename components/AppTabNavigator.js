import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Sell from '../Screens/Sell'
import { Icon } from 'react-native-elements'
import Buy from '../Screens/Buy'
import { Stack } from './StackNavigation'
export const AppTabNavigator = createBottomTabNavigator({
    Buy: {
        screen: Stack,
        navigationOptions: {
            tabBarIcon: <Icon name='gold' type='MaterialCommunityIcons' />,
            tabBarLabel: "Home Items"
        }
    },
    Sell: {
        screen: Sell,
        navigationOptions: {
            tabBarIcon: <Icon name='bar-graph' type='Entypo' />,
            tabBarLabel: "Exchange Items"
        }
    }
})