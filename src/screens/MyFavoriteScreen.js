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
                <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={()=>{navigation.navigate("News5")}}>
                    <View style={{ backgroundColor: '#e1f8f8', width:250 , height: 170, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                        source={{uri:"https://www.medigoapp.com/uploads/Cau_chuyen_cua_Steve_Kopecky_50c55cef5d.jpg"}}
                        style={{width:210,height:115,marginLeft:20}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,marginLeft:15,fontWeight:"bold"}}>Bài báo cáo đặc biệt phần 1: Câu chuyện của Bs Steve Kopecky</Text>
                    </View>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginLeft:20}} onPress={()=>{navigation.navigate("News3")}}>
                    <View style={{ backgroundColor: '#e1f8f8', width:250 , height: 170, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                        source={{uri:"https://www.medigoapp.com/uploads/Tinh_trang_viem_man_tinh_eb23113d9a.jpg"}}
                        style={{width:210,height:115,marginLeft:20,justifyContent:"center"}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,marginLeft:15,fontWeight:"bold",justifyContent:"center"}}>Bài báo cáo đặc biệt phần 2: Tình trạng viêm mãn tính</Text>
                    </View>
                    </View>
                 </TouchableOpacity>

                 <TouchableOpacity style={{marginLeft:20}} onPress={()=>{navigation.navigate("News2")}}>
                    <View style={{ backgroundColor: '#e1f8f8', width:250 , height: 170, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                        source={{uri:"https://www.medigoapp.com/uploads/6_buoc_de_song_lanh_manh_820c9b5fc4.jpg"}}
                        style={{width:210,height:115,marginLeft:20}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,marginLeft:15,fontWeight:"bold",justifyContent:"center"}}>Bài báo cáo đặc biệt phần 3: 6 bước để sống lành mạnh mỗi ngày</Text>
                    </View>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginLeft:20}} onPress={()=>{navigation.navigate("News4")}}>
                    <View style={{ backgroundColor: '#e1f8f8', width:250 , height: 170, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                        source={{uri:"https://www.medigoapp.com/uploads/Lam_the_nao_de_kien_tri_voi_loi_song_lanh_manh_de4160f6ac.jpg"}}
                        style={{width:210,height:115,marginLeft:20}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,marginLeft:15,fontWeight:"bold"}}>Bài báo cáo đặc biệt phần 4: Làm thế nào để kiên trì với lối sống lành mạnh?</Text>
                    </View>
                    </View>
                 </TouchableOpacity>
                 <TouchableOpacity style={{marginLeft:20}} onPress={()=>{navigation.navigate("News1")}}>
                    <View style={{ backgroundColor: '#e1f8f8', width:250 , height: 170, justifyContent: 'center', marginTop: 15, borderRadius: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                        source={{uri:"https://www.medigoapp.com/uploads/De_khang_khang_sinh_402a48565b.jpg"}}
                        style={{width:210,height:115,marginLeft:20}}
                        />
                    </View>
                    <View>
                        <Text style={{color:'black',fontSize:15,marginLeft:15,fontWeight:"bold"}}>Tổng quan về đề kháng kháng sinh</Text>
                    </View>
                    </View>
                 </TouchableOpacity>
                 </ScrollView>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}>Bản tin Covid-19</Text>
                </View>
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