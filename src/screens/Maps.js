import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HeaderSimple from '../components/HeaderSimple'

export default function Maps({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderSimple title="Maps" navigation={navigation} />
            <View>
                <Text>Hi</Text>
            </View>
        </View>
    )
}
