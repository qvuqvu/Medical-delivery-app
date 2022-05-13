import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Success from '../global/Success';
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

        </App.Navigator>
    )
}


