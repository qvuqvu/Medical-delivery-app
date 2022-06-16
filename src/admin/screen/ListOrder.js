import React, { useState, useContext, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth';
import { View, Text, Linking, Pressable, Alert, Switch, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SignInContext } from '../contexts/authContext';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore, { firebase } from '@react-native-firebase/firestore';
// import ProductCard from '../components/ProductCard';
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});


export default function ListOrder({ navigation }) {
    const Useruid = []
    useEffect(() => {
        firestore()
            .collection('Admin').onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    Useruid.push(doc.data())
                });
            });

    })
    const ListItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {

                    firestore()
                        .collection('order' + item.uid).onSnapshot((snapshot) => {
                        });
                    navigation.navigate('DetailCustomer', { uid: item.uid })
                }}>
                    <Text>User: {index + 1}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ justifyContent: 'center', alignSelf: 'center', flex: 1 }}>
            <View>
                <FlatList data={Useruid}
                    renderItem={({ item, index }) => <ListItem item={item} index={index} />}
                    contentContainerStyle={{ paddingBottom: 10 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}