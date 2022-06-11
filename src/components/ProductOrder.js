import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/EvilIcons'
import Icon4 from 'react-native-vector-icons/AntDesign'
import { colors, paremeter } from '../global/styles';
import { RadioButton } from 'react-native-paper';
import { test } from '../global/Data';
import { discount } from '../global/Data';
import auth from "@react-native-firebase/auth"
import { SafeAreaView } from 'react-native-safe-area-context';
import firestore, { firebase } from '@react-native-firebase/firestore';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export default function ProductOrder({ item }) {
    const [num, setNum] = useState(1);
    const handlePlus = () => {
        setNum(num + 1);
    }
    const handleMinus = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue, SL) =>
        dispatch({
            type: "UPDATE_TO_CART",
            payload: {
                ...item,
                checkboxValue: checkboxValue,
                SL: SL,
            },
        });
    return (
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
                                onPress={() => {
                                    handleMinus()
                                    if (num > 1) {
                                        selectItem(item, false, num - 1)
                                    }
                                }}
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
                                onPress={() => {
                                    handlePlus()
                                    selectItem(item, false, num + 1)
                                }}
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
    )
}