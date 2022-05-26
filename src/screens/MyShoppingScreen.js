import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon4 from 'react-native-vector-icons/AntDesign'
import HeaderSimple from '../components/HeaderSimple';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { test } from '../global/Data';
import auth from "@react-native-firebase/auth"
import firestore, { firebase } from '@react-native-firebase/firestore';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
/** */

export default function MyShoppingScreen({ navigation }) {
    const user = auth().currentUser;
    const [getdoc, setdoc] = useState([]);
    const [num, setNum] = useState(1);
    const [data, setData] = useState(test);
    const arr = []
    const [getdoc1, setdoc1] = useState(
        {
            items: [{ name: "", image: "", id: "0", gia: "" }],
            date: ""
        });
    const item = [];
    const [check, getcheck] = useState(false)
    useEffect(() => {
        getcheck(false)
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
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
            .collection('cart' + user.uid)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().items.id == id) {
                        deletecart(documentSnapshot.id);
                    }
                });
            });
    }
    const deletecart = (item) => {
        firestore()
            .collection('cart' + user.uid)
            .doc(item)
            .delete()
            .then(() => {
                console.log('cart deleted!');
                addd();
            });
    }
    const handleMinusNum = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    const handlePlusNum = () => {
        setNum(num + 1);
    }

    const selectItem = (item, checkboxValue) => {
        if (!checkboxValue) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].id == item.items.id) {
                    arr.splice(i, 1)
                }
            }
            console.log('remove')
            console.log(arr)
        }
        else {
            arr.push(item.items)
            console.log("added")
            console.log(arr)
        }
    }
    const ListItem = ({ item }) => {
        return (
            <ScrollView>
                <View style={{ alignSelf: 'center', width: 380 }}>
                    <View style={{ backgroundColor: '#ebf3f4', height: 160, justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                            <Image
                                style={{ width: 22, height: 22, }}
                                source={require('../global/image/store.png')} />
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Nhà Thuốc Ngọc Anh</Text>
                            <Icon3
                                name='chevron-right'
                                size={30}
                                color='black'
                                style={{ marginLeft: 10 }}
                            />
                            <Icon3
                                name='close'
                                size={22}
                                color='black'
                                style={{ marginLeft: 'auto', marginRight: 10, color: 'black' }}
                                onPress={() => {
                                    deleteCartToFireBase(item.items.id)
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <BouncyCheckbox
                                    style={{ marginLeft: 10 }}
                                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                    fillColor="green"
                                    // isChecked={isFoodInCart(food, cartItems)}
                                    onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                                />
                                <Image
                                    style={{ width: 80, height: 80, resizeMode: "cover" }}
                                    source={{ uri: item.items.image }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ width: 240, height: 20 }}>
                                    <Text style={{ color: 'black', fontSize: 16 }}>{item.items.name}</Text>
                                </View>
                                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>{item.items.gia}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <TouchableOpacity
                                        onPress={handleMinusNum}
                                    >
                                        <View style={{ borderWidth: 1, borderColor: 'grey' }}>
                                            <Icon4
                                                name='minus'
                                                size={20}
                                                color='black'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: 'grey', width: 40, alignItems: 'center' }}>
                                        <Text style={{ color: 'black' }}>{num}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={handlePlusNum}
                                    >
                                        <View style={{ borderWidth: 1, borderColor: 'grey' }}>
                                            <Icon4
                                                name='plus'
                                                size={20}
                                                color='black'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    const renderItem1 = (item) => {
        return (
            <ScrollView>
                <View style={{ alignSelf: 'center', width: 380 }}>
                    <View style={{ backgroundColor: '#ebf3f4', height: 160, justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                            <Image
                                style={{ width: 22, height: 22, }}
                                source={require('../global/image/store.png')} />
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>Nhà Thuốc Ngọc Anh</Text>
                            <Icon3
                                name='chevron-right'
                                size={30}
                                color='black'
                                style={{ marginLeft: 10 }}
                            />
                            <Icon3
                                name='close'
                                size={22}
                                color='black'
                                style={{ marginLeft: 'auto', marginRight: 10, color: 'black' }}
                                onPress={() => {
                                    deleteCartToFireBase(item.items.id)
                                }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <BouncyCheckbox
                                    style={{ marginLeft: 10 }}
                                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                                    fillColor="green"
                                // isChecked={isFoodInCart(food, cartItems)}
                                // onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                                />

                                <Image
                                    style={{ width: 80, height: 80, resizeMode: "cover" }}
                                    source={{ uri: item.items.image }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ width: 240, height: 20 }}>
                                    <Text style={{ color: 'black', fontSize: 16 }}>{item.items.name}</Text>
                                </View>
                                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>{item.items.gia}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                    <TouchableOpacity
                                        onPress={handleMinusNum}
                                    >
                                        <View style={{ borderWidth: 1, borderColor: 'grey' }}>
                                            <Icon4
                                                name='minus'
                                                size={20}
                                                color='black'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={{ borderWidth: 1, borderColor: 'grey', width: 40, alignItems: 'center' }}>
                                        <Text style={{ color: 'black' }}>{num}</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={handlePlusNum}
                                    >
                                        <View style={{ borderWidth: 1, borderColor: 'grey' }}>
                                            <Icon4
                                                name='plus'
                                                size={20}
                                                color='black'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderSimple navigation={navigation} title="Giỏ Hàng" />
            <View style={{ height: 50, backgroundColor: '#eff2cc', flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={require('../global/image/cart_purchase.png')}
                    style={{ height: 30, width: "15%", resizeMode: "contain" }}
                />
                <Text style={{ color: 'black', fontSize: 15 }}>Vui lòng chọn sản phẩm bạn muốn mua!</Text>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => {
                        addd()
                    }}>
                    <Text>Load</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: '79.5%' }}>
                {check ?
                    (
                        renderItem1(getdoc1)
                    )
                    : (<FlatList data={item}
                        renderItem={({ item, index }) => <ListItem item={item} />}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                    />)}
            </View>
            <View style={{ flexDirection: 'row', height: 60, justifyContent: "space-between" }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                    <RadioButton
                        value="all"

                    />
                    <Text style={{ color: 'black', fontSize: 16 }}>Tất cả</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 15, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tổng tiền</Text>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>0đ</Text>
                    </View>
                    <TouchableOpacity
                        style={{ width: 120, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => { }}
                    >
                        <View>
                            <Text style={{ color: 'white', fontSize: 16 }}>Mua Hàng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },
})

{/* <View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginRight: 150 }}>Thông tin giao hàng</Text>
                        <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'red', fontWeight: 'bold' }}>Thay đổi</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Vũ Viết Huy</Text>
                        <Text style={styles.textStyle}>|</Text>
                        <Text style={styles.textStyle}>0987134912</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: 'black' }}>36C/41 đường 16, Linh Trung, Thủ Đức, TP Hò Chí Minh, Việt Nam</Text>
                        <TextInput
                            placeholder='Thêm ghi chú. VD: tên tòa nhà, số tầng'
                        />
                    </View>
                </View>
                <View>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Chọn hình thức thanh toán</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Image
                            source={require('../global/image/Cash.png')}
                            style={{ height: 43, width: "25%", resizeMode: "contain", marginRight: 10 }}
                        />
                        <Text style={{ color: 'black' }}>Thanh toán khi nhận hàng (COD)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                        />
                        <Image
                            source={require('../global/image/MoMo_Logo.png')}
                            style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 10 }}
                        />
                        <Text style={{ color: 'black' }}>Ví MoMo</Text>
                    </View>
                </View> */}