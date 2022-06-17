import React, { useState, useContext, useEffect, useRef } from 'react'
import auth from '@react-native-firebase/auth';
import { colors, paremeter } from '../../global/styles';
import { Avatar, Button } from 'react-native-elements'
import { View, Text, Linking, Pressable, Alert, Modal, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, TextInput } from 'react-native'
import { SignInContext } from '../contexts/authContext';
import Icon1 from "react-native-vector-icons/FontAwesome"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import HomeAdminHeader from '../components/HomeAdminHeader';
import { FlatList } from 'react-native-gesture-handler';
import firestore from "@react-native-firebase/firestore"
GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});
const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeAdmin({ navigation }) {
    const [getTotalData, setTotalData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false)
    const [gia1, setgia1] = useState("")
    const [image1, setimage1] = useState("")
    const [mota1, setmota1] = useState("")
    const [name1, setname1] = useState("")
    const [nhathuoc1, setnhathuoc1] = useState("")
    const [itemthuoc, setitemthuoc] = useState("")
    const [render, setrender] = useState(0)
    useEffect(() => {
        firestore()
            .collection('Data')
            .doc('TotalData')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setTotalData(data.TotalData)
            });
    }, [render])
    const showmodal = () => {
        setgia1("")
        setname1("")
        setimage1("")
        setmota1("")
        setnhathuoc1("")
        setModalVisible(!modalVisible)
    }
    const add = () => {
        firestore()
            .collection('Data')
            .doc('TotalData')
            .get()
            .then(documentSnapshot => {
                updatethuoc([...documentSnapshot.data().TotalData, { "SL": 1, "gia": gia1, "id": Math.random(), "image": image1, "mota": mota1, "name": name1, "nhathuoc": nhathuoc1 },])
            });
        setModalVisible(!modalVisible)
        setrender(Math.random())
    }
    const showmodal1 = (item) => {
        setgia1(item.gia)
        setimage1(item.image)
        setmota1(item.mota)
        setname1(item.name)
        setnhathuoc1(item.nhathuoc)
        setitemthuoc(item)
        setModalVisible1(!modalVisible1)
    }

    const update = (item) => {
        firestore()
            .collection('Data')
            .doc('TotalData')
            .get()
            .then(documentSnapshot => {
                documentSnapshot.data().TotalData.map((items) => {
                    if (items.id == item.id) {
                        items.gia = gia1,
                            items.image = image1,
                            items.mota = mota1,
                            items.name = name1,
                            items.nhathuoc = nhathuoc1
                        updatethuoc(documentSnapshot.data().TotalData)
                    }
                });
            });
        setModalVisible1(!modalVisible1)
        setitemthuoc("")
        setgia1("")
        setname1("")
        setimage1("")
        setmota1("")
        setnhathuoc1("")
        setrender(Math.random())
    }
    const updatethuoc = (add) => {
        firestore()
            .collection('Data')
            .doc('TotalData')
            .update({
                TotalData: add
            })
            .then(() => {
                console.log('Thuoc updated!');
                setrender(Math.random())
            });
    }
    const delete1 = (item) => {
        firestore()
            .collection('Data')
            .doc('TotalData')
            .get()
            .then(documentSnapshot => {
                updatethuoc(documentSnapshot.data().TotalData.filter(items => items.id != item.id))
            });
        setModalVisible1(!modalVisible1)
        setitemthuoc("")
    }
    return (
        <View>
            <HomeAdminHeader navigation={navigation} title="Home" />
            <FlatList
                style={{ marginLeft: 5, marginBottom: 10, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                data={getTotalData}
                keyExtractor={item => { return item.id }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View >
                        <TouchableOpacity onPress={() => { showmodal1(item) }}>
                            <View style={[styles.cardView, { backgroundColor: colors.background }]}>
                                <View style={[styles.imageView, { marginTop: 20 }, { width: SCREEN_WIDTH * 0.4 }]}>
                                    <ImageBackground
                                        style={styles.image}
                                        source={{ uri: item.image }}
                                    >
                                    </ImageBackground>
                                    <View>
                                        <Text style={{ color: colors.text, marginTop: 10, marginRight: 10, textAlign: 'center' }}>{item.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={[{ color: colors.accent, textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{item.gia}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity >
                    </View>)}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                style={{ backgroundColor: colors.background }}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}
            >
                <View style={{ marginTop: 100, borderWidth: 1, backgroundColor: "white", width: 380, alignSelf: "center", borderRadius: 30, height: 535 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: colors.blue, alignSelf: "center", marginTop: 10 }}>Cập nhật thuốc</Text>
                    <TouchableOpacity onPress={() => { setModalVisible1(!modalVisible1) }} >
                        <Icon1
                            size={20}
                            name="close"
                            style={{ marginTop: -25, color: colors.black, marginLeft: 330 }}
                        />
                    </TouchableOpacity>
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
                        placeholder="Tên thuốc"
                        value={name1}
                        onChangeText={(txt) => setname1(txt)}
                    />
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
                        placeholder="Giá"
                        value={gia1}
                        onChangeText={(txt) => setgia1(txt)}
                    />
                    <TextInput
                        style={{
                            marginTop: 20,
                            width: 320,
                            borderWidth: 1,
                            borderColor: "#86939e",
                            marginHorizontal: 20,
                            borderRadius: 12,
                            marginBottom: 20,
                            paddingHorizontal: 10,
                            color: colors.text,
                        }}
                        placeholder="Nhà thuốc"
                        value={nhathuoc1}
                        onChangeText={(txt) => setnhathuoc1(txt)}
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
                        placeholder="Mô tả"
                        value={mota1}
                        onChangeText={(txt) => setmota1(txt)}
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
                        placeholder="Hình ảnh"
                        value={image1}
                        onChangeText={(txt) => setimage1(txt)}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            onPress={() => { delete1(itemthuoc) }}
                            title="Xóa"
                            buttonStyle={{ backgroundColor: colors.blue, borderRadius: 30, width: 100, marginLeft: 140 }}
                        />
                        <Button
                            title="Cập nhật"
                            buttonStyle={{ backgroundColor: colors.blue, borderRadius: 30, width: 100, alignSelf: "center", marginLeft: 15 }}
                            onPress={() => { update(itemthuoc) }}
                        />
                    </View>

                </View>
            </Modal>
            <TouchableOpacity style={styles.fab} onPress={() => { showmodal() }}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                style={{ backgroundColor: colors.background }}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ marginTop: 100, borderWidth: 1, backgroundColor: "white", width: 380, alignSelf: "center", borderRadius: 30, height: 535 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: colors.blue, alignSelf: "center", marginTop: 10 }}>Cập nhật thuốc</Text>
                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }} >
                        <Icon1
                            size={20}
                            name="close"
                            style={{ marginTop: -25, color: colors.black, marginLeft: 330 }}
                        />
                    </TouchableOpacity>
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
                        placeholder="Tên thuốc"
                        value={name1}
                        onChangeText={(txt) => setname1(txt)}
                    />
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
                        placeholder="Giá"
                        value={gia1}
                        onChangeText={(txt) => setgia1(txt)}
                    />
                    <TextInput
                        style={{
                            marginTop: 20,
                            width: 320,
                            borderWidth: 1,
                            borderColor: "#86939e",
                            marginHorizontal: 20,
                            borderRadius: 12,
                            marginBottom: 20,
                            paddingHorizontal: 10,
                            color: colors.text,
                        }}
                        placeholder="Nhà thuốc"
                        value={nhathuoc1}
                        onChangeText={(txt) => setnhathuoc1(txt)}
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
                        placeholder="Mô tả"
                        value={mota1}
                        onChangeText={(txt) => setmota1(txt)}
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
                        placeholder="Hình ảnh"
                        value={image1}
                        onChangeText={(txt) => setimage1(txt)}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            title="Thêm"
                            buttonStyle={{ backgroundColor: colors.blue, borderRadius: 30, width: 100, alignSelf: "center", marginLeft: 15 }}
                            onPress={() => { add() }}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    fab: {
        borderWidth: 1,
        borderColor: "#03A9F4",
        position: "absolute",
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 8,
    },
    fabIcon: {
        fontSize: 40,
        color: '#03A9F4'
    },
    cardView: {
        padding: 5,
        marginBottom: 10,
        marginHorizontal: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: colors.buttons,
        borderWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },

    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.3,
        height: SCREEN_WIDTH * 0.7,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    image: {
        height: SCREEN_WIDTH * 0.35,
        width: SCREEN_WIDTH * 0.35,
        borderRadius: 10,
        marginRight: 15
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    ProductName: {
        fontSize: 17,
        fontWeight: 'semibold',
        color: colors.grey1,
        marginTop: 20,
        marginLeft: 10
    },

    Price: {
        flex: 4, flexDirection: 'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        // borderRightWidth: 1,

    },
    UnitCurrency: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.price
    },

    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },

    average: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    numberOfReview: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    },
    modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        height: 20,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})