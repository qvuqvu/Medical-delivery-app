import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
// import IconBadge from 'react-native-icon-badge'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Badge } from '@rneui/base'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function HeaderProject({ navigation, title }) {
    const dispatch = useDispatch();
    const setnull = (item,checkboxValue) => {
        dispatch({
            type: "DELETE_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
            },
        });
    }
    var BadgeCount = 1;
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    name='arrow-left'
                    color={colors.cardbackground}
                    size={25}
                    onPress={() => {
                        setnull([],false)
                        navigation.goBack()
                    }}
                />
            </View>

            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            <View>
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