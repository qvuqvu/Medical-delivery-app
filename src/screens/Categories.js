import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'


import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const Categories = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Header title="Categories" type="arrow-left" navigation={() => { }} />
            <View style={styles.search}>
                <TextInput
                    style={{ width: "80%" }}
                    placeholder='Search'
                />
                <TouchableOpacity   
                >
                    <Image
                        source={{ uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-256.png' }}
                        style={{ width: 30, height: 30, marginLeft: 30 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 48,
        width: '90%',
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1, },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
        paddingLeft: 24,
        marginTop: 20,
        marginLeft: 20,
    }
})

export default Categories
