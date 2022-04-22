import React from 'react'

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

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
        initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.buttons
            }}
        >
            <ClientTabs.Screen
                name='MyAccount'
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel: "My Account",
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
            <ClientTabs.Screen
                name='Categories'
                component={Categories}
                options={
                    {
                        tabBarLabel: "Search",
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
                name='MyShopping'
                component={MyShoppingScreen}
                options={
                    {
                        tabBarLabel: "My Shopping",
                        tabBarIcon: ({ color, size }) => (
                            <Icon3
                                name='shoppingcart'
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
                        tabBarLabel: "My Favorite",
                        tabBarIcon: ({ color, size }) => (
                            <Icon4
                                name='favorite-border'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            <ClientTabs.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
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

            
        </ClientTabs.Navigator>
    )
}