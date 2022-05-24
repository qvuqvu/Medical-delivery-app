import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors, paremeter } from '../global/styles';
import {
    Icon
} from 'react-native-elements';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

export default function ProductCard({
    ProductName,
    Price,
    images,
    screenWidth
}) {

    return (
        <TouchableOpacity>
            <View style={{ ...styles.cardView, width: screenWidth, }}>
                <Image
                    style={{ ...styles.image, width: "100%" }}
                    source={images}
                />

                <View>
                    <View>
                        <Text style={styles.ProductName}>{ProductName}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>

                        <View style={styles.Price}>

                            <Text style={styles.UnitCurrency}> {Price} đ</Text>
                        </View>

                        {/* <View style ={{flex:9, flexDirection:"row"}}>
                        <Text style ={styles.address}>{businessAddress}</Text>
                    </View> */}

                    </View>
                </View>

            </View>

            {/* <View style ={styles.review}>
                   <Text style ={styles.average}>{averageReview}</Text>   
                   <Text style ={styles.numberOfReview}>{numberOfReview} reviews</Text>  
            </View> */}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    cardView: {
        padding: 15,
        marginBottom: 20,
        marginHorizontal: 9,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderColor: colors.buttons,
        borderWidth: 1,
        backgroundColor: colors.cardbackground,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,


    },
    image: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 130,
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
        fontWeight: 'bold',
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

    //  review :{
    //     position:"absolute",
    //     top:0,
    //     right:10,
    //     backgroundColor:'rgba(52, 52, 52,0.3)',
    //     padding:2,alignItems:"center",
    //     justifyContent:"center", 
    //     borderTopRightRadius:5,
    //     borderBottomLeftRadius:12 
    //  },

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
