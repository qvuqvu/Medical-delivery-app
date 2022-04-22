import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, parameters } from '../global/styles'
// import IconBadge from 'react-native-icon-badge'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { Badge } from '@rneui/base'

export default function HomeHeader({navigation}) {
    var BadgeCount = 1;
    return (
        <View style={styles.header}>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20 }}>

                <Icon
                    name='bars'
                    color={colors.cardbackground}
                    size={32}
                    onPress={()=>{
                       navigation.toggleDrawer()
                    }}
                />
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", marginLeft: 110 }}>
                <Text style={{ color: colors.cardbackground, fontSize: 25, fontWeight: 'bold' }}>MEDELI</Text>
            </View>


            <View style={{ marginLeft: 100, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Icon1
                        name='shoppingcart'
                        color={colors.cardbackground}
                        size={35}>

                    </Icon1>

                </View>
                {/* <Badge
                    status="error"
                    value={BadgeCount}
                    containerStyle={{ right: 7, top: 7 }}
                /> */}
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    }
})