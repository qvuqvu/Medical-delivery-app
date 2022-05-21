import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import HomeHeader from '../components/HomeHeader';
import { filterData2 } from '../global/Data';
import HeaderProject from '../components/HeaderProduct';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default function HomeScreen({ navigation, route }) {
    const [count, setCount] = useState(1)
    const cost = filterData2[route.params.id].gia.split(' ')
    return (
        <View style={styles.container}>
            <HeaderProject navigation={navigation} title="Product" />
            <View>
                <View style={{ flexDirection: "column", marginLeft: 15, marginTop: 30, width: "90%" }}>
                    <View style={{ borderWidth: 0.6, width:'90%', height:'62%', justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        <Image
                            style={{ width:'90%', height:'90%',resizeMode:"cover" }}
                            source={{ uri: filterData2[route.params.id].image }} />
                    </View>
                    <View style={{ width: '100%', marginTop: 12,alignItems:'center' }}>
                        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black' }}>{filterData2[route.params.id].name}</Text>
                    </View>
                </View>
                <View style={{ marginLeft: 15, marginTop: 50, flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => {
                                if (count > 1) {
                                    setCount(count - 1)
                                }
                            }}
                        >
                            <Icon style={{ marginBottom: 7 }} name="window-minimize" size={18} color={colors.light_blue} />
                        </TouchableOpacity>
                        <View style={{ width: 40, height: 30, backgroundColor: colors.grey5, marginLeft: 10 }}>
                            <Text style={{ alignSelf: 'center', fontSize: 18, color: 'black', marginTop: 2 }}>{count}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                setCount(count + 1)
                            }}
                        >
                            <Icon style={{ marginLeft: 10 }} name="plus" size={20} color={colors.light_blue} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '70%', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: 25, color: 'black' }}>{cost[0] * count}.000 VND</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5,
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 16
    },
    fillterView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginHorizontal: 10,
        marginVertical: 10
    },
    clockView: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        backgroundColor: colors.cardbackground,
        borderRadius: 15,
        paddingHorizontal: 5,
        marginRight: 20
    },
    addressView: {
        flexDirection: "row",
        backgroundColor: colors.grey5,
        borderRadius: 15,
        paddingVertical: 3,
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerText: {
        color: colors.grey1,
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 10,
    },
    headerTextView: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardTextSected: {
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,
    },
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: 'white',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center"
    }

})