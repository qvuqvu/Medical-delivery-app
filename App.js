import React from 'react'
import {View, Text,StatusBar,StyleSheet} from 'react-native'
import Voice from '@react-native-community/voice';
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import {colors} from './src/global/styles'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigation';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle='light-content'
      backgroundColor={colors.statusbar}
      />
       <RootNavigator/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{flex:1}
})