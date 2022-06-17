import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Dimensions, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, FlatList, Keyboard, ImageBackground, ScrollView } from 'react-native'
import { colors } from "../../global/styles"
import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
import HomeAdminHeader from '../components/HomeAdminHeader';
const SCREEN_WIDTH = Dimensions.get('window').width;

const nhathuoc = []

useEffect(() => {
    firestore()
        .collection("DataNhaThuoc")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                nhathuoc.push(documentSnapshot.id)
            })
        })
}, [])

const ListItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => {
            firestore()
                .collection("DataNhaThuoc")
                .doc(item)
                .get()
                .then(documentSnapshot => {
                    navigation.navigate('DetailPharmacy',documentSnapshot.data())
                });
            navigation.navigate('DetailCustomer', { uid: item.uid })
        }}>
            <View style={{ flex: 1, backgroundColor: colors.boxes, width: 300, height: 50, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        </TouchableOpacity>
    )
}

export default function ListPharmarcy({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HomeAdminHeader navigation={navigation} title="Home" />
            <View style={{ alignSelf: "center" }}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, marginTop: 20 }}>Danh sách nhà thuốc</Text>
                    <FlatList
                        data={nhathuoc}
                        renderItem={({ item }) => <ListItem item={item}/>}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    )
}
