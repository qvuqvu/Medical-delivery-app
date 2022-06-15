import React, { useState, useEffect, useTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, TextInput, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from "react-native-vector-icons/FontAwesome"
import Icon2 from "react-native-vector-icons/EvilIcons"
import { Avatar, Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import DatetimePicker from "@react-native-community/datetimepicker"
import HomeHeader from '../components/HomeHeader';
import ImagePicker from 'react-native-image-crop-picker';
import { firebase } from '@react-native-firebase/firestore';
import { discount } from "../global/Data"
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
export default function MyAccountScreen({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const { t, i18n } = useTranslation();
    const a = useSelector((state) => state.cartReducer.selectedItems.language)
    const [currentLanguage, setLanguage] = useState("");
    console.log(a)
    const [check, setcheck] = useState(0);
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        console.log(currentLanguage)
    }, [a]);

    const { colors } = useTheme();
    const [fullname, setfullname] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [address, setaddress] = useState("");
    const [date, setdate] = useState("")
    const [sex, setsex] = useState("")
    const [fullname1, setfullname1] = useState("")
    const [phonenumber1, setphonenumber1] = useState("")
    const [address1, setaddress1] = useState("");
    const [sex1, setsex1] = useState("")
    const [date1, setdate1] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    const [datetime, setdatetime] = useState(new Date());
    const [mode, setmode] = useState('date');
    const [show, setShow] = useState(false);
    const user = auth().currentUser;
    const [getorder, setorder] = useState(0);
    const [getcomplete, setcomplete] = useState(0);
    const [getnum, setnum] = useState(0);
    var count = 0;
    const showMode = (currentMode) => {
        setShow(true);
        setmode(currentMode);
    };

    const showDatepicker = () => {
        showMode("date");
    };

    const createuser = () => {
        setModalVisible(true);
        count = 0;
        setnum(Math.random());
    }
    const formattedDate = datetime.getDate() + "/" + (datetime.getMonth() + 1) + "/" + datetime.getFullYear()
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setdatetime(currentDate);
        setdate1(currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear());
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
        if (count == 0) {
            count = 1;
            setfullname1(fullname)
            setphonenumber1(phonenumber)
            setdate1(date)
            setsex1(sex)
            setaddress1(address)
        }
    }, [getnum]);
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
    async function getCurrentImage() {
        ImagePicker.openPicker({
            cropping: true
        }).then(image => {
            firebase.auth().currentUser.updateProfile({ photoURL: image.path });
            setTimeout(() => {
                setnum(Math.random())
            }, 1500);
            setnum(Math.random())
        });
        setnum(Math.random())
    }
    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} title={t("Tài khoản")} />
            <ScrollView>
                <View style={{ backgroundColor: colors.backgroundColor }}>
                    <View style={styles.avatarView}>
                        <Avatar
                            size={100}
                            rounded
                            avatarStyle={styles.avatar}
                            source={{ uri: user.photoURL ? user.photoURL : "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                        />
                        <View style={{ marginLeft: 90, marginTop: -20 }}>
                            <Icon2
                                size={40}
                                name='camera'
                                onPress={() => {
                                    getCurrentImage()
                                }}
                                style={{ color: colors.text }}
                            />
                        </View>
                        <Text style={{ color: colors.text, fontSize: 20 }}>
                            {user.displayName ? user.displayName : fullname}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('MyOrderComplete')
                            }}
                            style={styles.viewItem}>
                            <Image
                                source={require('../global/image/doc.png')}
                                style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                                <Text style={{ color: colors.text }}>{getorder}</Text>
                                <Text style={{ color: colors.text }}>{t('Đơn đang xử lý')}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.viewItem}
                            onPress={() => navigation.navigate('MyLastOrder')}
                        >
                            <Image
                                source={require('../global/image/history_cart.png')}
                                style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                                <Text style={{ color: colors.text }}>{getcomplete}</Text>
                                <Text style={{ color: colors.text }}>{t('Đơn đã mua')}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ backgroundColor: colors.backgroundColor, width: "100%", height: '45%', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10, marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ color: colors.text, fontSize: 17, fontWeight: 'bold', }}>{t('Thông tin cá nhân')}</Text>
                        <TouchableOpacity onPress={createuser}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'red' }}>{t("Sửa")}</Text>
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
                            <View style={
                                {
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
                                    elevation: 5,
                                    backgroundColor: colors.background
                                }
                            }>
                                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} >
                                    <Icon1
                                        size={20}
                                        name="close"
                                        style={{ marginLeft: 265, marginTop: -20, color: colors.text }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.text }}>{t('Cập nhật thông tin')}</Text>
                                <View style={{ marginTop: 15, }}>
                                    <TextInput
                                        style={{
                                            width: 320,
                                            borderWidth: 1,
                                            borderColor: "#86939e",
                                            marginHorizontal: 20,
                                            borderRadius: 12,
                                            marginBottom: 20,
                                            paddingHorizontal: 10,
                                            color: colors.text,
                                        }}
                                        placeholder="Full Name"
                                        value={fullname1}
                                        onChangeText={(txt) => setfullname1(txt)}
                                    />
                                    <TextInput
                                        style={{
                                            width: 320,
                                            borderWidth: 1,
                                            borderColor: "#86939e",
                                            marginHorizontal: 20,
                                            borderRadius: 12,
                                            marginBottom: 20,
                                            paddingHorizontal: 10,
                                            color: colors.text,
                                        }}
                                        placeholder="Phone Number"
                                        value={phonenumber1}
                                        onChangeText={(txt) => setphonenumber1(txt)}
                                    />
                                    <View style={{ width: 320, flexDirection: 'row' }}>
                                        <TextInput
                                            style={{
                                                width: 150,
                                                borderWidth: 1,
                                                borderColor: "#86939e",
                                                marginHorizontal: 20,
                                                borderRadius: 12,
                                                marginBottom: 2,
                                                paddingHorizontal: 10,
                                                color: colors.text,
                                            }}
                                            placeholder="Date of Birth"
                                            value={date1}
                                            onChangeText={(txt) => setphonenumber1(txt)}
                                        />
                                        <Icon
                                            size={30}
                                            name="calendar"
                                            style={{ marginLeft: 10, marginTop: 10, color: colors.text }}
                                            onPress={showDatepicker}
                                        />
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
                                    <View style={{
                                        height: 50,
                                        width: 150,
                                        borderWidth: 1,
                                        borderColor: "#86939e",
                                        marginHorizontal: 20,
                                        borderRadius: 12,
                                        marginBottom: 20,
                                        marginTop: 20,
                                        paddingHorizontal: 5,
                                        justifyContent: 'center',
                                    }}>
                                        <Picker
                                            selectedValue={selectedValue}
                                            style={{
                                                color: colors.text,
                                            }}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedValue(itemValue);
                                                setsex1(itemValue)
                                            }}
                                        >
                                            <Picker.Item label="Nam" value="Nam" />
                                            <Picker.Item label="Nữ" value="Nữ" />
                                        </Picker>
                                    </View>
                                    <TextInput
                                        style={{
                                            width: 320,
                                            borderWidth: 1,
                                            borderColor: "#86939e",
                                            marginHorizontal: 20,
                                            borderRadius: 12,
                                            marginBottom: 20,
                                            paddingHorizontal: 10,
                                            color: colors.text,
                                        }}
                                        placeholder="Address"
                                        value={address1}
                                        onChangeText={(txt) => setaddress1(txt)}
                                    />
                                </View>
                                <Button
                                    title={t("Lưu thông tin")}
                                    buttonStyle={{ alignContent: "center", borderRadius: 20, height: 45, width: 250, backgroundColor: 'blue', marginLeft: 8 }}
                                    titleStyle={styles.buttonTitle}
                                    onPress={update}
                                />
                            </View>
                        </View>
                    </Modal>
                    <View>
                        <View style={styles.viewInfo}>
                            <Image
                                source={{ uri: "https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/38-256.png" }}
                                style={{ height: 30, width: 30, marginLeft: 20, marginTop: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>

                                <Text style={{ color: colors.text }}>{t('Tên người dùng')}</Text>
                                <Text style={{ color: colors.text, marginTop: 5 }}>{fullname}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewInfo}>
                            <Image
                                source={{ uri: "https://cdn3.iconfinder.com/data/icons/blue-line-interface/64/contact-256.png" }}
                                style={{ height: 30, width: 30, marginLeft: 20, marginTop: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                                <Text style={{ color: colors.text }}>{t('Số điện thoại')}</Text>
                                <Text style={{ color: colors.text, marginTop: 5 }} >{phonenumber}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewInfo}>
                            <Image
                                source={{ uri: "https://cdn4.iconfinder.com/data/icons/aircraft-blue-line/64/165_schedule-calendar-date-256.png" }}
                                style={{ height: 30, width: 30, marginLeft: 20, marginTop: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                                <Text style={{ color: colors.text }}>{t('Ngày sinh')}</Text>
                                <Text style={{ color: colors.text, marginTop: 5 }} >{date}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewInfo}>
                            <Image
                                source={{ uri: "https://cdn4.iconfinder.com/data/icons/lgbt-6/64/bigender-sex-gender-shapes-256.png" }}
                                style={{ height: 30, width: 30, marginLeft: 20, marginTop: 5 }}
                            />
                            <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                                <Text style={{ color: colors.text }}>{t('Giới tính')}</Text>
                                <Text style={{ color: colors.text, marginTop: 5 }} >{sex}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.address}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                        <Text style={{ color: colors.text, marginLeft: 15, fontSize: 16, fontWeight: "bold" }}>{t('Sổ địa chỉ')}</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("Maps") }}>
                            <Text style={{ color: 'red', marginRight: 15, fontSize: 16, fontWeight: "bold" }}>{t('Địa chỉ đã lưu')}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Image
                            source={{ uri: "https://cdn4.iconfinder.com/data/icons/universal-7/614/17_-_Location-256.png" }}
                            style={{ height: 30, width: 30, marginLeft: 20, marginTop: 5 }}
                        />
                        <View style={{ width: "85%", marginLeft: 5 }}>
                            <Text style={{ fontSize: 16, color: colors.text }}>{address}</Text>
                            <TouchableOpacity style={{ marginTop: 5 }} onPress={() => { 
                                firestore()
                                .collection('Data')
                                .doc('Discount')
                                .set({
                                    Discount:discount,
                                  })
                                  .then(() => {
                                    console.log('User added!');
                                  });
                             }}>
                                <Text style={{ fontSize: 15, color: 'blue' }}>{t('Mặc định')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        marginTop: 10,
    },
    viewItem: {
        backgroundColor: colors.backgroundColor,
        height: 50,
        width: '48%',
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowRadius: 2,
        flexDirection: "row",
        borderWidth: 1,
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: 20,
        alignContent: 'center',
    },
    address: {
        backgroundColor: colors.backgroundColor,
        marginTop: 10,
        width: '100%',
        height: 170,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
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
        elevation: 5,
    },
    textinput3: {
        width: 320,
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
})