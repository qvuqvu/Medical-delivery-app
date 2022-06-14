import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert, Modal } from 'react-native';
import HeaderOrder from '../components/HeaderOrder';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { discount } from '../global/Data';
import auth from "@react-native-firebase/auth"
import firestore, { firebase } from '@react-native-firebase/firestore';
import ProductOrder from '../components/ProductOrder';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useTheme } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
export default function MyOrder({ navigation, route }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("en");
    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    const [loading, setLoading] = useState(false);
    const { colors } = useTheme();
    const [fullname, setfullname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [address, setaddress] = useState("");
    const [date, setdate] = useState("")
    const [sex, setsex] = useState("")
    const [checked, setChecked] = useState("first");
    const [modalVisible, setModalVisible] = useState(false);
    const [name_dis, setName_dis] = useState("");
    const [num_dis, setNum_dis] = useState(0);
    const [choise_dis, setChoise_dis] = useState(-1);
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const count = items.length;
    const costShip = 50.000;
    var cost = 0, s = 0;
    const user = auth().currentUser;

    for (var i = 0; i <= items.length - 1; i++) {
        s = parseInt(items[i].gia);
        cost += s * items[i].SL
    }
    var total = cost + costShip - num_dis * costShip;
    const addCartToFireBase = () => {
        setLoading(true);
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const db = firebase.firestore();
        db.collection('order' + user.uid)
            .add({
                nhathuocchung: items[0].nhathuoc,
                date: date + '-' + month + '-' + year,
                items: items,
                name: fullname,
                phone: phonenumber,
                address: address,
                ship: costShip - num_dis * costShip,
                total: total,
                id: Math.random()
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false);
                    setnull([], false)
                    navigation.navigate('MyOrderComplete')
                }, 1500);
            })
    };
    const dispatch = useDispatch();
    const setnull = (item, checkboxValue) => {
        dispatch({
            type: "DELETE_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
            },
        });
    }
    firestore()
        .collection('order' + user.uid).onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
            });
        });
    useEffect(() => {
        firestore()
            .collection('User' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    setfullname(doc.data().full_name)
                    setphonenumber(doc.data().phone_number)
                    setdate(doc.data().datetime)
                    setsex(doc.data().sex)
                    setaddress(doc.data().address)
                });
            });
    });

    return (
        <>
            <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
                <HeaderOrder navigation={navigation} id={route.params.id} />
                <ScrollView style={{ height: "100%" }}>
                    <View style={{ marginTop: 15, marginLeft: 12, marginRight: 12 }}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16, marginRight: 150 }}>{t("Thông tin giao hàng")}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log(name_dis)
                                        console.log(num_dis)
                                    }}
                                >
                                    <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ color: 'red', fontWeight: 'bold' }}>{t("Thay đổi")}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 15 }}>{fullname}</Text>
                                <Text style={[styles.textStyle, { color: colors.text }]}>|</Text>
                                <Text style={[styles.textStyle, { color: colors.text }]}>{phonenumber}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: colors.text }}>{address}</Text>
                                <TextInput
                                    placeholder={t('Thêm ghi chú. VD: tên tòa nhà, số tầng')}
                                    style={{ color: colors.text }}
                                    placeholderTextColor={colors.text}
                                />
                            </View>
                        </View>
                        <View>
                            {items.map((item, index) =>
                                <View key={index}>
                                    <ProductOrder item={item} />
                                </View>
                            )}
                        </View>
                        {/* <FlatList
                        data={items}
                        keyExtractor={item => { return item.id }}
                        renderItem={({ item }) => (
                            <View style={{ alignSelf: 'center', width: 380 }}>
                                <ProductOrder
                                    item={item}
                                />
                            </View>
                        )}
                    /> */}
                        <View style={{ marginTop: 20, marginBottom: 10, height: '15%' }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{count} {t("Sản phẩm")}</Text>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{cost}.000 đ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10, marginTop: 10 }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{t("Phí vận chuyển")}</Text>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{costShip}.000 đ</Text>
                            </View>
                            <View style={num_dis == 0 ? styles.hideDis : styles.showDis}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{name_dis}</Text>
                                <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>-{num_dis * costShip}.000 đ</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                                <Text style={{ color: colors.text, fontSize: 15, fontWeight: 'bold' }}>{t("Khuyễn mãi:")}  {discount.length}</Text>
                                <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                                    <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ color: 'red', fontWeight: 'bold' }}>{t("Chọn")}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 30, marginBottom: 10 }}>
                                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 16 }}>{t("Chọn hình thức thanh toán")}</Text>
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
                                    <Text style={{ color: colors.text }}>{t("Thanh toán khi nhận hàng (COD)")}</Text>
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
                                    <Text style={{ color: colors.text }}>{t("Ví MoMo")}</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row', width: 350 }}>
                                <Image
                                    source={require('../global/image/doc_rule.png')}
                                    style={{ height: "100%", width: "8%", resizeMode: "contain", marginRight: 10 }}
                                />
                                <Text style={{ color: colors.text, fontSize: 15, marginRight: 10 }}>{t("Nhấn Đặt hàng đồng nghĩa với việc bạn đồng ý tuân theo các điều khoản của chúng tôi")}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalContainer}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{t("Chọn mã giảm giá")}</Text>
                                <Text style={{ color: 'black', fontSize: 14 }}>{t(" Áp dụng tối đa: 1")}</Text>
                            </View>
                            <FlatList
                                data={discount}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <ScrollView style={{ marginTop: 20 }}>
                                        <View style={{ flexDirection: 'row', width: "94%", backgroundColor: 'white', height: 80, alignSelf: 'center', alignItems: 'center' }}>
                                            <Image
                                                source={item.image}
                                                style={{ height: 55, width: 55, resizeMode: "contain", }}
                                            />
                                            <View style={{ marginLeft: 15, flexDirection: 'row', width: 300 }}>
                                                <View>
                                                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                                                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <Image
                                                                source={require('../global/image/time.png')}
                                                                style={{ height: 20, width: 20, resizeMode: "contain" }} />
                                                            <Text style={{ color: 'red', marginLeft: 5 }}>{t("Hạn dùng:")} {item.endDate}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        if (choise_dis == item.id) {
                                                            setChoise_dis(-1);
                                                            setName_dis("");
                                                            setNum_dis(0);
                                                            setModalVisible(false);
                                                        }
                                                        else {
                                                            setChoise_dis(item.id);
                                                            setName_dis(item.name);
                                                            setNum_dis(item.discount);
                                                            setModalVisible(false);
                                                        }

                                                    }}
                                                    style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 40 }}>
                                                    <Text style={{ color: 'red', fontWeight: 'bold' }}>{choise_dis == item.id ? t("Bỏ chọn") : t("Sử dụng")}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ScrollView>
                                )}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(false)
                                }}
                            >
                                <View style={{ backgroundColor: 'red', borderRadius: 15, height: 40, width: "90%", alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 17 }}>{t("Xong")}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal >
                <View style={{ height: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginRight: 20 }}>
                        <Text style={{ color: colors.text, fontSize: 18, fontWeight: 'bold' }}>{t("Tổng thanh toán:")}</Text>
                        <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>{total}.000đ</Text>
                    </View>
                    <TouchableOpacity
                        style={{ backgroundColor: 'red', width: 130, justifyContent: 'center', alignItems: 'center' }}
                        onPress={() => {
                            addCartToFireBase()
                        }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{t("Đặt hàng")}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.7,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 400 }}
                        source={require("../assets/animations/72243-order-placed.json")}
                        autoPlay
                        speed={2}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
        height: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 20,
    },
    showDis: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
        marginTop: 10
    },
    hideDis: {
        height: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10,
    }
})