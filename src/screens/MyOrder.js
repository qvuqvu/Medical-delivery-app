import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon4 from 'react-native-vector-icons/AntDesign'
import { colors, paremeter } from '../global/styles';
import HeaderOrder from '../components/HeaderOrder';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { test } from '../global/Data';
import { discount } from '../global/Data';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyOrder({ navigation, route }) {
    const [checked, setChecked] = useState("first");
    // console.log(route.params.items)
    const [num, setNum] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [name_dis, setName_dis] = useState("");
    const [num_dis, setNum_dis] = useState(0);
    const [choise_dis, setChoise_dis] = useState(-1);
    const count = route.params.items.length;
    const costShip = 50.000;
    var cost = 0;

    const handlePlus = () => {
        setNum(num + 1);
    }
    const handleMinus = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    for (var i = 0; i <= route.params.items.length - 1; i++) {
        cost += parseInt(route.params.items[i].gia);
    }
    var total = cost + costShip - num_dis * costShip;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderOrder navigation={navigation} />
            <ScrollView>
                <View style={{ marginTop: 15, marginLeft: 12, marginRight: 12 }}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginRight: 150 }}>Thông tin giao hàng</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log(name_dis)
                                    console.log(num_dis)
                                }}
                            >
                                <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: 'red', fontWeight: 'bold' }}>Thay đổi</Text>
                                </View>
                            </TouchableOpacity>
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
                        <FlatList
                            data={route.params.items}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <View style={{ alignSelf: 'center', width: 380 }}>
                                    <View style={{ backgroundColor: '#ebf3f4', height: 160, justifyContent: 'center', marginTop: 10 }}>
                                        <View style={{ flexDirection: 'row', marginLeft: 8 }}>
                                            <Image
                                                style={{ width: 22, height: 22, }}
                                                source={require('../global/image/store.png')} />
                                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }}>{item.nhathuoc}</Text>
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

                                                }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Image
                                                    style={{ width: 80, height: 80, resizeMode: "cover" }}
                                                    source={{ uri: item.image }} />
                                            </View>
                                            <View style={{ marginLeft: 10 }}>
                                                <View style={{ width: 240, height: 20 }}>
                                                    <Text style={{ color: 'black', fontSize: 16 }}>{item.name}</Text>
                                                </View>
                                                <Text style={{ color: 'red', fontSize: 15, fontWeight: 'bold', marginTop: 10 }}>{item.gia}</Text>
                                                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                                                    <TouchableOpacity
                                                        onPress={() => { handleMinus() }}
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
                                                        onPress={() => { handlePlus() }}
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
                            )}
                        />
                    </View>
                    <View style={{ marginTop: 20, marginBottom: 10, height: '15%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
                            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>{count} Sản phẩm</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{cost}.000 đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10, marginTop: 10 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Phí vận chuyển</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{costShip}.000 đ</Text>
                        </View>
                        <View style={num_dis == 0 ? styles.hideDis : styles.showDis}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{name_dis}</Text>
                            <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>-{num_dis * costShip}.000 đ</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Khuyễn mãi:  {discount.length}</Text>
                            <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                                <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                    <Text style={{ color: 'red', fontWeight: 'bold' }}>Chọn</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 30, marginBottom: 10 }}>
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
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 10, flexDirection: 'row', width: 350 }}>
                            <Image
                                source={require('../global/image/doc_rule.png')}
                                style={{ height: "100%", width: "8%", resizeMode: "contain", marginRight: 10 }}
                            />
                            <Text style={{ color: 'black', fontSize: 15 }}>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo {<Text style={{ color: 'blue' }}>Điều khoản Medili</Text>}</Text>
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
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Chọn mã giảm giá</Text>
                            <Text style={{ color: 'black', fontSize: 14 }}> Áp dụng tối đa: 1</Text>
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
                                                        <Text style={{ color: 'red', marginLeft: 5 }}>Hạn dùng: {item.endDate}</Text>
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
                                                <Text style={{ color: 'red', fontWeight: 'bold' }}>{choise_dis == item.id ? "Bỏ chọn" : "Sử dụng"}</Text>
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
                                <Text style={{ color: 'white', fontSize: 17 }}>Xong</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            <View style={{ height: 50, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <View style={{ marginRight: 15 }}>
                    <Text style={{ color: 'black', fontSize: 15 }}>Tổng thanh toán</Text>
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>{total}.000 đ</Text>
                </View>
                <View style={{ backgroundColor: 'red', width: 130, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Đặt hàng</Text>
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