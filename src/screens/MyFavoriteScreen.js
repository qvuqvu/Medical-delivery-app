import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'
import firestore, { firebase } from '@react-native-firebase/firestore';
import HomeHeader from '../components/HomeHeader';
import Icon3 from 'react-native-vector-icons/EvilIcons'
import auth from "@react-native-firebase/auth"
import { nhathuoc1, spbanchay } from "../global/Data"

export default function MyFavoriteScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <HomeHeader navigation={navigation} title="Yêu thích" />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Sản phẩm bán chạy</Text>

                <View style={{ marginBottom: 20 }}>
                    <FlatList
                        data={spbanchay}
                        renderItem={({ item }) => (
                            <View style={{ width: 290, }}>
                                <TouchableOpacity
                                    onPress={() => navigation.push("ProductInfo", { id: item.id })}
                                >
                                    <View style={{ backgroundColor: '#e1f8f8', width: 270, height: 120, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                                        <Text style={{ alignSelf: 'center', color: '#205212', fontSize: 16, marginBottom: 10, marginRight: 74 }}>
                                            {item.nhathuoc}
                                        </Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                style={{ width: 50, height: 50, resizeMode: "cover", marginBottom: 5, marginLeft: 20 }}
                                                source={{ uri: item.image }} />
                                            <View style={{ marginLeft: 10, width: "70%", height: 20 }}>
                                                <Text style={{ color: 'black' }}>
                                                    {item.name}
                                                </Text>
                                                <Text style={{ color: 'red' }}>
                                                    {item.gia}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', }}>Nhà thuốc được ưu thích</Text>

                <View style={{ backgroundColor: '#e1f8f8', width: 270, height: 100, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: 50, height: 50, resizeMode: "cover", marginBottom: 5, marginLeft: 20 }}
                            source={{ uri: nhathuoc1[0].image }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: 'black', fontSize: 15 }}>{nhathuoc1[0].nhathuoc}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                    <Image
                                        source={require('../global/image/star.png')}
                                        style={{ height: 15, width: 15 }}
                                    />
                                    <Text style={{ marginLeft: 5, color: 'black' }}>{nhathuoc1[0].averageReview}</Text>
                                </View>
                                <Text style={{ color: 'black' }}>~{nhathuoc1[0].farway}</Text>
                            </View>
                            <Text style={{ marginTop: 5 }}>Phản hồi: {<Text style={{ color: 'black' }}>Rất tích cực</Text>}</Text>
                        </View>
                    </View>
                </View>

                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Bản tin hôm nay</Text>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Bản tin Covid-19</Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})