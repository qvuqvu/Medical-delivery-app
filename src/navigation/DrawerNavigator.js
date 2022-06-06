import * as React from 'react'
import { first } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import 'react-native-gesture-handler';
import DrawerContent from '../components/DrawerContent';
import {colors} from '../global/styles'
import News2 from '../screens/News2';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
        drawerContent={props=><DrawerContent{...props}/>}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    headerShown: false,
                    title: 'Client',
                    drawerIcon: ({ focussed, size }) => (
                        <Icon
                            name="home"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Business ConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    headerShown: false,
                    title: 'Business console',
                    drawerIcon: ({ focussed, size }) => (
                        <Icon1
                            name="business"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
             name="News2"
             component={News2}
             options={{
                    headerShown: false,
             }}
            />
        </Drawer.Navigator>
    )
}