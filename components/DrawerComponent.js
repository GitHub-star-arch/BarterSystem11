import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import Sell from '../Screens/Sell'
import Buy from '../Screens/Buy'
import Settings from '../Screens/Settings'
import CustomSideBarMenu from './CustomSideBarMenu';
import Barters from '../Screens/MyBarters';
import Notifications from '../Screens/Notification';
export const DrawerComponent = createDrawerNavigator({
    TabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-list.png')}></Image>,
            tabBarLabel: "Home Items"
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-book.png')}></Image>,
            tabBarLabel: "Change Profile"
        }
    },
    Barters: {
        screen: Barters,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-book.png')}></Image>,
            tabBarLabel: "Exchange Items"
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions: {
            tabBarIcon: <Image source={require('../assets/request-book.png')}></Image>,
            tabBarLabel: "Keep Updated"
        }
    },
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: 'Settings'
})