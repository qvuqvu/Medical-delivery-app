import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
// import IconBadge from 'react-native-icon-badge'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Badge } from '@rneui/base'

export default function HomeHeader({ navigation, title }) {
    var BadgeCount = 1;
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20 }}>

                <Icon
                    name='bars'
                    color={colors.cardbackground}
                    size={32}
                    onPress={() => {
                        navigation.toggleDrawer()
                    }}
                />
            </View>

            <View>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>


            <View style={{ marginEnd: 10 }}>
                <Icon1
                onPress={() => {navigation.navigate('MyShopping')}}
                    name='shoppingcart'
                    color={colors.cardbackground}
                    size={35}>

                </Icon1>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        flexDirection:"row",
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    },
    headerText:{
        color:colors.headerText,
        fontSize:21,
        fontWeight:"bold",
        paddingTop:3,
    }
})