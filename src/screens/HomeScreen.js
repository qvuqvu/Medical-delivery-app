import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, paremeter } from '../global/styles';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import HomeHeader from '../components/HomeHeader';
import { ProductData, categoryData, Totaldate, thuoc } from '../global/Data';
import ProductCard from '../components/ProductCard';
import CountDown from 'react-native-countdown-component';

const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeScreen({ navigation }) {

    const [indexCheck, setIndexCheck] = useState("0")

    return (
        <View style={styles.container}>
            <HomeHeader navigation={navigation} title="MEDILI" />
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Danh mục</Text>
            </View>

            <View>
                <FlatList
                    style={{ marginLeft: 10, marginTop: 3 }}
                    data={categoryData}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(item, index) => { return item.id }}
                    extraData={indexCheck}
                    renderItem={({ item, index }) => (
                        <Pressable
                            onPress={() => { setIndexCheck(item.id) }}
                        >
                            <View style={indexCheck === item.id ? { ...styles.smallCardSelected } : { ...styles.smallCard }}>
                                <Image
                                    style={{ height: 75, width: 100 }}
                                    source={item.image}
                                />
                                <View style={styles.categoryTextView}>
                                    <Text style={indexCheck === item.id ? { ...styles.smallCardTextSected } :
                                        { ...styles.smallCardText }}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}

                />
            </View>


            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Sản phẩm</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontSize: 16, marginRight: 5, color: 'black', fontWeight: 'bold' }}>Sản phẩm thay đổi sau:</Text>
                    <CountDown
                        style={{ marginTop: -5 }}
                        until={3600}
                        size={14}
                        digitStyle={{ backgroundColor: '#66DF48' }}
                        digitTxtStyle={{ color: 'white' }}
                        timeToShow={['M', 'S']}
                        timeLabels={{ m: 'Min', s: 'Sec' }}
                    />
                </View>
            </View>

            <View>
                <FlatList
                    style={{ marginLeft: 5, marginBottom: 10, marginTop: 20 }}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    data={Totaldate}
                    keyExtractor={item => { return item.id }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View >
                            <ProductCard
                                navigation={navigation}
                                screenWidth={SCREEN_WIDTH * 0.40}
                                images={item.image}
                                ProductName={item.name}
                                Price={item.gia}
                                id={item.id}
                            />
                        </View>)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
        marginLeft: 10,
        marginTop: 20
    },
    headerTextView: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 8,
        paddingVertical: 3,
    },
    smallCard: {
        borderRadius: 20,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 150,
        margin: 10,
        height: 120,


    },
    smallCardSelected: {
        borderRadius: 20,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        width: 150,
        margin: 10,
        height: 120
    },
    smallCardTextSected: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.cardbackground,
    },
    smallCardText: {
        fontSize: 13,
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
    },

    headerText: {
        color: colors.boldheader,
        fontSize: 20,
        fontWeight: "600"
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },

    categoryTextView: {
        marginTop: 5

    }

})