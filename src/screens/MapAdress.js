import { View, Text, TouchableOpacity, PermissionsAndroid, StyleSheet, Image, Keyboard, } from 'react-native'
import React, { useState, useEffect } from 'react';
import HeaderAdress from '../components/HeaderAdress';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
import { useTheme } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
navigator.geolocation = require('@react-native-community/geolocation');
const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message:
                    "MEDILI App needs access to your location " +
                    "so you can see your current location.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
    } catch (err) {
        console.warn(err);
    }
};

export default function MapAdress({ navigation }) {
    const { colors } = useTheme();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("");
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);

    const [change, setChange] = useState(false);
    const [address, setAddress] = useState("");
    const [address1, setAddress1] = useState("");
    const user = auth().currentUser;
    useEffect(() => {
        firestore()
            .collection('User' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setAddress(doc.data().address)
                });
            });
    }, []);
    const updateGmail = (doc) => {
        firestore()
            .collection('User' + user.uid)
            .doc(doc)
            .update({
                address: address1
            })
            .then(() => {
                console.log("Update GmailUser");
            });
    }
    const update = () => {
        firestore()
            .collection('User' + user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    updateGmail(documentSnapshot.id)
                });
            });
    }
    return (
        requestCameraPermission(),
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <HeaderAdress navigation={navigation} title={t("Địa chỉ")} />
            <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Image
                            source={{ uri: "https://cdn4.iconfinder.com/data/icons/universal-7/614/17_-_Location-256.png" }}
                            style={{ height: 30, width: 30 }}
                        />
                        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginLeft: 5, color: colors.text }}>{t("Địa chỉ đã lưu")}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ marginLeft: 'auto', marginRight: 5, marginTop: 5 }}
                        onPress={() => {
                            setChange(!change)
                            if (change && address1 != "") {
                                setAddress(address1)
                                update()
                            }
                        }}
                    >
                        <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }}>{change == true ? t("Lưu") : t("Sửa")}</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colors.text, marginLeft: 10, fontSize: 16, marginTop: 10 }}>{address==""?"Hãy chọn địa chỉ mới!":address}</Text>
            </View>
            <View style={change ? { marginLeft: 20, height: 350, marginTop: 10, marginRight: 20, backgroundColor: colors.background } : { marginTop: 1000 }}>
                <Text style={{ color: colors.text, marginLeft: 10, fontSize: 16, fontWeight: 'bold' }}>Tìm kiếm địa chỉ mới</Text>
                <GooglePlacesAutocomplete
                    placeholder={t('Tìm kiếm')}
                    styles={{
                        textInputContainer: {
                            backgroundColor: colors.background,
                            borderWidth: 1,
                            borderColor: colors.text,
                            borderRadius: 5,
                            marginTop: 10
                        },
                        textInput: {
                            backgroundColor: colors.background,
                            color: colors.text,
                        },
                        predefinedPlacesDescription: {
                            color: colors.text,
                        },
                        powered:{
                            color: colors.text,
                            backgroundColor: colors.background,
                        },
                        poweredContainer: {
                            backgroundColor: colors.background,
                        },

                    }}
                    onPress={(data, details = null) => {
                        console.log(details);
                        setAddress1(data.description)
                    }}
                    query={{
                        key: 'AIzaSyBPJiW_244NDw39hMqRkLt2_Evm4TCMBXc',
                        language: 'vi',
                    }}
                />
            </View>
        </View>
    )
}