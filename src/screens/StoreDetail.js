import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal, Dimensions, ImageBackground, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native'
import HeaderSimple from '../components/HeaderSimple'
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from 'react-native-vector-icons/AntDesign'
import { colors } from "../global/styles";
import { filterData2, nhathuochamy, Totaldate, nhathuoclongchau, nhathuocminhchau, nhathuocngoclong, nhathuoclenguyen, nhathuocgreenpharma, nhathuocthuytrang } from '../global/Data';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function StoreDetail({ navigation, route }) {
    const [textInputFossued, setTextInputFossued] = useState(false)
    const textInput = useRef(0)
    const [data, setData] = useState([])
    const [data1, setdata1] = useState([])
    const [search, setSearch] = useState("")
    const handleSearch = (text) => {
        if (text) {
            const newData = nhathuochamy.filter(item => {
                const itemData = item.name ?
                    item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
            setSearch(text);
        } else {
            setData([]);
            setSearch("");
        }
    }
    useEffect(() => {
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Hà My") {
            setdata1(nhathuochamy)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Long Châu") {
            setdata1(nhathuoclongchau)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Minh Châu") {
            setdata1(nhathuocminhchau)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Ngọc Long") {
            setdata1(nhathuocngoclong)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Lê Nguyên") {
            setdata1(nhathuoclenguyen)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Green Pharma") {
            setdata1(nhathuocgreenpharma)
        }
        if (Totaldate[route.params.id].nhathuoc == "Nhà thuốc Thùy Trang") {
            setdata1(nhathuocthuytrang)
        }
    })
    const renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss()
                    setTextInputFossued(true)
                    navigation.push("ProductInfo", { id: item.id })
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
                            <Text style={{ color: colors.grey1, textAlign: 'center' }}>{item.name}</Text>
                        </View>
                        <View>
                            <Text style={[{ color: colors.grey1, textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{item.gia}</Text>
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
            <View style={{ height: 220, backgroundColor: '#d2f4f9', marginLeft: 10 }}>
                <View style={{ flexDirection: 'row', borderWidth: 0.6, width: 330, marginTop: 10, height: 40, backgroundColor: 'white', alignSelf: 'center' }}>
                    <Icon
                        name="search"
                        size={20}
                        style={{ color: 'black', marginLeft: 10, marginTop: 8 }}
                    />
                    <TextInput
                        placeholder="Tìm kiếm "
                        style={{ marginLeft: 10, width: 260 }}
                        ref={textInput}
                        value={search}
                        onFocus={() => {
                            setTextInputFossued(true)
                        }}
                        onBlur={() => {
                            setTextInputFossued(false)
                        }}
                        onChangeText={(text) => handleSearch(text)}
                    />
                    <Icon1
                        name={textInputFossued ? "close" : null}
                        iconStyle={{ color: colors.grey3 }}
                        type="material"
                        style={{ fontSize: 20, marginTop: 7 }}
                        onPress={() => {
                            textInput.current.clear()
                            setData([])
                            setSearch("")
                        }}

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderWidth: 0.7, borderColor: colors.grey4, borderRadius: 45, marginTop: 20, marginLeft: 10, width: 70, height: 70, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50, resizeMode: "cover", marginBottom: 5 }}
                            source={{ uri: 'https://cdn2.iconfinder.com/data/icons/medical-77/512/39-256.png' }} />
                    </View>
                    <View style={{ marginTop: 25, marginLeft: 20 }}>
                        <Text style={{ color: 'black', fontSize: 19, fontWeight: 'bold' }}>{Totaldate[route.params.id].nhathuoc}</Text>
                        <Text style={{ marginTop: 5 }}></Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'baseline', marginTop: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Đánh Giá</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>4.9</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Sản Phẩm</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>13</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 16 }}>Khoảng Cách</Text>
                        <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold', marginTop: 7 }}>~13Km</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17, marginLeft: 10, marginTop: 10 }}>Sản phẩm của shop</Text>
                <FlatList
                    data={data1}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
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
        color: colors.grey3,
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
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center",
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
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
        color: colors.grey2,
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
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12

    },

    textView: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52,0.3)'
    },

})