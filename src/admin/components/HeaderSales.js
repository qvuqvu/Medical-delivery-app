import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters }  from '../../global/styles'

export default function HeaderSales({ navigation,title }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
            </View>

            <View style={{ marginRight:130}}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
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