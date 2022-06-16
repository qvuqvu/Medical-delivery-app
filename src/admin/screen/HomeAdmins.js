import React, { useState, useContext, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { SignInContext } from '../contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import HomeAdminHeader from '../components/HomeAdminHeader';
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});


export default function HomeAdmin({navigation}) {
    return (
         <View>
                <HomeAdminHeader navigation={navigation} title="Home" />
        </View>
    )
}