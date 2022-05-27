import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon4 from 'react-native-vector-icons/AntDesign'
import { colors, paremeter } from '../global/styles';
import HeaderOrder from '../components/HeaderOrder';
import { TextInput } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { test } from '../global/Data';
import { discount } from '../global/Data';

export default function MyOrder({ navigation, route }) {
    const [checked, setChecked] = useState(false);
    console.log(route.params.items)
    return (
        <View style={{ flex: 1 }}>
            <HeaderOrder navigation={navigation} />
            <View style={{ marginTop: 15, marginLeft: 12, marginRight: 12 }}>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginRight: 150 }}>Thông tin giao hàng</Text>
                        <TouchableOpacity>
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
                    {/* <FlatList data={item}
                        renderItem={({ item, index }) => <ListItem item={item} />}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                    /> */}
                </View>
                <View style={{ marginTop: 10, marginBottom: 10, height: '15%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10 }}>
                        <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>0 Sản phẩm</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>0 đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginRight: 10, marginTop: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Phí vận chuyển</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>0 đ</Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 10, marginTop: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 16 }}>{discount1}</Text>
                    </View> */}
                </View>
                <View style={{ height: 70, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ color: 'black', fontSize: 15 }}>Khuyễn mãi: {discount.length}</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate("ChoiceVoucher") }}>
                            <View style={{ borderWidth: 1, marginRight: 10, width: 75, height: 25, borderColor: 'red', alignItems: 'center', borderRadius: 5, justifyContent: 'center' }}>
                                <Text style={{ color: 'red', fontWeight: 'bold' }}>Chọn</Text>
                            </View>
                        </TouchableOpacity>
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
                </View>
            </View>
        </View>
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