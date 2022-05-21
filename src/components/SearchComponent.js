import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Modal,Dimensions,ImageBackground, TouchableWithoutFeedback, FlatList, Keyboard } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { colors } from "../global/styles"

import Header from './Header'
import { ScrollView } from 'react-native-gesture-handler'
import { filterData2 } from '../global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchComponent = ({  }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [textInputFossued, setTextInputFossued] = useState(true)
    const textInput = useRef(0)

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    const handleSearch = (text) => {
        if (text) {
            const newData = filterData2.filter(item => {
                const itemData = item.name ?
                    item.name.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
            setSearch(text);
        } else {
            setData([]);
            setSearch("");
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center" }}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <View style={styles.SearchArea}>
                        <Icon name="search"
                            style={styles.searchIcon}
                        />
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>What are you looking for ?</Text>
                    </View>
                </TouchableWithoutFeedback>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                >
                    <View style={styles.modal}>
                        <View style={styles.view1}>
                            <View style={styles.TextInput}>
                                <Animatable.View
                                    animation={textInputFossued ? "fadeInRight" : "fadeInLeft"}
                                    duration={400}
                                >
                                    <Icon name={textInputFossued ? "arrow-left" : "search"}
                                        onPress={() => {
                                            if (textInputFossued)
                                                setModalVisible(false)
                                            setTextInputFossued(true)
                                        }}
                                        style={styles.icon2}
                                        type="material"
                                        iconStyle={{ marginRight: 5 }}
                                    />
                                </Animatable.View>
                                <TextInput
                                    style={{ width: "80%" }}
                                    placeholder=""
                                    autoFocus={true}
                                    ref={textInput}
                                    value={search}

                                    onFocus={() => {
                                        setTextInputFossued(true)
                                    }}

                                    onBlur={() => {
                                        setTextInputFossued(false)
                                    }}
                                    onChangeText={(text) => handleSearch(text)}

                                />
                                <Animatable.View
                                    animation={textInputFossued ? "fadeInLeft" : ""}
                                    duration={400}
                                >
                                    <Icon1
                                        name={textInputFossued ? "close" : null}
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        style={{ marginRight: 10, fontSize: 20 }}
                                        onPress={() => {
                                            textInput.current.clear()
                                            setData([])
                                            setSearch("")
                                        }}
                                    />
                                </Animatable.View>
                            </View>
                        </View>
                        <FlatList
                            style={{}}
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        Keyboard.dismiss()
                                        setModalVisible(false)
                                        setTextInputFossued(true)
                                        navigation.navigate("ProductInfo", { id: item.id })
                                    }}
                                >
                                    <View>
                                        <View style={[styles.imageView, { marginTop: 15 }]}>
                                            <ImageBackground
                                                style={styles.image}
                                                source={{ uri: item.image }}
                                            >
                                            </ImageBackground>
                                            <View>
                                                <Text style={{ color: colors.grey1, textAlign: 'center' }}>{item.name}</Text>
                                            </View>
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
                            keyExtractor={(item, index) => index.toString()}
                            onScroll={() => { Keyboard.dismiss() }}

                        />
                    </View>
                </Modal>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    text1: {
        color: colors.grey3,
        fontSize: 16
    },

    TextInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10

    },

    SearchArea: {
        marginTop: 10,
        width: 375,
        height: 50,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: "row",
        alignItems: "center",
    },

    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
        marginLeft: 10
    },

    view1: {
        height: 70,
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },

    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2,
    },
    modal: {
        flex: 1
    },
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
export default SearchComponent
