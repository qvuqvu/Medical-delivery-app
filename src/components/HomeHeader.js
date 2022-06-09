import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Badge } from 'react-native-elements'
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"

export default function HomeHeader({ navigation, title }) {
    const [BadgeCount, getBadgeCount] = useState(0)
    const user = auth().currentUser;
    useEffect(() => {
        firestore()
            .collection('cart' + user.uid).onSnapshot((snapshot) => {
                getBadgeCount(snapshot.size)
            });
    });
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

            <View style={{flexDirection:"row"}}>
                <View >
                    <Icon1
                        onPress={() => { navigation.navigate('MyShopping') }}
                        name='shoppingcart'
                        color={colors.cardbackground}
                        size={35}>
                    </Icon1>
                </View>
                <Badge
                    status="error"
                    value={BadgeCount}
                    containerStyle={{ right: 10}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
        justifyContent: 'space-between'
    },
    headerText: {
        color: colors.headerText,
        fontSize: 21,
        fontWeight: "bold",
        paddingTop: 3,
    }
})