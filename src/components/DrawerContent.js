import React, { useState, useContext, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import { SignInContext } from '../contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import ImagePicker from 'react-native-image-crop-picker';

GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});

export default function DrawerContent(props) {

    const { dispatchSignedIn } = useContext(SignInContext)
    const user = auth().currentUser;

    async function signOut() {
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
    const getCurrentDate = () => {

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();

        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        // return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
        console.log(date + '-' + month + '-' + year)
    }
    const getCurrentImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
          });
    }
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{ backgroundColor: colors.buttons }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttons, paddingLeft: 20, paddingVertical: 10 }}>
                        <Avatar
                            size={75}
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: user.photoURL ? user.photoURL : "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                        />

                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.cardbackground }}>{user.displayName ? user.displayName : "Không tên"}</Text>
                            <Text style={{ fontSize: 13, color: colors.cardbackground }}>{user.email ? user.email : ""}</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>1</Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>My Favorites</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>0</Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>My Cart</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <DrawerItemList {...props} />

                <DrawerItem
                    label="Payment"
                    icon={({ color, size }) => (
                        <Icon1
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Promotions"
                    icon={({ color, size }) => (
                        <Icon1
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem
                    label="Settings"
                    icon={({ color, size }) => (
                        <Icon1
                            name="cog-outline"
                            color={color}
                            size={size}
                            onPress={() => {
                                getCurrentDate();
                            }}
                        />
                    )}
                />
                <DrawerItem
                    label="Help"
                    icon={({ color, size }) => (
                        <Icon1
                            name="lifebuoy"
                            color={color}
                            size={size}
                            onPress={() => {
                                getCurrentImage();
                            }}
                        />
                    )}
                />

                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkthemeText}>Dark Theme</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>

            </DrawerContentScrollView>

            <TouchableOpacity onPress={() => { signOut() }}>
                <DrawerItem
                    label="Sign Out"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="logout-variant"
                            color={color}
                            size={size}
                            onPress={() => { signOut() }}
                        />
                    )}
                />
            </TouchableOpacity>

        </View>
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