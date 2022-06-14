import React, { useState, useContext, useEffect, useRef } from 'react'
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
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import i18n from '../assets/language/i18n';
import { Picker } from '@react-native-picker/picker';
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});


export default function DrawerContent(props) {
    const { colors } = useTheme();
    const { t, i18n } = useTranslation();
    const currentLanguage = useSelector((state) => state.cartReducer.selectedItems.language)
    const [selectedValue, setSelectedValue] = useState(currentLanguage);
    const [check, setcheck] = useState(0)
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        console.log(currentLanguage)
        setcheck(Math.random())
    }, [currentLanguage]);
    const { dispatchSignedIn } = useContext(SignInContext)
    const [getorder, setorder] = useState(0);
    const [getstatus, setstatus] = useState(0);
    const user = auth().currentUser;
    const [DarkMode, setDarkMode] = useState("")
    const [fullname, setfullname] = useState("")
    const paperTheme = useTheme()
    firestore()
        .collection('User' + user.uid).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setDarkMode(doc.data().isDarkMode)
            });
        });
    useEffect(() => {
        firestore()
            .collection('User' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setfullname(doc.data().full_name)
                });
            });
        setSelectedValue(currentLanguage)
    }, [currentLanguage])
    const update1 = (doc) => {
        firestore()
            .collection('User' + user.uid)
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
            .collection('User' + user.uid)
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
    const update2 = (doc) => {
        firestore()
            .collection('User' + user.uid)
            .doc(doc)
            .update({
                isLanguage: currentLanguage
            })
            .then(() => {
                console.log("Update Success");
                console.log(currentLanguage);
            });
    }
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
    const dispatch = useDispatch();
    const updatelang = (value) => dispatch({
        type: "UPDATE_TO_LANGUAGE",
        payload: {
            language: value,
        },
    });
    const update3 = (value) => {
        firestore()
            .collection('User' + user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    update4(documentSnapshot.id, value)
                });
            });
    }
    const update4 = (doc, value) => {
        firestore()
            .collection('User' + user.uid)
            .doc(doc)
            .update({
                isLanguage: value
            })
            .then(() => {
                console.log("Update Success");
                console.log(value);
            });
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
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: colors.text }}> {user.displayName ? user.displayName : fullname}</Text>
                            <Text style={{ fontSize: 13, color: colors.text }}>{user.email ? user.email : ""}</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-evenly", paddingBottom: 15, paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.text, fontSize: 18 }}>{getorder}</Text>
                                <Text style={{ color: colors.text, fontSize: 14 }}>{t('Đơn đang xử lý')}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 0 }}>
                            <View style={{ marginLeft: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: colors.text, fontSize: 18 }}>{getstatus}</Text>
                                <Text style={{ color: colors.text, fontSize: 14 }}>{t('Giỏ hàng')}</Text>
                            </View>
                        </View>
                    </View>
                </View>


                <DrawerItemList {...props} />

                <View style={{ borderTopWidth: 1, marginTop: 5, borderTopColor: colors.text }}>
                    <Text style={{
                        fontSize: 16,
                        color: colors.text,
                        paddingTop: 15,
                        paddingLeft: 20,
                    }}>{t('Chủ đề')}</Text>
                    <View style={styles.switchText}>
                        <Text style={{
                            fontSize: 16,
                            color: colors.text,
                            paddingTop: 10,
                            paddingLeft: 0,
                            fontWeight: "bold"
                        }}>{t('Ngôn ngữ')}</Text>
                        <View style={{ marginTop: 10 }}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50, width: 150, color: colors.text }}
                                onValueChange={(itemValue, itemIndex) => {
                                    setSelectedValue(itemValue);
                                    updatelang(itemValue)
                                    update3(itemValue)
                                }}
                            >
                                <Picker.Item label="Việt Nam" value="vi" />
                                <Picker.Item label="English" value="en" />
                            </Picker>
                        </View>
                    </View>
                    <View style={styles.switchText}>
                        <Text style={{
                            fontSize: 16,
                            color: colors.text,
                            paddingTop: 10,
                            paddingLeft: 0,
                            fontWeight: "bold"
                        }}>{t('Chủ đề tối')}</Text>
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

            </DrawerContentScrollView >

            <TouchableOpacity
                onPress={() => { signOut() }}>
                <DrawerItem
                    label={t("Đăng xuất")}
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