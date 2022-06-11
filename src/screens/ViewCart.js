import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import Icon1 from 'react-native-vector-icons/AntDesign'
import ModalPoup from '../global/ModalPoup';
import LottieView from "lottie-react-native";
export default function ViewCart({ navigation }) {
    const [visible, setVisible] = useState(false);
    const [gettotal, settotal] = useState(1);
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const returnCost = (gia) => {
        let a = gia.split(" ");
        return a[0];
    }
    const total = items
        .map((item) => parseFloat(returnCost(item.gia)))
        .reduce((prev, curr) => prev + curr, 0);
    const check = () => {
        var j = 0
        for (var i = 0; i <= items.length - 1; i++) {
            if (items[0].nhathuoc == items[i].nhathuoc) {
                j = 1
            }
            else {
                j = 0
            }
        }
        if (j == 1) {
            return true
        }
        else {
            return false
        }
    }
    return (
        <View style={{ flexDirection: 'row', height: 60, justifyContent: "flex-end", borderTopWidth: 0.5, borderTopColor: "blue" }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tổng tiền</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>{total ? total + ".000 đ" : "0 đ"}</Text>
                </View>
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
                            style={{ height: 100, alignSelf: "center", marginBottom: 10 }}
                            source={require("../assets/animations/error.json")}
                            autoPlay
                            speed={0.8}
                            loop={false}

                        />
                        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                            {total == 0 ? "Không có sản phẩm nào trong giỏ hàng" : "Chúng tôi chỉ hỗ trợ đặt hàng theo từng nhà thuốc."}
                        </Text>
                    </ModalPoup>
                </View>
                <TouchableOpacity
                    style={{ width: 120, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        if (check()) {
                            if (total != 0) {
                                navigation.navigate("MyOrder", { id: 2 })
                            }
                        }
                        else {
                            setVisible(true)
                        }
                    }}
                >
                    <View>
                        <Text style={{ color: 'white', fontSize: 16 }}>Mua Hàng</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
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
    }
})