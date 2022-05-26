import React, { useState, useRef, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, Alert, Modal, Pressable, TouchableOpacity } from "react-native";
import { colors, parameters, title } from "../../global/styles";
import { Icon, Button, SocialIcon } from "react-native-elements";
import Icon1 from "react-native-vector-icons/FontAwesome"
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable"
import { Formik } from "formik";
import auth,{firebase} from "@react-native-firebase/auth"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SignInContext } from '../../contexts/authContext';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

GoogleSignin.configure({
    webClientId: '359199845323-h10e31djcqb9fbobv2vknmh1h1h5hge0.apps.googleusercontent.com',
});
export default function SignInScreen({ navigation }) {

    const { dispatchSignedIn } = useContext(SignInContext)

    const [textinput2Fossued, setTextInput2Fossued] = useState(false)

    const textinput1 = useRef(1)
    const textinput2 = useRef(2)
    const [getemail, setemail] = useState("")
    const [getVisible, setVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)


    async function signIn(data) {
        try {
            const { password, email } = data
            const user = await auth().signInWithEmailAndPassword(email, password)
            if (user) {
                // console.log(user)
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
        try {
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            const user = await auth().signInWithCredential(googleCredential);
            if (user) {
                // console.log(user)
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

    async function onFacebookButtonPress() {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
                throw 'User cancelled the login process';
            }
            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                throw 'Something went wrong obtaining access token';
            }
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            // Sign-in the user with the credential
            const user = await auth().signInWithCredential(facebookCredential);
            if (user) {
                // console.log(user);
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
    async function forgotPassword(Email) {
        if(Email){
        firebase.auth().sendPasswordResetEmail(Email)
            .then(function (user) {
                alert('Please check your email...')
            }).catch(function (e) {
                console.log(e)
            })
        }
        else{
            return;
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
                                    autoCapitalize='none'
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
                                    autoCapitalize="none"
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
                                    secureTextEntry={getVisible ? false : true}
                                />
                                <Animatable.View animation={textinput2Fossued ? "" : "fadeInLeft"} duration={400} >
                                    <Icon
                                        name={getVisible ? "visibility" : "visibility-off"}
                                        iconStyle={{ color: colors.grey3 }}
                                        type="material"
                                        style={{ marginRight: 10 }}
                                        onPress={() => {
                                            setVisible(!getVisible)
                                        }}
                                    />
                                </Animatable.View>
                            </View>
                        </View>

                        <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                            <Button
                                title="Đăng nhập"
                                buttonStyle={styles.styledButton}
                                titleStyle={styles.buttonTitle}
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                }
            </Formik>


            <View style={{ alignItems: "center", marginTop: 15 }}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={{ ...styles.text1, textDecorationLine: "underline" }} > Quên mật khẩu ?</Text>
                </TouchableOpacity>
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
                    onPress={() => { onFacebookButtonPress() }}
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible);}} >
                        <Icon1
                        size={20}
                        name="close"
                        style={{marginLeft:265,marginTop:-20}}
                        />
                        </TouchableOpacity>
                        <Text style={styles.modalText}>Quên mật khẩu</Text>
                        <Text style={styles.modalText1}>Nhập email của bạn. Chúng tôi sẽ gửi đường link để đặt lại mật khẩu.</Text>
                        <View>
                            <TextInput
                                style={styles.textinput3}
                                placeholder="example@gmail.com  "
                                ref={textinput1}
                                autoCapitalize='none'
                                onChangeText={setemail}
                                value={getemail}
                            />
                        </View>
                        <Button
                            title="Gửi Email"
                            buttonStyle={{alignContent:"center",borderRadius:15,height:45,width:250,backgroundColor:colors.blue,marginLeft:8}}
                            titleStyle={styles.buttonTitle}
                            onPress={() => {
                                forgotPassword(getemail)
                                setModalVisible(!modalVisible)
                            }}
                       />
                    </View>
                </View>
            </Modal>
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
    textinput3: {
        width:320,
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        width:320,
        height:50,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        fontSize:20,
        justifyContent:"center",
        alignItems:"center",
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    modalText1: {
        color: "black",
        fontSize: 15,
        marginTop:-5,
        marginBottom: 15,
        textAlign: "center"
    },
})