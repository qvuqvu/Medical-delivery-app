import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import HomeHeader from '../components/HomeHeader';
import { Totaldate } from '../global/Data';
import HeaderProject from '../components/HeaderProduct';
import firestore, { firebase } from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth"
import ModalPoup from './ModalPoup';
import LottieView from "lottie-react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function ProductInfo({ navigation, route }) {
    const [visible, setVisible] = useState(false);
    const user = auth().currentUser;
    const [getcheck, setCheck] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const cost = Totaldate[route.params.id].gia.split(' ')
    const endLine = "\n"
    const [show, setShow] = useState(8)
    const handleOpen = () => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
    }
    const addCartToFireBase = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        const db = firebase.firestore();
        db.collection('cart' + user.uid)
            .add({
                items: Totaldate[route.params.id],
            })
            .then(() => {
                console.log('User added!');
                alert("added " + Totaldate[route.params.id].name + " success");
            });
    };
    useEffect(() => {
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (doc.data().items.id == Totaldate[route.params.id].id) {
                        setCheck(1)
                    }
                });
            });

    }, [])
    const check = () => {
        setCheck(0)
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    if (doc.data().items.id == Totaldate[route.params.id].id) {
                        setCheck(1)
                    }
                });
            });
        if (getcheck == 1) {
            setVisible(true)
        }
        else {
            addCartToFireBase();
            setVisible(true)
        }
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
    // const renderItem = ({ item }) => {
    //         return (
    //             <TouchableWithoutFeedback>
    //                 <View>
    //                     <View style={[styles.imageView, { marginTop: 15 }]}>
    //                         <TouchableOpacity onPress={() => navigation.navigate("ProductInfo", { id: item.id })}>
    //                             <ImageBackground
    //                                 style={styles.image}
    //                                 source={{ uri: item.image }}
    //                             >
    //                             </ImageBackground>
    //                             <View>
    //                                 <Text style={{ color: colors.grey1, textAlign: 'center' }}>{item.name}</Text>
    //                             </View>
    //                         </TouchableOpacity>
    //                         <View>
    //                             <Text style={[{ color: colors.grey1, textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{item.gia}</Text>
    //                         </View>
    //                         <View style={{ flexDirection: "row" }}>
    //                             <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 5, marginTop: 12, marginRight: 30, width: 50, height: 40, alignItems: "center", borderColor: colors.grey2 }}>
    //                                 <Icon3 name='shoppingcart' size={35} >
    //                                 </Icon3>
    //                             </TouchableOpacity>
    //                             <TouchableOpacity style={{ borderWidth: 1.25, borderRadius: 5, height: 40, width: 85, marginTop: 12, marginRight: 10, borderColor: colors.blue }} >
    //                                 <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 6, color: colors.blue }}>MUA NGAY</Text>
    //                             </TouchableOpacity>
    //                         </View>
    //                     </View>
    //                 </View>
    //             </TouchableWithoutFeedback>
    //         )
    //     }
    return (
        <View style={styles.container}>
            <HeaderProject navigation={navigation} title="Product" />
            <View style={{ flex: 1, marginTop: 10, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ width: 380, height: 450, alignSelf: 'center' }}>
                        <View style={{ borderWidth: 0.6, borderColor: 'blue', width: 360, height: 300, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: '90%', height: '90%', resizeMode: "cover" }}
                                source={{ uri: Totaldate[route.params.id].image }} />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <ModalPoup visible={visible}>
                                    <View style={{ alignItems: 'center' }}>
                                        <View style={styles.header}>
                                            <TouchableOpacity onPress={() => setVisible(false)}>
                                                <Icon1
                                                    name="close"
                                                    style={{ height: 30, width: 30 }}
                                                    size={25}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <LottieView
                                        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                                        source={require("../assets/animations/check-mark.json")}
                                        autoPlay
                                        speed={0.8}
                                        loop={false}

                                    />
                                    <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                                        Thêm sản phẩm thành công
                                    </Text>
                                </ModalPoup>
                            </View>
                        </View>
                        <View style={{ marginTop: 12, marginLeft: 10, alignItems: 'flex-start' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black' }}>{Totaldate[route.params.id].name}</Text>
                        </View>
                        <Text style={{ fontSize: 15, marginLeft: 10, marginTop: 10 }}>Đã bán 0</Text>
                        <Text style={{ color: 'red', fontSize: 20, marginTop: 10, marginLeft: 10, fontWeight: "bold" }}>{Totaldate[route.params.id].gia}</Text>
                    </View>
                    <View style={{ height: 150, backgroundColor: '#d2f4f9' }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <View style={{ borderWidth: 0.7, borderColor: colors.grey4, borderRadius: 45, marginTop: 20, marginLeft: 10, width: 50, height: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 35, resizeMode: "cover", marginBottom: 5 }}
                                    source={{ uri: 'https://cdn2.iconfinder.com/data/icons/medical-77/512/39-256.png' }} />
                            </View>
                            <View style={{ marginTop: 20, marginLeft: 15 }}>
                                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>{Totaldate[route.params.id].nhathuoc}</Text>
                                <Text style={{ color: 'red', fontSize: 15, marginTop: 5 }}>Xem đánh giá</Text>
                            </View>
                            <TouchableOpacity onPress={() => { navigation.push("StoreDetail") }}>
                                <View style={{ marginTop: 25, marginLeft: 43, borderWidth: 1, justifyContent: 'center', borderColor: 'red', width: 80, height: 25, alignItems: 'center' }}>
                                    <Text style={{ color: 'red' }}>Xem Shop</Text>
                                </View>
                            </TouchableOpacity>
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
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Thông tin sản phẩm</Text>
                            <TouchableOpacity onPress={handleOpen}>
                                <Text style={{ color: 'blue', fontSize: 16, fontWeight: 'bold', marginLeft: 150 }}>{isOpen == false ? "Xem thêm" : "Thu Gọn"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={isOpen == true ? styles.moreDetail_close : styles.moreDetail_open}>
                            <Text style={{ marginLeft: 10, color: 'black', fontSize: 15 }}>
                                Lyric: {endLine}
                                "Chào cơn mưa{endLine}
                                Làm sao cứ kéo ta quay lại{endLine}
                                Những rung động con tim{endLine}
                                Lần đầu hai ta gặp gỡ{endLine}
                                Chào hàng cây{endLine}
                                Làm sao cố níu tay nhau lại{endLine}
                                Để thấy nồng nàn{endLine}
                                Đang về trên đôi mắt em{endLine}
                                Chợt nhìn đôi bàn tay em run nắm lấy bờ vai, rất lâu{endLine}
                                Cuối thu với anh là ngày khiến hai hàng mi rối bời{endLine}
                                Vì ngày ấy gặp nhau không ai dám nói một câu, chào nhau{endLine}
                                Cứ đắm đuối{endLine}
                                Cứ thế hát bài hát chia xa{endLine}
                                Mùa thu rơi vào em, vào trong giấc mơ hôm qua{endLine}
                                Mùa thu ôm mình em, chạy xa vòng tay vội vã{endLine}
                                Lời em nói ngày xưa đâu đây{endLine}
                                Vẫn âm thầm chìm vào trong mây{endLine}
                                Đến bao giờ, dặn lòng anh không mong nhớ{endLine}
                                Mùa thu rơi vào em, vào trong chiếc hôn ngây thơ{endLine}
                                Mùa thu không cần anh, vì em giờ đây còn mãi hững hờ{endLine}
                                Ngày mai kia nếu có phút giây vô tình thấy nhau sẽ nói câu gì...{endLine}
                                Hay ta chỉ nhìn{endLine}
                                Lặng lẽ{endLine}
                                Đi qua"{endLine}
                            </Text>
                        </View>
                    </View>
                    {/* <View style={{ marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: 19, fontWeight: 'bold', marginLeft: 10 }}>Sản phẩm cùng nhà thuốc</Text>
                        <FlatList
                            data={filterData2}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            horizontal={false}
                            showsverticalScrollIndicator={false}
                            numColumns={2}
                        />
                    </View> */}
                </ScrollView>
                <View style={{ flexDirection: 'row', height: 60, justifyContent: 'space-around', alignItems: 'center', borderWidth: 0.2, borderTopLeftRadius: 10, borderTopRightRadius: 10, }}>
                    <TouchableOpacity
                        onPress={() => {
                            check();
                        }}>
                        <View style={styles.button_end}>
                            <Text style={{ color: 'red' }}>THÊM VÀO GIỎ HÀNG</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            selectItem(Totaldate[route.params.id],true)
                            navigation.navigate("MyOrder", { id: 1 })
                        }}>
                        <View style={styles.button_end1}>
                            <Text style={{ color: 'white' }}>MUA NGAY</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
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
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    fillterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        marginVertical: 10
    },
    clockView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },
    addressView: {
        flexDirection: "row",
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 3,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardTextSected: {
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,
    },
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center"
    },
    moreDetail_close:
    {
        height: "64%",
        marginTop: 5,
    },
    moreDetail_open:
    {
        height: 100,
        marginTop: 5
    },
    button_end: {
        borderWidth: 1,
        width: 170,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
    },
    button_end1: {
        borderWidth: 1,
        width: 170,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        backgroundColor: 'red'
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