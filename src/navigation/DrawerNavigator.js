import * as React from 'react'
import { first } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './ClientTabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import 'react-native-gesture-handler';
import DrawerContent from '../components/DrawerContent';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import {colors} from '../global/styles'
import News2 from '../screens/News2';
import DiscountScreen from '../screens/Discount';
import Help from '../screens/Help';

const Drawer = createDrawerNavigator();
const getCurrentImage = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
      });
}
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
            name='Promotions'
            component={DiscountScreen}
            options={{
                headerShown: false,
                title: 'Promotions',
                drawerIcon:({ color, size }) => (
                    <Icon2
                        name="tag-heart"
                        color={color}
                        size={size}
                    />
                )
            }}
            />
            <Drawer.Screen
            name='Help'
            component={Help}
            options={{
                headerShown:false,
                title:"Help",
                drawerIcon: ({ color, size }) => (
                    <Icon2
                        name="lifebuoy"
                        color={color}
                        size={size}
                        onPress={() => {
                            getCurrentImage();
                        }}
                    />
                )
            }}
            />
        </Drawer.Navigator>
    )
}