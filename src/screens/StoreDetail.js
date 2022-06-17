import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, Dimensions, ImageBackground, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native'
import HeaderSimple from '../components/HeaderSimple'
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from 'react-native-vector-icons/AntDesign'
import { useTheme } from "react-native-paper";
import ProductCard from '../components/ProductCard';
import firestore from "@react-native-firebase/firestore"
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function StoreDetail({ navigation, route }) {
    const { colors } = useTheme();
    const [textInputFossued, setTextInputFossued] = useState(false)
    const textInput = useRef(0)
    const [data, setData] = useState([])
    const [data1, setdata1] = useState([])
    const [search, setSearch] = useState("")
    let a = 0;
    const [getnhathuocthuytrang, setnhathuocthuytrang] = useState("")
    const [getnhathuocgreenpharma, setnhathuocgreenpharma] = useState("")
    const [getnhathuoclenguyen, setnhathuoclenguyen] = useState("")
    const [getnhathuocngoclong, setnhathuocngoclong] = useState("")
    const [getnhathuocminhchau, setnhathuocminhchau] = useState("")
    const [getnhathuoclongchau, setnhathuoclongchau] = useState("")
    const [getnhathuochamy, setnhathuochamy] = useState("")

    const handleSearch = (text) => {
        if (text) {
            const newData = data.filter(item => {
                const itemData = item.name ?
                    item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setdata1(newData);
            setSearch(text);
        }
        else {
            setSearch("");
        }
    }
    useEffect(() => {
        firestore()
            .collection('Data')
            .doc('nhathuocthuytrang')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuocthuytrang(data.nhathuocthuytrang)
            });
        firestore()
            .collection('Data')
            .doc('nhathuocgreenpharma')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuocgreenpharma(data.nhathuocgreenpharma)
            });
        firestore()
            .collection('Data')
            .doc('nhathuoclenguyen')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuoclenguyen(data.nhathuoclenguyen)
            });
        firestore()
            .collection('Data')
            .doc('nhathuocngoclong')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuocngoclong(data.nhathuocngoclong)
            });
        firestore()
            .collection('Data')
            .doc('nhathuocminhchau')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuocminhchau(data.nhathuocminhchau)
            });
        firestore()
            .collection('Data')
            .doc('nhathuoclongchau')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuoclongchau(data.nhathuoclongchau)
            });
        firestore()
            .collection('Data')
            .doc('nhathuochamy')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data();
                setnhathuochamy(data.nhathuochamy)
            });
    }, [])
    useEffect(() => {
        if (route.params.item.nhathuoc == "Nhà thuốc Hà My") {
            setdata1(getnhathuochamy)
            setData(getnhathuochamy)
        }
        if (route.params.item.nhathuoc == "Nhà thuốc Long Châu") {
            setdata1(getnhathuoclongchau)
            setData(getnhathuoclongchau)

        }
        if (route.params.item.nhathuoc == "Nhà thuốc Minh Châu") {
            setdata1(getnhathuocminhchau)
            setData(getnhathuocminhchau)

        }
        if (route.params.item.nhathuoc == "Nhà thuốc Ngọc Long") {
            setdata1(getnhathuocngoclong)
            setData(getnhathuocngoclong)

        }
        if (route.params.item.nhathuoc == "Nhà thuốc Lê Nguyên") {
            setdata1(getnhathuoclenguyen)
            setData(getnhathuoclenguyen)

        }
        if (route.params.item.nhathuoc == "Nhà thuốc Green Pharma") {
            setdata1(getnhathuocgreenpharma)
            setData(getnhathuocgreenpharma)

        }
        if (route.params.item.nhathuoc == "Nhà thuốc Thùy Trang") {
            setdata1(getnhathuocthuytrang)
            setData(getnhathuocthuytrang)
        }
    })

    const renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss()
                    setTextInputFossued(true)
                    navigation.push("ProductInfo", { item: item })
                }}
            >
                <View>
                    <View style={[styles.imageView, { marginTop: 15 }]}>
                        <ImageBackground
                            style={styles.image}
                            source={{ uri: item.image }}
                        >
                        </ImageBackground>
                        <View>
                            <Text style={{ color: colors.text, textAlign: 'center', marginTop: 10 }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={[{ color: 'red', textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{item.gia}</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 5, marginTop: 12, marginRight: 30, width: 50, height: 40, alignItems: "center", borderColor: colors.grey2 }}>
                                <Icon1 name='shoppingcart' size={35} >
                                </Icon1>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1.25, borderRadius: 5, height: 40, width: 85, marginTop: 12, marginRight: 10, borderColor: colors.blue }} >
                                <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 6, color: colors.blue }}>MUA NGAY</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderSimple title="Nhà Thuốc" navigation={navigation} />
            <View style={{ height: 220, backgroundColor: colors.boxes }}>
                <View style={{ flexDirection: 'row', borderWidth: 0.6, width: 330, marginTop: 10, height: 40, backgroundColor: colors.background, alignSelf: 'center' }}>
                    <Icon
                        name="search"
                        size={20}
                        style={{ color: colors.text, marginLeft: 10, marginTop: 8 }}
                    />
                    <TextInput
                        placeholder="Tìm kiếm "
                        placeholderTextColor={colors.text}
                        style={{ marginLeft: 10, width: 260, color: colors.text }}
                        ref={textInput}
                        value={search}
                        onFocus={() => {
                            setTextInputFossued(true)
                        }}
                        onChangeText={(text) => handleSearch(text)}
                    />
                    <Icon1
                        name={textInputFossued ? "close" : null}
                        iconStyle={{ color: colors.text }}
                        type="material"
                        style={{ fontSize: 20, marginTop: 7, color: colors.text }}
                        onPress={() => {
                            textInput.current.clear()
                            setData([])
                            setSearch("")
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderWidth: 0.7, borderColor: colors.text, borderRadius: 45, marginTop: 20, marginLeft: 10, width: 70, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50, resizeMode: "cover", marginBottom: 5 }}
                            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/medical-77/512/39-256.png' }} />
                    </View>
                    <View style={{ marginTop: 35, alignSelf: 'center', marginLeft: 40 }}>
                        <Text style={{ color: colors.text, fontSize: 19, fontWeight: 'bold' }}>{route.params.item.nhathuoc}</Text>
                        <Text style={{ marginTop: 5 }}></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline', marginTop: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: colors.text }}>Đánh Giá</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>4.9</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: colors.text }}>Sản Phẩm</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>13</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: colors.text }}>Khoảng Cách</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>~{parseInt(route.params.kc)}Km</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: colors.text, fontWeight: 'bold', fontSize: 17, marginBottom: 20, marginLeft: 10, marginTop: 20 }}>Sản phẩm của shop</Text>
                <FlatList
                    data={data1}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View >
                            <ProductCard
                                navigation={navigation}
                                screenWidth={SCREEN_WIDTH * 0.40}
                                item={item}
                            />
                        </View>)}
                    horizontal={false}
                    showsverticalScrollIndicator={true}
                    numColumns={2}
                    onScroll={Keyboard.dismiss}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: 375,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        marginLeft: 10
    },

    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
    },
    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.7,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035
    },

    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10,
    },

    listHeader: {
        fontSize: 16,
        paddingBottom: 10,
        marginLeft: 12

    },

    textView: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52,0.3)'
    },

})