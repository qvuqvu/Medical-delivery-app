import React from 'react'
import { } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
/** */
const Authstack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function AuthStack(navigation) {
    return (
            <Authstack.Navigator>
                <Authstack.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown:false,
                }}
                />
            </Authstack.Navigator>
    )
}