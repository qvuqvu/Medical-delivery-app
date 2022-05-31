import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import HeaderSimple from '../components/HeaderSimple';
import Icon3 from 'react-native-vector-icons/EvilIcons'
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

export default function MyOrderComplete({ navigation }) {
    const [check, getcheck] = useState(true)
    const [gettest, settest] = useState(0)
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
        settest(Math.random())
    }
    useEffect(() => {
        getcheck(false)
        data[0].item = []
        firestore()
            .collection('order' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (snapshot.size == 1) {
                        getcheck(true)
                        setdoc(doc.data())
                    }
                    else {
                        data[0].item.push(doc.data())
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
                    }
                });
            });
    }, [gettest]);
    const Type = (item) => {
        var c = item.items.gia.split("/")
        return c[1]
    }
    const ListItem = ({ item }) => {
        return (
            <View style={{ marginTop: 10, marginLeft: 20, marginBottom: 10 }}>
                <View style={{ backgroundColor: '#ebf3f4', height: 155, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                        <Image
                            style={{ width: 22, height: 22, }}
                            source={require('../global/image/store.png')} />
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{item.items.nhathuoc}</Text>
                        <Text style={{ color: 'red', fontSize: 14.5, marginLeft: 'auto', marginRight: 20, fontWeight: '500' }}>{status}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ width: 80, height: 80, resizeMode: "cover" }}
                                source={{ uri: item.items.image }} />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <View style={{ width: 263, height: 20, }}>
                                <Text style={{ color: 'black', fontSize: 16 }}>{item.items.name}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{Type(item)}</Text>
                                <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 14, marginTop: 3 }}>x{item.items.SL}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={status == 'Đang xử lý' ? { marginBottom: 20, height: 40, } : { height: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginLeft: 20, fontSize: 16 }}>{item.items.SL} sản phẩm</Text>
                            <Text style={{ marginLeft: 'auto', marginRight: 20, color: 'black', fontSize: 17 }}>Thành tiền: {<Text style={{ color: 'red' }}>200k</Text>} </Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <View style={{ borderRadius: 5, width: 120, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginLeft: 100 }}>
                            <Text style={{ color: 'white' }}>Đã nhận hàng</Text>
                        </View>
                        <View style={{ borderRadius: 5, width: 120, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', marginRight: 20, marginLeft: 'auto' }}>
                            <Text style={{ color: 'white' }}>Huỷ</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    const ListItem1 = (item) => {
        return (
            <View >
                <Text>{item.items.name}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderSimple title="Đơn mua" navigation={navigation} />
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
                : (
                    <FlatList data={dataOrder[0].item}
                        renderItem={({ item }) => <ListItem item={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                )}
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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