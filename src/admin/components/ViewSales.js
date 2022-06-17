import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import i18n from '../../assets/language/i18n';
import HeaderSales from '../components/HeaderSales';

export default function ViewSales() {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("");
    const { colors } = useTheme();
    const user = auth().currentUser;
    const [isValue, setValue] = useState(0);
    const [getdoc, setdoc] = useState([]);
    const [getdoc1, setdoc1] = useState(
        {
            items: [{ "SL": "", "gia": "", "id": "", "image": null, "name": "", "nhathuoc": "" }],
            date: ""
        });
    const item = [];
    var s = 0;
    const [check, getcheck] = useState(true)
    firestore()
        .collection('AdminSales').onSnapshot((snapshot) => {
        })
    useEffect(() => {
        getcheck(false)
        firestore()
            .collection('AdminSales').onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    s = s + doc.data().total
                    setValue(s)
                });
            });
    }, []);
    return (
        <View style={{ height: 60, backgroundColor: "#36a0ef", borderTopColor: "blue", justifyContent: 'center' }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 22, alignSelf: 'center', marginBottom: 15 }}>Tổng doanh thu: {isValue}.000đ</Text>
        </View>
    )
}