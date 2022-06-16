import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
import { useDispatch } from "react-redux";
import firestore from "@react-native-firebase/firestore"
import auth from "@react-native-firebase/auth"


export default function HeaderProject({ navigation, title }) {
    const user = auth().currentUser;
    const dispatch = useDispatch();
    const setnull = (item, checkboxValue) => {
        dispatch({
            type: "DELETE_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
            },
        });
    }
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    name='arrow-left'
                    color={colors.cardbackground}
                    size={25}
                    onPress={() => {
                        setnull([], false)
                        firestore()
                        .collection('order' + user.uid).onSnapshot((snapshot) => {
                        });
                        navigation.goBack()
                    }}
                />
            </View>
            <View style={{marginLeft:25}}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            <View style={{marginRight:20}}>
                <Icon
                    name='home'
                    color={colors.cardbackground}
                    size={30}
                    onPress={() => {
                        setnull([], false)
                        navigation.navigate('HomeScreen')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: 'space-between'
    },
    headerText: {
        color: colors.headerText,
        fontSize: 21,
        fontWeight: "bold",
        marginRight: 25
    }
})