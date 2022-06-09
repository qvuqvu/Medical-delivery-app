import React, { useState, useEffect, useTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from "react-native-vector-icons/FontAwesome"
import { Avatar, Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import DatetimePicker from "@react-native-community/datetimepicker"
import HomeHeader from '../components/HomeHeader';
import { discount } from "../global/Data"


export default function MyAccountScreen({ navigation }) {
    const [fullname, setfullname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [address, setaddress] = useState("");
    const [date, setdate] = useState("")
    const [sex, setsex] = useState("")
    const [fullname1, setfullname1] = useState("")
    const [phonenumber1, setphonenumber1] = useState("")
    const [address1, setaddress1] = useState("");
    const [sex1, setsex1] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [datetime, setdatetime] = useState(new Date());
    const [mode, setmode] = useState('date');
    const [show, setShow] = useState(false);
    const user = auth().currentUser;
    const [getorder, setorder] = useState(0);
    const [getcomplete, setcomplete] = useState(0);

    const showMode = (currentMode) => {
        setShow(true);
        setmode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const createuser = () => {
        setModalVisible(true);
    }
    const formattedDate = datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime.getFullYear()
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setdatetime(currentDate);
    };
    firestore()
        .collection('order' + user.uid).onSnapshot((snapshot) => {
            setorder(snapshot.size)
        });
    firestore()
        .collection('lastorder' + user.uid).onSnapshot((snapshot) => {
            setcomplete(snapshot.size)
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
    const updateGmail = (doc) => {
        firestore()
            .collection('User' + user.uid)
            .doc(doc)
            .update({
                phone_number: phonenumber1,
                full_name: fullname1,
                datetime: formattedDate,
                address: address1,
                sex: sex1
            })
            .then(() => {
                console.log("Update GmailUser");
            });
    }
    const update = () => {
        if (user.displayName != '' && fullname == '') {
            firestore().collection('User' + user.uid).add({
                phone_number: phonenumber1,
                full_name: fullname1,
                datetime: formattedDate,
                address: address1,
                sex: sex1
            }).then(() => {
                console.log("Update User");
            })
        }
        else {
            firestore()
                .collection('User' + user.uid)
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(documentSnapshot => {
                        updateGmail(documentSnapshot.id)
                    });
                });
        }
        setModalVisible(!modalVisible)
        setfullname1("");
        setaddress1("");
        setdatetime(new Date());
        setsex1("");
        setphonenumber1("");
    }
    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} title="Profile" />
            <View style={{ backgroundColor: 'white' }}>
                <View style={styles.avatarView}>
                    <Avatar
                        size={90}
                        rounded
                        avatarStyle={styles.avatar}
                        source={{ uri: user.photoURL ? user.photoURL : "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                    />
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 15 }}>
                        {user.displayName ? user.displayName : fullname}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 10, marginRight: 10 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyOrderComplete')
                        }}
                        style={styles.viewItem}>
                        <Image
                            source={require('../global/image/doc.png')}
                            style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 20 }}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                            <Text style={{ color: 'black' }}>{getorder}</Text>
                            <Text>Đơn đang xử lý</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.viewItem}
                        onPress={() => navigation.navigate('MyLastOrder')}
                    >
                        <Image
                            source={require('../global/image/history_cart.png')}
                            style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 20 }}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                            <Text style={{ color: 'black' }}>{getcomplete}</Text>
                            <Text>Đơn đã mua</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{ backgroundColor: 'white', width: "100%", height: '45%', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', }}>Thông tin cá nhân</Text>
                    <TouchableOpacity onPress={createuser}>
                        <Text style={{ marginLeft: 200, fontSize: 15, fontWeight: 'bold', color: 'red' }}>Sửa</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} >
                                <Icon1
                                    size={20}
                                    name="close"
                                    style={{ marginLeft: 265, marginTop: -20 }}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>Cập nhật thông tin</Text>
                            <View style={{ marginTop: 15 }}>
                                <TextInput
                                    style={styles.textinput3}
                                    placeholder="Full Name"
                                    onChangeText={(txt) => setfullname1(txt)}
                                />
                                <TextInput
                                    style={styles.textinput3}
                                    placeholder="Phone Number"
                                    onChangeText={(txt) => setphonenumber1(txt)}
                                />
                                <View style={{ width: 320, marginLeft: 21 }}>
                                    <Button onPress={showDatepicker} title="Ngày sinh" buttonStyle={{ alignContent: "center", borderRadius: 20, height: 40, width: 320, backgroundColor: colors.blue }} />
                                    {show && (
                                        <DatetimePicker
                                            testID="dateTimePicker"
                                            value={datetime}
                                            mode={mode}
                                            is24Hour={true}
                                            display="default"
                                            onChange={onChange}
                                        />
                                    )}

                                </View>
                                <TextInput
                                    style={[styles.textinput3, { marginTop: 17 }]}
                                    placeholder="Sex"
                                    onChangeText={(txt) => setsex1(txt)}
                                />
                                <TextInput
                                    style={styles.textinput3}
                                    placeholder="Address"
                                    onChangeText={(txt) => setaddress1(txt)}
                                />
                            </View>
                            <Button
                                title="Lưu thông tin"
                                buttonStyle={{ alignContent: "center", borderRadius: 20, height: 45, width: 250, backgroundColor: colors.blue, marginLeft: 8 }}
                                titleStyle={styles.buttonTitle}
                                onPress={update}
                            />
                        </View>
                    </View>
                </Modal>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/account_head.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>

                            <Text>Tên người dùng</Text>
                            <Text style={{ color: 'black', marginTop: 5 }}>{fullname}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/phone.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Số điện thoại</Text>
                            <Text style={{ color: 'black', marginTop: 5 }} >{phonenumber}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/calendar.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Ngày sinh</Text>
                            <Text style={{ color: 'black', marginTop: 5 }} >{date}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/sex.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Giới tính</Text>
                            <Text style={{ color: 'black', marginTop: 5 }} >{sex}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.address}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                    <Text style={{ color: 'black', marginLeft: 15, fontSize: 16, fontWeight: "bold" }}>Sổ địa chỉ</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Maps") }}>
                        <Text style={{ color: 'red', marginRight: 15, fontSize: 16, fontWeight: "bold" }}>Địa chỉ đã lưu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image
                        source={require('../global/image/location.png')}
                        style={{ height: 30, width: "10%", resizeMode: 'contain', marginLeft: 5, marginTop: 10 }}
                    />
                    <View style={{ width: "85%", marginLeft: 5 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>{address}</Text>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 15, color: 'blue' }}>Mặc định</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarView: {
        alignItems: 'center',
        marginTop: 20,
    },
    styleImgItem: {
        height: "65%",
        marginLeft: 10,
        resizeMode: "contain",
        marginTop: 10
    },
    viewItem: {
        backgroundColor: 'white',
        height: 48,
        width: '45%',
        borderRadius: 5,
        paddingHorizontal: 16,
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
        marginLeft: 10,
        flexDirection: "row"
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: 20,
        alignContent: 'center',
    },
    address: {
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        height: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textinput3: {
        width: 320,
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20
    },
})