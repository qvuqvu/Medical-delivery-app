import React, { useState, useEffect } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../global/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from '../screens/HomeScreen'
import MyAccountScreen from '../screens/MyAccountScreen'
import Categories from '../screens/Categories'
import MyShoppingScreen from '../screens/MyShoppingScreen'
import MyFavoriteScreen from '../screens/MyFavoriteScreen'
import auth from "@react-native-firebase/auth"
import firestore, { firebase } from '@react-native-firebase/firestore';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("");
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    const user = auth().currentUser;
    firestore()
        .collection('cart' + user.uid).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
            });
        });
    return (
        <ClientTabs.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.buttons
            }}
        >
            <ClientTabs.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: t("Màn hình chính"),
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='Search'
                component={Categories}
                options={
                    {
                        tabBarLabel: t("Tìm kiếm"),
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='search'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='MyFavorite'
                component={MyFavoriteScreen}
                options={
                    {
                        tabBarLabel: t("News"),
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='newspaper-o'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='MyAccount'
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: t("Tài khoản"),
                        tabBarIcon: ({ color, size }) => (
                            <Icon2
                                name='person'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
        </ClientTabs.Navigator>
    )
}