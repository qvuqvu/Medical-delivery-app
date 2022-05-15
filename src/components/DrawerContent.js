import React, { useState, useContext, useEffect } from 'react'
import auth from '@react-native-firebase/auth';

import { View, Text, Linking, Pressable, Alert, Switch, StyleSheet ,TouchableOpacity} from 'react-native'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar, Icon } from 'react-native-elements'
import { colors } from '../global/styles'
import { SignInContext } from '../contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});

export default function DrawerContent(props) {

    const { dispatchSignedIn } = useContext(SignInContext)

    async function signOut() {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth()
                .signOut()
                .then(
                    () => {
                        console.log("USER SUCCESSFULLY SIGNED OUT")
                        dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
                    })

        } catch (errot) {
            Alert.alert("aaaaa")
        }
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
                            source={{ uri: "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                        />

                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.cardbackground }}>Trần Quốc Duy</Text>
                            <Text style={{ fontSize: 13, color: colors.cardbackground }}>20521250@gm.uit.edu.vn</Text>
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