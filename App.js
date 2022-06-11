import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import Voice from '@react-native-community/voice';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { colors } from './src/global/styles'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/rootNavigation';
import { SignInContextProvider } from './src/contexts/authContext'
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications


export default function App() {
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

