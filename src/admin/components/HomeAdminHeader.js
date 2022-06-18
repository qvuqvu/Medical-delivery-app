import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from "../../global/styles"

export default function HomeAdminHeader({ navigation, title }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>

                <Icon
                    name='bars'
                    color={colors.cardbackground}
                    size={32}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
            <View></View>
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
        textAlign:"center",
        fontWeight: "bold",
        justifyContent: 'center',
        marginRight:30
    }
})