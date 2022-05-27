import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HeaderSimple from '../components/HeaderSimple';
import { discount } from '../global/Data';

export default function DiscountScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderSimple title="Mã giảm giá" navigation={navigation} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 12, marginLeft: 12, marginTop: 20 }}>
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
                                style={{ height: 55, width: 55, resizeMode: "contain", marginLeft: 15 }}
                            />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={require('../global/image/time.png')}
                                            style={{ height: 20, width: 20, resizeMode: "contain" }} />
                                        <Text style={{ color: 'red', marginLeft: 5 }}>Hạn dùng: {item.endDate}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => { navigation.navigate("MyOrder", { name: item.name, discount1: item.discount }) }}>
                                        <Text style={{ color: 'red', marginLeft: 50, fontWeight: 'bold' }}>Sử dụng</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                )}
            />
        </View>
    )
}