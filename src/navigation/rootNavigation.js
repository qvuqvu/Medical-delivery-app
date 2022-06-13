import React, { useContext, useEffect } from 'react'
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import AuthStack from './authStack'
import { AppStack } from './appStack'
import { SignInContext } from '../contexts/authContext'
import { Provider as ReduxProvider } from "react-redux";
import configureStore from '../../redux/store'
import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
const store = configureStore();
export default function RootNavigator() {
    const [isDarkTheme, setIsDarkTheme] = React.useState("");
    const user = auth().currentUser;
    useEffect(() => {
        if (auth().currentUser != null) {
            firestore()
                .collection('User' + user.uid).onSnapshot((snapshot) => {
                    snapshot.docs.map((doc) => {
                        setIsDarkTheme(doc.data().isDarkMode)
                    });
                });
        }
        else {
            setIsDarkTheme(false)
        }
    });
    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            primary: '#6BC8FF',
            secondary:'#36a0ef',
            tertiary:'#5E6977',
            accent:'#FF5A5A',
            text: '#000000',
            text1: '#ffffff',
            boxes: '#ebf3f4',
            money: 'red',
            buttonx: '#38c3f4',

        }
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#222222',
            text: '#ffffff',
            boxes: '#35373d',
            money: 'ffffff',
            buttonx: 'ffffff',
            secondary:'#ffffff',
            tertiary:'#ffffff',
        }
    }
    const { signedIn } = useContext(SignInContext)
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
    return (
        <PaperProvider theme={theme}>
            <ReduxProvider store={store}>
                <NavigationContainer theme={theme}>
                    {signedIn.userToken === null ? <AuthStack /> : <AppStack />}
                </NavigationContainer>
            </ReduxProvider>
        </PaperProvider>
    )
}