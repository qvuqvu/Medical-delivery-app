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
import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
import { useTheme } from 'react-native-paper'

GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});

export default function DrawerContent(props) {

    const { dispatchSignedIn } = useContext(SignInContext)
    const [getorder, setorder] = useState(0);
    const [getstatus, setstatus] = useState(0);
    const user = auth().currentUser;
    const [DarkMode, setDarkMode] = useState("")
    const [fullname, setfullname] = useState("")
    const paperTheme = useTheme()
    firestore()
        .collection('DarkMode').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setDarkMode(doc.data().isDarkMode)
            });
        });
    useEffect(()=>{
        firestore()
            .collection('User' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setfullname(doc.data().full_name)
                });
            });
    },[])
    const update1 = (doc) => {
        firestore()
            .collection('DarkMode')
            .doc(doc)
            .update({
                isDarkMode: !DarkMode
            })
            .then(() => {
                console.log("Update Success");
                console.log(DarkMode);
            });
    }
    const update = () => {
        firestore()
            .collection('DarkMode')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    update1(documentSnapshot.id)
                });
            });
    }
    firestore()
        .collection('order' + user.uid).onSnapshot((snapshot) => {
            setorder(snapshot.size)
        });
    firestore()
        .collection('cart' + user.uid).onSnapshot((snapshot) => {
            setstatus(snapshot.size)
        });
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
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.cardbackground }}> {user.displayName ? user.displayName : fullname}</Text>
                            <Text style={{ fontSize: 13, color: colors.cardbackground }}>{user.email ? user.email : ""}</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", paddingBottom: 5 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>{getorder}</Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>Đơn đang xử lý</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }}>{getstatus}</Text>
                                <Text style={{ color: colors.cardbackground, fontSize: 14 }}>Giỏ hàng</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <DrawerItemList {...props} />

                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }}>
                    <Text style={styles.preferences}>Chủ đề</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkthemeText}>Dark Theme</Text>
                        <View style={{ paddingRight: 10 }}>
                            <Switch
                                value={DarkMode}
                                onValueChange={() => {
                                    update();
                                }}
                            />
                        </View>
                    </View>
                </View>

            </DrawerContentScrollView>

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