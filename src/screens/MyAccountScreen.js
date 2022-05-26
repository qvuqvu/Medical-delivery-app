import React, { useState,useEffect, useTransition } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import { Avatar } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
/** */

export default function MyAccountScreen({ navigation }) {
    const [fullname,setfullname]=useState("")
    const[phonenumber,setphonenumber]=useState("")
    const[email,setemail]=useState("");
    const user = auth().currentUser;
    useEffect(() => {
        firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                if(user.email==documentSnapshot.data().email_account){
               setfullname(documentSnapshot.data().full_name)
               setphonenumber(documentSnapshot.data().phone_number)
               setemail(documentSnapshot.data().email_account)}
              });
        });
        
      });
    
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white' }}>
                <View style={styles.avatarView}>
                    <Avatar
                        size={90}
                        rounded
                        avatarStyle={styles.avatar}
                        source={{ uri: user.photoURL ? user.photoURL : "https://i.ytimg.com/vi/jH7e1fDcZnY/maxresdefault.jpg" }}
                    />
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 15 }}>
                    {user.displayName ? user.displayName : "Không tên"}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 10, marginRight: 10 }}>
                    <TouchableOpacity style={styles.viewItem}>
                        <Image
                            source={require('../global/image/doc.png')}
                            style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 20 }}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                            <Text style={{ color: 'black' }}>0</Text>
                            <Text>Đơn đang xử lý</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewItem}>
                        <Image
                            source={require('../global/image/discount.png')}
                            style={{ height: "100%", width: "25%", resizeMode: "contain", marginRight: 20 }}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5 }}>
                            <Text style={{ color: 'black' }}>0</Text>
                            <Text>Mã giảm giá</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', width: "100%", height: '45%', marginTop: 10 }}>
                <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', marginLeft: 10, marginTop: 10 }}>Thông tin cá nhân</Text>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/account_head.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Tên người dùng</Text>
                            <Text style={{ color: 'black', marginTop: 5 }}>{user.displayName ? user.displayName : fullname}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/phone.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Số điện thoại</Text>
                            <Text style={{ color: 'black', marginTop: 5 }}>{phonenumber}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/calendar.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Ngày sinh</Text>
                            <Text style={{ color: 'black', marginTop: 5 }}>18/08/2002</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styles.viewInfo}>
                        <Image
                            source={require('../global/image/sex.png')}
                            style={styles.styleImgItem}
                        />
                        <View style={{ justifyContent: 'center', marginEnd: 5, marginLeft: 10 }}>
                            <Text>Giới tính</Text>
                            <Text style={{ color: 'black', marginTop: 5 }}>Nam</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.address}>
                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 5 }}>
                    <Text style={{ color: 'black', marginLeft: 15, fontSize: 16, fontWeight: "bold" }}>Sổ địa chỉ</Text>
                    <TouchableOpacity>
                        <Text style={{ color: 'red', marginRight: 15, fontSize: 16, fontWeight: "bold" }}>Địa chỉ đã lưu</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image
                        source={require('../global/image/location.png')}
                        style={{ height: 30, width: "10%", resizeMode: 'contain', marginLeft: 5, marginTop: 10 }}
                    />
                    <View style={{ width: "85%", marginLeft: 5 }}>
                        <Text style={{ fontSize: 16, color: 'black' }}>36C/41 Đường Số 16, Linh Trung, Thủ Đức, Thành Phố Hồ Chí Minh, Việt Nam</Text>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Text style={{ fontSize: 15, color: 'blue' }}>Mặc định</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarView: {
        alignItems: 'center',
        marginTop: 20,
    },
    styleImgItem: {
        height: "65%",
        marginLeft: 10,
        resizeMode: "contain",
        marginTop: 10
    },
    viewItem: {
        backgroundColor: 'white',
        height: 48,
        width: '45%',
        borderRadius: 5,
        paddingHorizontal: 16,
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
        marginLeft: 10,
        flexDirection: "row"
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: 20,
        alignContent: 'center',
    },
    address: {
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
        height: '100%',
    }
})