import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ClientSearch = createNativeStackNavigator()
export default function ClientStack() {
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="ProductInfo"
                component={ProductInfo}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
        </ClientSearch.Navigator>
    )
}