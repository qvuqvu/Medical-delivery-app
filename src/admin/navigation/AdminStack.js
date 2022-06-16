import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawernavigation from './Drawernavigation';

const App = createNativeStackNavigator();

export default function AdminStack() {
    return (
        <App.Navigator>
            <App.Screen
                name="App"
                component={Drawernavigation}
                options={{
                    headerShown: false,
                }}
            />
     </App.Navigator>
    )
}


