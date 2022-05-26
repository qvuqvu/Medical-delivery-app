import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import HomeHeader from '../components/HomeHeader';
/** */

export default function MyFavoriteScreen({ navigation }) {
    return (
        <View style={styles.container}>
           <HomeHeader navigation={navigation} title="Yêu Thích" />
           <View>
               
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})