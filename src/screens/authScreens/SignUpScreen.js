import React, { useState } from "react";
import { StyleSheet,Text,View,ScrollView,TextInput, Alert,TouchableOpacity, Platform} from "react-native";
import {colors, parameters,title } from "../../global/styles";
import Header from "../../components/Header"
import { Formik } from "formik";
import auth1 from '@react-native-firebase/auth';
import {Icon,Button} from "react-native-elements"
import * as Animatable from "react-native-animatable"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { SignInContext } from '../../contexts/authContext';
import DatetimePicker from "@react-native-community/datetimepicker"

const SignUpScreen=({navigation})=>{

    const[passwordFocussed,setPasswordFocussed]=useState(false)
    const[passwordBlured,setPasswordBlured]=useState(false)
    const[phonenumber,setphonenumber]=useState("");
    const[fullname,setfullname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[address,setaddress]=useState("");
    const[sex,setsex]=useState("");
    const[date,setdate]=useState(new Date());
    const[mode,setmode]=useState('date');
    const[show,setShow]=useState(false);

    const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    const onChange=(event,selectedDate)=>{
        const currentDate=selectedDate||date;
        setShow(false);
        setdate(currentDate);  
    };
;
    const showMode=(currentMode)=>{
        setShow(true);
        setmode(currentMode);
    };

    const showDatepicker=()=>{
        showMode("date");
    };

    async function signUp(){
        try{
            await auth().createUserWithEmailAndPassword(email,password)
            console.log("USER ACCOUNT CREATED")
            const user = auth().currentUser;
            firestore().collection('User'+user.uid).add({
                phone_number:phonenumber,
                full_name:fullname,
                datetime:formattedDate,
                address:address,
                sex:sex
            }).then(()=>{
                console.log("User add!");
            })
            
        }
        catch(error){
            if(error.code=='auth/email-already-in-use'){
                Alert.alert(
                    'That email address is already inuse'
                )
            }
            if(error.code=='auth/invalid-email'){
                Alert.alert(
                    'That email address is invalid'
                )
            }
            else{
                Alert.alert(error.code)
            }
        }
    }

    return(
        <View style={styles.container}>
             <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation}/>
        <ScrollView keyboardShouldPersistTaps="always">
            <View style={styles.view1}>
                <Text style={styles.text1}>Đăng ký</Text>
            </View>
                <View style={styles.view2}>
                        <View>
                            <Text style={styles.text2}>Tài khoản mới với MedSOS ?</Text>
                        </View>
                            <View style={styles.view6}>
                                <TextInput
                                placeholder="Mobile Number"
                                style={styles.input1}
                                keyboardType="number-pad"
                                autoFocus={true}
                                onChangeText={(txt)=>setphonenumber(txt)}
                                value={phonenumber}
                                />
                            </View>
                            <View style={styles.view6}>
                                <TextInput
                                placeholder="Name"
                                style={styles.input1}
                                autoFocus={false}
                                onChangeText={(txt)=>setfullname(txt)}
                                value={fullname}
                                />
                               
                            </View>
                            <View style={{width:365,marginTop:15}}>
                                <Button onPress={showDatepicker} title="Ngày sinh"/>
                                {show &&(
                                    <DatetimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                    />
                                )}
                              
                            </View>
                            <View style={styles.view10}>
                                <View>
                                    <Icon
                                    name="email"
                                    style={styles.email}
                                    color={colors.grey3}
                                    type="material"
                                    />
                                </View>
                                <View style={styles.view11}>
                                <TextInput
                                placeholder="Email"
                                style={styles.input4}
                                autoFocus={false}
                                onChangeText={(txt)=>setemail(txt)}
                                value={email}
                                />
                            </View>
                            </View>
                            <View style={styles.view14}>
                                <Animatable.View animation={passwordFocussed? "fadeInRight":"fadeInLeft"} duration={400}>
                                    <Icon
                                    name="lock"
                                    color={colors.grey3}
                                    type="material"
                                    style={{marginRight:10}}
                                    />
                                </Animatable.View>
                                <TextInput
                                placeholder="Password"
                                style={{flex:1}}
                                autoFocus={false}
                                onChangeText={(txt)=>setpassword(txt)}
                                value={password}
                                onFocus={()=>{setPasswordFocussed(true)}}
                                onBlur={()=>{setPasswordBlured(true)}}
                                />
                                 <Animatable.View animation={passwordBlured ? "fadeInLeft":"fadeInRight"} duration={400}>
                                    <Icon
                                    name="visibility-off"
                                    color={colors.grey3}
                                    type="material"
                                    style={{marginRight:10}}
                                    />
                                </Animatable.View>
                            </View>
                            <View style={styles.view15}>
                                    <Text style={styles.text3}>
                                        Tạo tài khoản hoặc đăng nhập vào tài khoản của bạn
                                    </Text>
                                    <View style={styles.view16}>
                                        <Text style={styles.text3}>Đồng ý với chúng tôi </Text>
                                        <Text style={styles.text4}>Điều khoản & Điều Kiện </Text>
                                        <Text style={styles.text3}>và</Text>
                                    </View>
                                    <Text style={styles.text4}>Cam kết bảo mật</Text>
                                </View>
                                <View style={styles.view17}>
                                    <Button
                                    title="Tạo tài khoản"
                                    buttonStyle={styles.button1}
                                    titleStyle={styles.title1}
                                    onPress={signUp}
                                    />
                                </View>
                        </View>    
            <View style={styles.view18}>
                <Text style={styles.text5}>OR</Text>
            </View>
            <View style={styles.view19}>
                <View style={styles.view20}>
                    <Text style={{color:colors.grey1}}>Bạn đã sẵn sàng tạo một tài khoản với MedSOS ?</Text>
                </View>
                <View style={[styles.view21,{marginTop:16}]}>
                    <Button
                    title="Đăng nhập"
                    buttonStyle={styles.button2}
                    titleStyle={styles.title2}
                    onPress={()=>{navigation.navigate('SignInScreen')}}
                    />
                </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default SignUpScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    view1:{
        justifyContent:"center",
        marginTop:10,
        marginBottom:10,
        paddingHorizontal:15,
        marginLeft:110,
    },
    text1:{
        fontSize:28,
        color:colors.buttons,
        fontWeight:"bold",
        marginLeft:17
    },
    view2:{
        justifyContent:"flex-start",
        backgroundColor:"white",
        paddingHorizontal:15,
    },
    view3:{
        marginTop:5,
        marginBottom:10,
    },
    text2:{
        fontSize:15,
        color:colors.grey2
    },
    view4:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.grey4,
        paddingLeft:5,
    },
    view5:{
        marginLeft:30,
        marginTop:20,
    },
    input1:{
        fontSize:16,
    },
    view6:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48
    },
    view7:{
        marginLeft:0,
        maxWidth:"65%",
    },
    input2:{
        fontSize:16,
        marginLeft:0,
        marginBottom:0,
    },
    view8:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:5,
        marginTop:20,
        height:48,
    },
    view9:{
        marginLeft:0,
        maxWidth:"65%",
    },
    input3:{
        fontSize:16,
        marginLeft:0,
        marginBottom:0,
    },
    view10:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:colors.grey4,
        borderRadius:12,
        paddingLeft:15,
        marginTop:20,
        height:48,
    },
    email:{
        fontSize:24,
        padding:0,
        marginBottom:0,
        marginTop:11,
        marginLeft:2
    },
    view11:{
        marginLeft:30,
        maxWidth:"65%",
    },
    input4:{
        fontSize:16,
        marginLeft:-20,
        marginBottom:-10,
    },
    view13:{
        flexDirection:"row",
        height:40,
    },
    view14:{
        borderWidth:1,
        borderRadius:12,
        borderColor:colors.grey4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        alignItems:"center",
        paddingLeft:5,
        marginTop:20,
    },
    view15:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:10
    },
    text3:{
        fontSize:13,
    },
    view16:{
        flexDirection:"row"
    },
    text4:{
        textDecorationLine:"underline",
        color:"green",
        fontSize:13
    },
    button1:{
        backgroundColor:colors.buttons,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:45,
        paddingHorizontal:20,
        width:"100%",
    },
    title1:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
    },
    view17:{
        marginVertical:10,
        marginTop:30,
    },
    view18:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    text5:{
        fontSize:15,
        fontWeight:"bold",
    },
    view19:{
        backgroundColor:"white",
        paddingHorizontal:15,
    },
    view20:{
        marginTop:5
    },
    view21:{
        marginTop:5,
        alignItems:"flex-end"
    },
    button2:{
        backgroundColor:colors.backgroundColor,
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.backgroundColor,
        height:40,
        paddingHorizontal:20,
    },
    title2:{
        color:colors.buttons,
        fontSize:16,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3,
    }
})