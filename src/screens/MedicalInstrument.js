import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, FlatList, ImageBackground, Dimensions, Alert, TouchableWithoutFeedback, ImageBackgroundComponent, ToastAndroid, Image } from 'react-native'
import { Button } from 'react-native-elements';
import { filterData1, filterData } from "../global/Data"
import { colors } from "../global/styles";
import Header from "../components/Header"
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon from "react-native-vector-icons/FontAwesome5"
import { ScrollView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MedicalInstrument({ navigation }) {
    let j = 0;
    const [c, setC] = useState(2)
    const [d, setD] = useState(0)

    const renderInfo = ({ item }) => {
        if (j < c) {
            j = j + 1;
            return (
                <TouchableWithoutFeedback>
                    <View style={{ borderWidth: 0.18, height: 60, alignItems: "center", marginLeft: 18, width: 170, marginTop: 15, backgroundColor: colors.xam }}>
                        <View style={{ borderWidth: 0.1, height: 55, width: 55, marginRight: 110, marginTop: 1.5, backgroundColor: colors.white }}>
                            <Image source={{ uri: item.image }}
                                style={{ height: 50, width: 50, alignSelf: "center" }}
                            />
                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <Text style={{ alignContent: "center", fontSize: 17, marginTop: -48, color: colors.black }}>{item.name}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }
    const count = () => {
        if (d == 0) {
            setD(1)
            setC(14)
        }
        else {
            setD(0)
            setC(2)
        }

    }
    return (
        <View style={{ flex: 1, marginTop: 0.5 }}>
            <Header title="MEDICAL" type="arrow-left" />
            <ScrollView>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 5, color: colors.black, marginTop: 5 }}>Thuốc</Text>
                </View>
                <View>
                    <FlatList
                        data={filterData}
                        renderItem={renderInfo}
                        horizontal={false}
                        showsverticalScrollIndicator={false}
                        numColumns={2}

                    />
                    <TouchableOpacity
                        style={{ marginTop: 30 }}
                        onPress={count}
                    >
                        <Text style={{ alignSelf: "center", fontSize: 18, color: colors.blue, fontWeight: "bold" }}>{d == 0 ? "Xem thêm 12 danh mục nữa" : "Thu Gọn"}   <Icon name={d == 0 ? "chevron-down" : "chevron-up"} size={17} /></Text>

                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <View>
                        <FlatList
                            style={{}}
                            data={filterData1}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableWithoutFeedback>
                                    <View>
                                        <View style={[styles.imageView, { marginTop: 15 }]}>
                                            <TouchableOpacity onPress={() => navigation.navigate("ProductInfo", { id: item.id })}>
                                                <ImageBackground
                                                    style={styles.image}
                                                    source={{ uri: item.image }}
                                                >
                                                </ImageBackground>
                                                <View>
                                                    <Text style={{ color: colors.grey1, textAlign: 'center' }}>{item.name}</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <View>
                                                <Text style={[{ color: colors.grey1, textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{item.gia}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <TouchableOpacity style={{ borderWidth: 0.5, borderRadius: 5, marginTop: 12, marginRight: 30, width: 50, height: 40, alignItems: "center", borderColor: colors.grey2 }}>
                                                    <Icon1 name='shoppingcart' size={35} >
                                                    </Icon1>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ borderWidth: 1.25, borderRadius: 5, height: 40, width: 85, marginTop: 12, marginRight: 10, borderColor: colors.blue }} >
                                                    <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: 6, color: colors.blue }}>MUA NGAY</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )}

                            horizontal={false}
                            showsverticalScrollIndicator={false}
                            numColumns={2}

                        />
                    </View>


                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.4475,
        height: SCREEN_WIDTH * 0.7,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035
    },

    image: {
        height: SCREEN_WIDTH * 0.4475,
        width: SCREEN_WIDTH * 0.4475,
        borderRadius: 10,
    },

    listHeader: {
        fontSize: 16,
        color: colors.grey2,
        paddingBottom: 10,
        marginLeft: 12

    },

    textView: {

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(52, 52, 52,0.3)'
    },


})
