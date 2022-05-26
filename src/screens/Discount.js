import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HeaderSimple from '../components/HeaderSimple';
import { discount } from '../global/Data';


const renderItem = ({ item }) => {
    return (
        <ScrollView style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', width: "94%", backgroundColor: 'white', height: 80, alignSelf: 'center', alignItems: 'center' }}>
                <Image
                    source={item.image}
                    style={{ height: 55, width: 55, resizeMode: "contain", marginLeft: 15 }}
                />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                        <Image
                            source={require('../global/image/time.png')}
                            style={{ height: 20, width: 20, resizeMode: "contain" }} />
                        <Text style={{ color: 'red', marginLeft: 5 }}>Hạn dùng: {item.endDate}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default function DiscountScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <HeaderSimple title="Mã giảm giá" navigation={navigation} />
            <FlatList
                data={discount}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    )
}