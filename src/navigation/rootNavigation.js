import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './authStack'
import { AppStack } from './appStack'
import { SignInContext } from '../contexts/authContext'
import { Provider as ReduxProvider } from "react-redux";
import configureStore from '../../redux/store'

const store = configureStore();
export default function RootNavigator() {
    const { signedIn } = useContext(SignInContext)
    return (
        
        <ReduxProvider store={store}>
            <NavigationContainer>
                {signedIn.userToken === null ? <AuthStack /> : <AppStack />}
            </NavigationContainer>
        </ReduxProvider>
    )
}