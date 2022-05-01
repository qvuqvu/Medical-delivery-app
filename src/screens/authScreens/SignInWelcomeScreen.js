import React,{useState,useRef} from "react";
import { View,Text,StyleSheet,Dimensions, TextInput,Image } from "react-native";
import {colors, parameters,title } from "../../global/styles";
import { Icon,Button,SocialIcon } from "react-native-elements";
import Header from "../../components/Header";
import * as Animatable from "react-native-animatable"
import Swiper from "react-native-swiper";


export default function SignInWelcomeScreen({navigation}){
    return (
        <View style={{flex:1}}>
        <View style={{flex:4,justifyContent:"center",marginTop:60}}>
        {/* <Swiper autoplay={true} style={{marginTop:5}}> */}
            <View>
                <Image
                source={require('../../global/image/medical.png')}
                style={{height:"100%",width:"100%"}}
                />
            </View>
            {/* <View style={styles.slide2}>
                <Image
                source={{uri:"https://suckhoedoisong.qltns.mediacdn.vn/Images/hahien/2017/06/09/Univadis_9.6_Mot_so_thuoc_tim_mach_co_the_lam_tang_nguy_co_nga_BS_P.Lien.jpg"}}
                style={{height:"100%",width:"100%"}}
                />
            </View>
            <View style={styles.slide3}>
                <Image
                source={{uri:"https://hovo.vn/wp-content/uploads/2021/04/HDH_0278.jpg"}}
                style={{height:"100%",width:"100%"}}
                />
            </View>
            <View style={styles.slide3}>
                <Image
                source={{uri:"https://chupanhsanpham.com.vn/wp-content/uploads/2017/12/Untitled-Catalog-00263.jpg"}}
                style={{height:"100%",width:"100%"}}
                />
            </View> */}
        {/* </Swiper> */}
        </View>
        <View>
            <Text style={{marginLeft:30,marginTop:20,fontWeight:"bold",color:colors.welcome,fontSize:28}}>Chào mừng!</Text>
            <Text style={{marginLeft:30,fontSize:18}}>Tạo tài khoản hoặc đăng nhập để đặt thuốc ngay trên</Text>
            <Text style={{marginLeft:160,marginTop:-24,fontSize:18,fontWeight:"bold",color:colors.grey1}}>MedSOS</Text>
        </View>
        <View style={{flex:4,marginBottom:20,marginTop:40}}>
        <View style={{marginHorizontal:20,marginTop:20}}>
                   <Button                   
                   title="Đăng nhập"
                   buttonStyle={parameters.styledButton}
                   titleStyle={parameters.buttonTitle}
                   onPress={()=> 
                    navigation.navigate("SignInScreen")
                }
                
                   />
               </View>
               <View style={{marginHorizontal:20,marginTop:10}}>
                   <Button
                   title="Đăng ký"
                   buttonStyle={styles.createButton}
                   titleStyle={styles.createButtonTittle}
                   onPress={()=>{navigation.navigate("SignUpScreen")}}
                   />
               </View>
        </View>

        </View>
    )
}

const styles=StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9DD6EB"
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:25,
        borderWidth:1,
        borderColor:"#1db0e3",
        height:45,
        paddingHorizontal:20,
        borderColor:colors.buttons,
        width:250,
        marginLeft:32
    },
    createButtonTittle:{
        color:colors.grey1,
        fontSize:18,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }

})