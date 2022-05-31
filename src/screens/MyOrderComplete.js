import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
const listTab = [
    {
        status: 'Đang xử lý',
    },
    {
        status: 'Đã giao',
    },
    {
        status: 'Đã hủy',
    }
]
const data = [
    {
        id: 1,
        item: [],
        status: 'Đang xử lý',
    },
    {
        id: 2,
        item: [],
        status: 'Đã giao',
    },
    {
        id: 3,
        item: [],
        status: 'Đã hủy',
    }
]

export default function MyOrderComplete() {
    const [check, getcheck] = useState(true)
    const [getdoc, setdoc] = useState({ "items": { "SL": "", "gia": "", "id": "", "image": "", "name": "", "nhathuoc": "" } })
    const user = auth().currentUser;
    const [status, setStatus] = useState('Đang xử lý')
    const [dataOrder, setDataOrder] = useState(data)
    const setStatusFilter = (status) => {
        if (status === 'Đang xử lý') {
            setDataOrder([...data.filter(item => item.status === status)])
        } else if (status === 'Đã giao') {
            setDataOrder([...data.filter(item => item.status === status)])
        } else {
            setDataOrder([...data.filter(item => item.status === status)])
        }
        setStatus(status)

    }
    useEffect(() => {
        getcheck(false)
        data[0].item = []
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (snapshot.size == 1) {
                        getcheck(true)
                        setdoc(doc.data())
                    }
                    else {
                    data[0].item.push(doc.data())
                    console.log("aa")
                    }
                });
            });
        data[1].item = []
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (snapshot.size == 1) {
                        getcheck(true)
                        setdoc(doc.data())
                    }
                    else {
                        data[1].item.push(doc.data())
                        console.log("bb")
                    }
                });
            });
        data[2].item = []
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (snapshot.size == 1) {
                        getcheck(true)
                        setdoc(doc.data())
                    }
                    else {
                        data[2].item.push(doc.data())
                        console.log("cc")
                    }
                });
            });
    }, [dataOrder]);
    const ListItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.items.name}</Text>
            </View>
        )
    }
    const ListItem1 = ( item ) => {
        return (
            <View >
                <Text>{item.items.name}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.listTab}>
                {
                    listTab.map(e => (
                        <TouchableOpacity
                            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
                            onPress={() => setStatusFilter(e.status)}
                        >
                            <Text style={styles.textTab, status === e.status && styles.textTabActive}>{e.status}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            {check ?
                (
                    ListItem1(getdoc)
                )
                : (<FlatList data={dataOrder[0].item}
                    renderItem={({ item }) => <ListItem item={item} />}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    showsVerticalScrollIndicator={false}
                />)}

        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listTab: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
    btnTab: {
        width: Dimensions.get('window').width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        padding: 10,
        borderColor: '#EBEBEB',
        justifyContent: 'center',
    },
    textTab: {
        fontSize: 16,
    },
    btnTabActive: {
        backgroundColor: '#E6838D',
    },
    textTabActive: {
        color: '#fff',
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
    }
})