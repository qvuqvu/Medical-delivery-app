import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAdmin from '../admin/HomeAdmins'

const App = createNativeStackNavigator();

export function AdminStack() {

    return (
        <App.Navigator>
            <App.Screen
                name="HomeAdmin"
                component={HomeAdmin}
                options={{
                    headerShown: false,
                }}
            />
        </App.Navigator>
    )
}


