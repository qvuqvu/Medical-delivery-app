import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderSimple from '../components/HeaderSimple';
import auth from "@react-native-firebase/auth"
import firestore, { firebase } from '@react-native-firebase/firestore';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ViewCart from './ViewCart';
import { useDispatch } from "react-redux";
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
/** */

export default function MyShoppingScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("vi");
    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        addd();
    }, [currentLanguage]);
    const { colors } = useTheme();
    const user = auth().currentUser;
    const [getdoc, setdoc] = useState([]);
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

    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) =>
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
            },
        });
    const ListItem = ({ item }) => {
        return (
            <ScrollView>
                <View style={{ alignSelf: 'center', width: 380 }}>
                    <View style={{ backgroundColor: colors.boxes, height: 160, justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                            <Image
                                style={{ width: 22, height: 22, }}
                                source={require('../global/image/store.png')} />
                            <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{item.items.nhathuoc}</Text>
                            <Icon3
                                name='chevron-right'
                                size={30}
                                color={colors.text}
                                style={{ marginLeft: 10 }}
                            />
                            <Icon3
                                name='close'
                                size={22}
                                color={colors.text}
                                style={{ marginLeft: 'auto', marginRight: 10 }}
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
                                    onPress={(checkboxValue) => selectItem(item.items, checkboxValue)}
                                />
                                <Image
                                    style={{ width: 80, height: 80, resizeMode: "cover" }}
                                    source={{ uri: item.items.image }} />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <View style={{ width: 240, height: 20 }}>
                                    <Text style={{ color: colors.text, fontSize: 16 }}>{item.items.name}</Text>
                                </View>
                                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>{item.items.gia}</Text>
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
                    <View style={{ backgroundColor: colors.boxes, height: 160, justifyContent: 'center', marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                            <Image
                                style={{ width: 22, height: 22, }}
                                source={require('../global/image/store.png')} />
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{item.items.nhathuoc}</Text>
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
                                    onPress={(checkboxValue) => selectItem(item.items, checkboxValue)}
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
                <Text style={{ color: 'black', fontSize: 15 }}>{t('Vui lòng chọn sản phẩm bạn muốn mua!')}</Text>
                <Icon
                    name="reload"
                    size={20}
                    color="red"
                    onPress={() => {
                        addd()
                    }}
                    style={{ marginLeft: 'auto', marginRight: 20 }}
                />
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
            <ViewCart navigation={navigation} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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