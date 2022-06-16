import React, { useState, useContext, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Avatar, Icon } from 'react-native-elements'
import { colors } from '../../global/styles'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});


export default function DrawerContent(props) {



    const user = auth().currentUser
    async function signOut() {
        firestore()
            .collection('User' + user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    update2(documentSnapshot.id)
                });
            });
        try {
            auth()
                .signOut()
                .then(
                    () => {
                        GoogleSignin.revokeAccess();
                        GoogleSignin.signOut();
                        LoginManager.logOut();
                        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
                    })
        } catch (errot) {
            Alert.alert(
                error.name,
                error.message
            )
        }
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons, marginTop: -3, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: colors.text }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttons, paddingLeft: 20, paddingVertical: 10 }}>
                        <Avatar
                            size={75}
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: user.photoURL ? user.photoURL : "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                        />

                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.black }}>Admin</Text>
                            <Text style={{ fontSize: 13, color: colors.black }}>{user.email ? user.email : ""}</Text>
                        </View>


                    </View>
                </View>


                <DrawerItemList {...props} />

            </DrawerContentScrollView >

            <TouchableOpacity
                onPress={() => { signOut() }}>
                <DrawerItem
                    label="Đăng xuất"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="logout-variant"
                            color={color}
                            size={40}
                            onPress={() => { signOut() }}
                        />
                    )}
                />
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.cardbackground,

    },
    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20,
    },

    switchText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkthemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: "bold"
    }
})