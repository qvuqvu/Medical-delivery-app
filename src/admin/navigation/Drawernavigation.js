import React, { useState, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { colors } from '../../global/styles'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeAdmin from '../screen/HomeAdmins';
import ListOrder from '../screen/ListOrder'
import DrawerContent from "../components/DrawerContent"
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Sales from '../screen/Sales';
const Drawer = createDrawerNavigator();

export default function Drawernavigation() {
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
            <Drawer.Screen
                name="Home"
                component={HomeAdmin}
                options={{
                    headerShown: false,
                    title: "Màn hình chính",
                    drawerIcon: ({ color, size }) => (
                        <Icon2
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
                
            />
            <Drawer.Screen
                name="ListOrder"
                component={ListOrder}
                options={{
                    headerShown: false,
                    title: "Người dùng",
                    drawerIcon: ({ color, size }) => (
                        <Icon
                            name="user"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="Sales"
                component={Sales}
                options={{
                    headerShown: false,
                    title: "Doanh thu",
                    drawerIcon: ({ color, size }) => (
                        <Icon1
                            name="skype-business"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}