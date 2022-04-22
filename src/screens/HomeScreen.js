import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import HomeHeader from '../components/HomeHeader';
/** */

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
               <HomeHeader navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    fillterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        marginVertical: 10
    },
    clockView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },
    addressView: {
        flexDirection: "row",
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 3,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardTextSected: {
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,
    },
    floatButton:{
        position:'absolute',
        bottom:10,
        right:15,
        backgroundColor:'white',
        elevation:10,
        width:60,
        height:60,
        borderRadius:30,
        alignItems:"center"
    }

})