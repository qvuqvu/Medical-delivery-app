import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, FlatList, Keyboard, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { colors } from "../global/styles"

import HomeHeader from '../components/HomeHeader';
import { ScrollView } from 'react-native-gesture-handler'
import { filterData2 } from '../global/Data';
import SearchComponent from '../components/SearchComponent';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Categoties({ navigation }) {

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} title="Tìm Kiếm" />
            <SearchComponent navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: 375,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center",
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
        marginLeft: 10
    },

    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1
    },
    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.7,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035
    },

    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10,
    },

    listHeader: {
        fontSize: 16,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12

    },

    textView: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52,0.3)'
    },

})