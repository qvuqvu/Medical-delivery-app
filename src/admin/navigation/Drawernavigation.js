import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { colors } from '../../global/styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeAdmin from '../screen/HomeAdmins';
import ListOrder from '../screen/ListOrder';
const Drawer = createDrawerNavigator();

export default function Drawernavigation(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={HomeAdmin}
                options={{
                    headerShown:false
                }}
            />
            <Drawer.Screen
            name="ListOrder"
            component={ListOrder}
            options={{
                headerShown:false
            }}
            />
        </Drawer.Navigator>
    )
}