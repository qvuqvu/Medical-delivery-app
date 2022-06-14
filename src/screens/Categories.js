import React, { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, Dimensions, TouchableOpacity, Image, Modal, TouchableWithoutFeedback, FlatList, Keyboard, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon1 from 'react-native-vector-icons/AntDesign'
import { colors } from "../global/styles"
import ProductCard from '../components/ProductCard';
import HomeHeader from '../components/HomeHeader';
import { ScrollView } from 'react-native-gesture-handler'
import { Thietbiyte, thuoc, thucphamchucnang, covid } from '../global/Data';
import SearchComponent from '../components/SearchComponent';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';
const SCREEN_WIDTH = Dimensions.get('window').width;


export default function Categories({ navigation }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("vi");
    const user = auth().currentUser;
   
    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    const { colors } = useTheme();
    const [selected, setSelected] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(thuoc)
    }, []
    )

    const handleSelected = (value, data) => {
        setSelected(value);
        setData(data)
    };


    return (
        <View style={styles.container}>

            <View>
                <HomeHeader navigation={navigation} title="Tìm kiếm" />
                <SearchComponent navigation={navigation}  />
            </View>

            <View style={{ marginTop: 80, marginLeft: 10, marginBottom: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <CategoriesCard
                        image={require('../global/image/categories/category__thuockhongkedon.png')}
                        title={t('Thuốc không kê đơn')}
                        onPress={handleSelected}
                        value={selected}
                        data={thuoc}
                    />
                    <CategoriesCard
                        image={require('../global/image/categories/category__covid19.png')}
                        title={'COVID-19'}
                        onPress={handleSelected}
                        value={selected}
                        data={covid}
                    />
                    <CategoriesCard
                        image={require('../global/image/categories/category__thucphamchucnang.png')}
                        title={t('Thực phẩm chức năng')}
                        onPress={handleSelected}
                        value={selected}
                        data={thucphamchucnang}
                    />
                    <CategoriesCard
                        image={require('../global/image/categories/category__thietbiyte.png')}
                        title={t('Thiết bị y tế')}
                        onPress={handleSelected}
                        value={selected}
                        data={Thietbiyte}
                    />


                </ScrollView>
            </View>


            <View>
                <FlatList
                    style={{ marginLeft: 5, marginBottom: 10, marginTop: 20 }}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    data={data}
                    extraData={data}
                    keyExtractor={item => { return item.id }}
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
        </View >



    )

}

function CategoriesCard({ image, title, onPress, value, data }) {
    return (
        <TouchableOpacity
            style={[styles.frame, { borderColor: value === title ? 'green' : 'red' }]}
            onPress={() => onPress(title, data)}>
            <View style={[value === title ? { ...styles.smallCardSelected } : { ...styles.smallCard }]}>
                <Image
                    style={{ height: 75, width: 100 }}
                    source={image}
                />
                <View>
                    <Text style={[value === title ? { ...styles.smallCardTextSelected } : { ...styles.smallCardText }]}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    text1: {
        color: colors.text,
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

    smallCardText: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.grey2,
    },

    smallCardTextSelected: {
        fontSize: 13,
        fontWeight: "bold",
        color: colors.cardbackground,
    },

})