import React, { useState, useRef,useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable"
import { Formik } from "formik";
import auth from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SignInContext } from '../../contexts/authContext';

GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});
export default function SignInScreen({ navigation }) {

    const { dispatchSignedIn } = useContext(SignInContext)

    const [textinput2Fossued, setTextInput2Fossued] = useState(false)

    const textinput1 = useRef(1)
    const textinput2 = useRef(2)


    async function signIn(data) {
        try {
            const { password, email } = data
            const user = await auth().signInWithEmailAndPassword(email, password)
            if (user) {
                dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } })
            }
        }
        catch (error) {
            Alert.alert(
                error.name,
                error.message
            )
        }
    }

    async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        if (user) {
            dispatchSignedIn({ type: "UPDATE_SIGN_IN", payload: { userToken: "signed-in" } })
        }
    }
    return (
        <View style={styles.container}>

            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
            <View style={{ marginLeft: 20, marginTop: 10 }}>
                <Text style={title}>Đăng nhập </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={styles.text1}>
                    Đăng nhập tài khoản của bạn
                </Text>
            </View>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    signIn(values)
                }}
            >
                {(props) =>
                    <View>
                        <View style={{ marginTop: 20 }}>
                            <View>
                                <TextInput
                                    style={styles.textinput1}
                                    placeholder="Email"
                                    ref={textinput1}
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                />
                            </View>
                            <View style={styles.textinput2}>
                                <Animatable.View animation={textinput2Fossued ? "" : "fadeInLeft"} duration={400} >
                                    <Icon
                                        name="lock"
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        style={{}}
                                    />
                                </Animatable.View>
                                <TextInput
                                    style={{ width: "80%" }}
                                    placeholder="Password"
                                    ref={textinput2}
                                    onFocus={() => {
                                        setTextInput2Fossued(false)
                                    }}

                                    onBlur={() => {
                                        setTextInput2Fossued(true)
                                    }}
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                />
                                <Animatable.View animation={textinput2Fossued ? "" : "fadeInLeft"} duration={400} >
                                    <Icon
                                        name="visibility-off"
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        style={{ marginRight: 10 }}
                                    />
                                </Animatable.View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                            <Button
                                title="Đăng nhập"
                                buttonStyle={styles.styledButton}
                                titleStyle={styles.buttonTitle}
                                onPress={ props.handleSubmit}
                            />
                        </View>
                    </View>
                }
            </Formik>


            <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: "underline" }} > Quên mật khẩu ?</Text>
            </View>

            <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
            </View>

            <View style={{ marginHorizontal: 10, marginTop: -2 }}>
                <SocialIcon
                    title="Đăng nhập với Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginHorizontal: 10, marginTop: 0 }}>
                <SocialIcon
                    title="Đăng nhập với Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => { onGoogleButtonPress() }}
                />
            </View>

            <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ ...styles.text1 }} > Chưa có tài khoản ? </Text>
            </View>

            <View style={{ alignItems: "flex-end", marginHorizontal: 20 }}>
                <Button
                    title="Đăng ký"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTittle}
                    onPress={() => { navigation.navigate("SignUpScreen") }}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey2,
        fontSize: 16

    },
    textinput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20
    },

    textinput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50,
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#1db0e3",
        height: 40,
        paddingHorizontal: 20
    },
    createButtonTittle: {
        color: "#1db0e3",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    },
    styledButton: {
        backgroundColor: "#6BC8FF",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#1db0e3",
        height: 50,
        paddingHorizontal: 20,
        width: "100%",
    },

    buttonTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})