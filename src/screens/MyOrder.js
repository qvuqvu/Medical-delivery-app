import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
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

export default function MyOrder({ navigation, route }) {
    const [checked, setChecked] = useState(false);
    console.log(route.params.items)
    const [num, setNum] = useState(1);
    
    const renderItem = ({ item }) => (
        <ScrollView>
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
                                    <Text style={{ color: 'black' }}>1</Text>
                                </View>
                                <TouchableOpacity

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
        </ScrollView>
    );
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
                <View style={{height:'40%'}}>
                    <FlatList
                        data={route.params.items}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
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