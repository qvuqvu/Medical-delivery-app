import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Success from '../global/Success';
import ProductInfo from '../global/ProductInfo';
import Medical from '../screens/Medical';
import DrawerNavigator from './DrawerNavigator';

const App = createNativeStackNavigator();

export function AppStack() {

    return (
        <App.Navigator>

            <App.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="Success"
                component={Success}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="ProductInfo"
                component={ProductInfo}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="Medical"
                component={Medical}
                options={{
                    headerShown: false,
                }} />

        </App.Navigator>
    )
}


