import React, { useState, useContext, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text, Linking, Pressable, Alert, Switch, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SignInContext } from '../contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore, { firebase } from '@react-native-firebase/firestore';
import HomeAdminHeader from '../components/HomeAdminHeader';
import { useTheme } from 'react-native-paper';
// import ProductCard from '../components/ProductCard';
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});


export default function ListOrder({ navigation }) {
    const { colors } = useTheme();
    const [check, getcheck] = useState(false)
    const [getdoc, setdoc] = useState([])
    const [getdoc1, setdoc1] = useState({
        uid: ''
    })
    const item = []
    useEffect(() => {
        getcheck(false)
        firestore()
            .collection('Admin').onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (snapshot.size == 1) {
                        getcheck(true)
                        setdoc1(doc.data())
                    }
                    else {
                        item.push(doc.data())
                    }
                });
            });

    }, [getdoc]);
    const addd = (() => {
        setdoc(Math.random())
        if (check)
            getcheck(false)
    })
    const ListItem1 = (item) => {
        return (
            <TouchableOpacity onPress={() => {
                firestore()
                    .collection('order' + item.uid).onSnapshot((snapshot) => {
                    });
                navigation.navigate('DetailCustomer', { uid: item.uid })
            }}
            style={{ backgroundColor: colors.boxes, width: 300, height: 50, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, color: 'black' }}>User: 1</Text>
            </TouchableOpacity >
        )
}
const ListItem = ({ item, index }) => {
    return (
        <TouchableOpacity onPress={() => {
            firestore()
                .collection('order' + item.uid).onSnapshot((snapshot) => {
                });
            navigation.navigate('DetailCustomer', { uid: item.uid })
        }}>
            <View style={{ flex: 1, backgroundColor: colors.boxes, width: 300, height: 50, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: 'black' }}>User: {index + 1}</Text>
            </View>
        </TouchableOpacity>
    )
}
return (
    <View style={{ flex: 1}}>
        <HomeAdminHeader navigation={navigation} title="Home" />
    <View style={{ alignSelf: 'center' }}>
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, marginTop: 20 }}>Danh sách người dùng đặt hàng</Text>
            {check ?
                (
                    ListItem1(getdoc1)
                )
                : (
                    <FlatList data={item}
                        renderItem={({ item, index }) => <ListItem item={item} index={index} />}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                )
            }
        </View>
    </View>
    </View>
)
}