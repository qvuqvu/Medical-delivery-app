import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import HeaderSimple from '../components/HeaderSimple';
import { discount } from '../global/Data';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
export default function DiscountScreen({ navigation }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("");
    // const changeLanguage = value => {
    //     i18n
    //         .changeLanguage(value)
    //         .then(() => setLanguage(value))
    //         .catch(err => console.log(err));
    // };
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    const { colors } = useTheme();
    var a = colors.text
    return (
        <View style={{ flex: 1 }}>
            <HeaderSimple title={t("Mã giảm giá")} navigation={navigation} />
            <FlatList
                data={discount}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <ScrollView style={{ marginTop: 20 }}>
                            <View style={{ flexDirection: 'row', width: "94%", borderBottomWidth: 1, borderBottomColor: colors.text, backgroundColor: colors.backgroundColor, height: 80, alignSelf: 'center', alignItems: 'center' }}>
                                <Image
                                    source={item.image}
                                    style={{ height: 55, width: 55, resizeMode: "contain", marginLeft: 15 }}
                                />
                                <View style={{ marginLeft: 15 }}>
                                    <Text style={{ fontSize: 16, color: colors.text, fontWeight: 'bold' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', marginTop: 8 }}>
                                        <Image
                                            source={require('../global/image/time.png')}
                                            style={{ height: 20, width: 20, resizeMode: "contain" }} />
                                        <Text style={{ color: 'red', marginLeft: 5 }}>{t("Hạn dùng:")} {item.endDate}</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
                }
            />
        </View>
    )
}