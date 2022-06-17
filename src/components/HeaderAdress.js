import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function HeaderAdress({ navigation, title }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>
                <Icon
                    name='arrow-left'
                    color='white'
                    size={25}
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
            <Text style={styles.headerText}>{title}</Text>
            <Text style={styles.headerText}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#6BC8FF',
        height: 40
    },
    headerText: {
        fontSize: 21,
        fontWeight: "bold",
        color: 'white',
    }
})