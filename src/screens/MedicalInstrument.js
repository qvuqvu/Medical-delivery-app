import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Dimensions, Aler, Image,ScrollView } from 'react-native'
import { Button } from 'react-native-elements';
import { filterData1, filterData, Thietbiyte } from "../global/Data"
import { colors } from "../global/styles";
import { ScrollView } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function MedicalInstrument({ navigation }) {
    return (
        <View>
     <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <FlatList
                style={{ marginLeft: 5, marginBottom: 10, marginTop: 20 }}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                data={Thietbiyte}
                keyExtractor={item => item.id.toString}
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
    </ScrollView>
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