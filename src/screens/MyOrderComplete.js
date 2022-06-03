import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import HeaderSimple from '../components/HeaderSimple';
import auth from "@react-native-firebase/auth"

export default function MyOrderComplete({ navigation }) {
    const user = auth().currentUser;
    const [getdoc, setdoc] = useState([]);
    const [getdoc1, setdoc1] = useState(
        {
            items: [{ "SL": "", "gia": "", "id": "", "image": "", "name": "", "nhathuoc": "" }],
            date: ""
        });
    const item = [];
    const [check, getcheck] = useState(false)
    firestore()
        .collection('order' + user.uid).onSnapshot((snapshot) => {

        });
    firestore()
        .collection('lastorder' + user.uid).onSnapshot((snapshot) => {

        });
    useEffect(() => {
        getcheck(false)
        firestore()
            .collection('order' + user.uid).onSnapshot((snapshot) => {
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
    const deleteCartToFireBase = (id) => {
        firestore()
            .collection('order' + user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().id == id) {
                        deletecart(documentSnapshot.id);
                    }
                });
            });
    }
    const deletecart = (item) => {
        firestore()
            .collection('order' + user.uid)
            .doc(item)
            .delete()
            .then(() => {
                console.log('order deleted!');
                addd();
            });
    }
    const addCartToFireBase = (item) => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const db = firebase.firestore();
        db.collection('lastorder' + user.uid)
            .add({
                nhathuocchung: item.nhathuocchung,
                date: date + '-' + month + '-' + year,
                items: item.items,
                name: item.name,
                phone: item.phone,
                address: item.address,
                ship: item.ship,
                total: item.total,
            })
            .then(() => {
                deleteCartToFireBase(item.id);
                console.log('User added!');
                setTimeout(() => {
                    navigation.navigate('MyLastOrder')
                }, 1000);
            })
    }
    const List = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 80, height: 80, resizeMode: "cover" }}
                        source={{ uri: item.image }} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={{ width: 263, height: 20, }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{item.gia}</Text>
                        <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 14, marginTop: 3 }}>x{item.SL}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const List1 = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ width: 80, height: 80, resizeMode: "cover" }}
                        source={{ uri: item.image }} />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={{ width: 263, height: 20, }}>
                        <Text style={{ color: 'black', fontSize: 16 }}>{item.name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold' }}>{item.gia}</Text>
                        <Text style={{ marginLeft: 'auto', fontWeight: 'bold', fontSize: 14, marginTop: 3 }}>x{item.SL}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const ListItem = ({ item }) => {
        return (
            <View style={{ marginTop: 30, marginLeft: 20, marginBottom: 10 }}>
                <View style={{ backgroundColor: '#ebf3f4', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                        <Image
                            style={{ width: 22, height: 22, }}
                            source={require('../global/image/store.png')} />
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{item.nhathuocchung}</Text>
                        <Text style={{ color: 'red', fontSize: 14.5, marginLeft: 'auto', marginRight: 20, fontWeight: '500' }}>Đang xử lý</Text>
                    </View>
                    <FlatList data={item.items}
                        renderItem={({ item, index }) => <List item={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View>
                    <View style={{ height: 40, marginTop: 50 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Ngày đặt: {item.date}</Text>
                            <Text style={{ marginLeft: 'auto', marginRight: 20, color: 'black', fontSize: 17 }}>Thành tiền: {<Text style={{ color: 'red' }}>{item.total}k</Text>} </Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: "flex-end" }}>
                        <TouchableOpacity
                            style={{ borderRadius: 20, marginLeft: 40, backgroundColor: "#36a0ef", justifyContent: "center", alignItems: "center", width: 120 }}
                            onPress={() => {
                                addCartToFireBase(item)
                            }}>
                            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Đã nhận hàng</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ borderRadius: 20, marginLeft: 40, backgroundColor: "#36a0ef", alignItems: 'center', justifyContent: 'center', width: 120, marginRight: 20 }}
                            onPress={() => {
                                deleteCartToFireBase(item.id)
                            }}>
                            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Huỷ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const ListItem1 = (item) => {
        return (
            <View style={{ marginTop: 10, marginLeft: 20, marginBottom: 10 }}>
                <View style={{ backgroundColor: '#ebf3f4', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 8, marginTop: 8 }}>
                        <Image
                            style={{ width: 25, height: 25, }}
                            source={require('../global/image/store.png')} />
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>{item.nhathuocchung}</Text>
                        <Text style={{ color: 'red', fontSize: 14.5, marginLeft: 'auto', marginRight: 20, fontWeight: '500' }}>Đang xử lý</Text>
                    </View>
                    <FlatList data={item.items}
                        renderItem={({ item, index }) => <List1 item={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View>
                    <View style={{ marginBottom: 20, height: 40 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text>Ngày đặt: {item.date}</Text>
                            <Text style={{ marginLeft: 'auto', marginRight: 20, color: 'black', fontSize: 17 }}>Thành tiền: {<Text style={{ color: 'red' }}>{item.total}k</Text>} </Text>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: "flex-end" }}>
                        <TouchableOpacity
                            style={{ borderRadius: 20, marginLeft: 40, backgroundColor: "#36a0ef", justifyContent: "center", alignItems: "center", width: 120 }}
                            onPress={() => {
                                addCartToFireBase(item)
                            }}>
                            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Đã nhận hàng</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ borderRadius: 20, marginLeft: 40, backgroundColor: "#36a0ef", alignItems: 'center', justifyContent: 'center', width: 120, marginRight: 20 }}
                            onPress={() => {
                                deleteCartToFireBase(item.id)
                            }}>
                            <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Huỷ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderSimple title="Đơn mua" navigation={navigation} />
            <View style={{ height: 50, backgroundColor: '#eff2cc', flexDirection: 'row', alignItems: 'center' }}>
                <Text>Sản phẩm đặt hàng thành công</Text>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => {
                        addd()
                    }}>
                    <Text>Load</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '100%' }}>
                {check ?
                    (
                        ListItem1(getdoc1)
                    )
                    : (<FlatList data={item}
                        renderItem={({ item, index }) => <ListItem item={item} />}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                    />)}
            </View>
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
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },
})