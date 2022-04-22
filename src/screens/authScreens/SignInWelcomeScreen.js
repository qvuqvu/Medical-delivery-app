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
        <View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20}}>
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}} >DISCOVER </Text>
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>IN YOUR AREA</Text>
        </View>

        <View style={{flex:4,justifyContent:"center"}}>

        
        <Swiper autoplay={true}>
            <View style={styles.slide1}>
                <Image
                source={{uri:"https://cdnimg.vietnamplus.vn/uploaded/oqivokbb/2022_03_03/thuoc_2.jpg"}}
                style={{height:"100%",width:"100%"}}
                />
            </View>
            <View style={styles.slide2}>
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
            </View>
        </Swiper>
        </View>

        <View style={{flex:4,justifyContent:"flex-end",marginBottom:20}}>
        <View style={{marginHorizontal:20,marginTop:20}}>
                   <Button                   
                   title="SIGN IN"
                   buttonStyle={parameters.styledButton}
                   titleStyle={parameters.buttonTitle}
                   onPress={()=> 
                    navigation.navigate("SignInScreen")
                }
                
                   />
               </View>
               <View style={{marginHorizontal:20,marginTop:10}}>
                   <Button
                   title="Create an account"
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
        borderRadius:12,
        borderWidth:1,
        borderColor:"#1db0e3",
        height:40,
        paddingHorizontal:20,
        borderColor:colors.buttons
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