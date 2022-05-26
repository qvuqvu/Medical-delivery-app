import { StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback,TouchableOpacity, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { colors, paremeter } from '../global/styles';
import {
    Icon
} from 'react-native-elements';
import Icon1 from 'react-native-vector-icons/AntDesign'
import { white } from 'react-native-paper/lib/typescript/styles/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function ProductCard({
    ProductName,
    Price,
    images,
    screenWidth
}) {

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
                setModalVisible(false)
                setTextInputFossued(true)
                navigation.navigate("ProductInfo", { id: item.id })
            }}
        >
            <View style ={styles.cardView}>
                <View style={[styles.imageView, { marginTop: 15 }, {width: screenWidth}]}>
                    <ImageBackground
                        style={styles.image}
                        source={{ uri: images }}
                    >
                    </ImageBackground>
                    <View>
                        <Text style={{ color: colors.grey1, textAlign: 'center' }}>{ProductName}</Text>
                    </View>
                    <View>
                        <Text style={[{ color: colors.price, textAlign: 'center', fontWeight: "bold", marginTop: 10 }]}>{Price}</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginBottom: 15  }}>
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
    )


}

const styles = StyleSheet.create({

    

    cardView: {
        padding: 5,
        marginBottom: 10,
        marginHorizontal: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: colors.buttons,
        borderWidth: 1,
        backgroundColor: colors.cardbackground,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        


    },

    imageView: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: SCREEN_WIDTH * 0.3,
        height: SCREEN_WIDTH * 0.7,
        marginLeft: SCREEN_WIDTH * 0.035,
        marginBottom: SCREEN_WIDTH * 0.035
    },
    
    image: {
        height: SCREEN_WIDTH * 0.35,
        width: SCREEN_WIDTH * 0.35,
        borderRadius: 10,
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
    ProductName: {
        fontSize: 17,
        fontWeight: 'semibold',
        color: colors.grey1,
        marginTop: 20,
        marginLeft: 10
    },

    Price: {
        flex: 4, flexDirection: 'row',
        borderRightColor: colors.grey4,
        paddingHorizontal: 5,
        // borderRightWidth: 1,

    },
    UnitCurrency: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 5,
        color: colors.price
    },

    address: {
        fontSize: 12,
        paddingTop: 5,
        color: colors.grey2,
        paddingHorizontal: 10
    },

    average: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -3
    },
    numberOfReview: {
        color: "white",
        fontSize: 13,
        marginRight: 0,
        marginLeft: 0
    }
})
