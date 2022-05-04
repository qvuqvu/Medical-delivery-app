import React from 'react'
import { TransitionPresets,createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Success from '../global/Success'
import DrawerNavigator from './DrawerNavigator';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import SignUpScreen from '../screens/authScreens/SignUpScreen';
/** */
const Auth = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function AuthStack() {
    return (
            <Auth.Navigator>
            <Auth.Screen
            name="SignInWelcomeScreen"
            component = {SignInWelcomeScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
             <Auth.Screen
            name="SignInScreen"
            component = {SignInScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
            <Auth.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options ={{
                headerShown: false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
                <Auth.Screen
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown:false,
                }}
                />
                <Auth.Screen
                name="Success"
                component={Success}
                options={{
                    headerShown:false,
                }}
                />
            </Auth.Navigator>
    )
}