import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { set } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
export default function ViewCart({ navigation }) {
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
        <View style={{ flexDirection: 'row', height: 60, justifyContent: "flex-end" }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ marginRight: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>Tổng tiền</Text>
                    <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 17 }}>{total ? total + ".000 đ" : "0 đ"}</Text>
                </View>
                <TouchableOpacity
                    style={{ width: 120, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        if (check()) {
                            navigation.navigate("MyOrder", { id: 2 })
                        }
                        else {
                            alert('Vui long chon cung nha thuoc')
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