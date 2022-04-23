import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors } from './styles'

import Header from '../components/Header'

function Success({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={{ uri: 'https://cdn2.iconfinder.com/data/icons/color-doodle-wedding/32/check_mark_complete_done_good_heart_ok_valentine-512.png' }}
                    style={{ width: 100, height: 100, marginTop: 220, marginLeft: 150 }}
                />
            </View>
            <View style={styles.viewText}>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19 }}>
                    Đặt hàng thành công
                </Text>
                <Text style={{ fontSize: 16,paddingTop:15 }}>
                    Cảm ơn bạn đã sử dụng dịch vụ.
                </Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Back Home Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewText: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 80,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.light_blue,
        height: 40,
        width: '90%',
        borderRadius: 20,
        paddingHorizontal: 16,
        shadowOffset: { width: 0, height: 1, },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 0.4,
        paddingLeft: 24,
        marginLeft: 20,
        marginTop: 100,
    }
})


export default Success