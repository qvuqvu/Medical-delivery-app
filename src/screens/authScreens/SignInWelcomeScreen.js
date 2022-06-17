import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable"
import Swiper from "react-native-swiper";
import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth'



export default function SignInWelcomeScreen({ navigation }) {
    const { dispatchSignedIn } = useContext(SignInContext)

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } })
            }
            else {
                dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: null } })
            }
        })
    }, [])
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <View style={{}}>
                <Text style={{ alignSelf: "center", fontSize: 26, textAlign: "center", fontWeight: "bold", marginTop: 30, color: colors.welcome }}>ĐẶT THUỐC HÔM NAY, SỨC KHỎE NGÀY MAI</Text>
            </View>
            <View style={{ flex: 8, justifyContent: "center", marginTop: 30 }}>
                <Swiper autoplay={true} style={{ marginTop: 5 }}>
                    <View style={styles.slide1}>
                        <Image
                            source={{ uri: "https://i.imgur.com/ggO0GMB.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: "https://i.imgur.com/oVkw1D7.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://i.imgur.com/k8JgqLU.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: "https://i.imgur.com/MTBdUBa.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: "bold", color: colors.welcome, fontSize: 32 }}>Chào mừng!</Text>
                <Text style={{ marginLeft: 30, fontSize: 20, color: colors.black }}>Tạo tài khoản hoặc đăng nhập để đặt thuốc ngay trên</Text>
                <Text style={{ marginLeft: 174, marginTop: -27, fontSize: 20, fontWeight: "bold", color: colors.black }}>MEDELI</Text>
            </View>
            <View style={{ flex: 4, marginBottom: 20, marginTop: 10, justifyContent: "flex-end" }}>
                <View style={{ marginHorizontal: 20, marginLeft: 12 }}>
                    <Button
                        title="Đăng nhập"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() =>
                            navigation.navigate("SignInScreen")
                        }

                    />
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 15, marginLeft: 12 }}>
                    <Button
                        title="Đăng ký"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTittle}
                        onPress={() => { navigation.navigate("SignUpScreen") }}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#1db0e3",
        height: 50,
        paddingHorizontal: 20,
        borderColor: colors.buttons,
        width: 300,
        marginLeft: 32
    },
    createButtonTittle: {
        color: colors.grey1,
        fontSize: 18,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})