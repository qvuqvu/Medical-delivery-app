import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
// import IconBadge from 'react-native-icon-badge'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Badge } from '@rneui/base'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function HeaderOrder({ navigation, id, title }) {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const selectItem = (item, checkboxValue, SL) =>
        dispatch({
            type: "UPDATE1_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
                SL: SL,
            },
        });
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
                        if (id == 2) {
                            selectItem(items, false, 1)
                        }
                        else {
                            setnull([], false)
                        }
                        navigation.goBack()
                    }}
                />
            </View>

            <View style={{ marginLeft: 25 }}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            <View style={{ marginRight: 20 }}>
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