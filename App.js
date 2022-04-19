import React from 'react'
import {View, Text} from 'react-native'

import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Categories from './src/global/Categories'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options ={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid
          }}
          name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}