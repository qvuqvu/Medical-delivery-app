import React from "react";
import { colors } from "./src/global/styles"
import {View,Text,StyleSheet, StatusBar} from "react-native"


export default function App(){
  return(
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor={colors.statusbar}
      />
    </View> 
)
}
const styles=StyleSheet.create({
  container:{flex:1}
})