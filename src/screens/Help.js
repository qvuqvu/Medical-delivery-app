import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";
import {colors} from "../global/styles"
import HeaderSimple from "../components/HeaderSimple";


export default function Help({navigation}){
    return (
        <View>
             <HeaderSimple title="Trợ Giúp" navigation={navigation} />
             <View>
                <View>
                <Image
                 source={{uri:"https://i.pinimg.com/736x/20/5d/16/205d16e7df665e456a3cb0d8cde4deb7.jpg"}}
                 style={{width:390,height:320}}
                />
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{textAlign:"center",fontSize:23,fontWeight:"bold",color:"black"}}>Chúng tôi có thể giúp gì cho bạn ?</Text>
                </View>
                <View style={{marginTop:15,width:350,alignSelf:"center"}}>
                    <Text style={{textAlign:"center",fontSize:18,color:"black"}}> Có vẻ như bạn đang gặp vấn đề khi trải nghiệm Medili, nếu cần sự trợ giúp bạn có thể liên hệ chúng tôi</Text>
                </View>
                <ScrollView horizontal={true}>
                <View style={{borderWidth:1,width:170,marginLeft:10,marginTop:35,borderRadius:40,borderColor:colors.blue}}>
                    <Image
                    source={{uri:"https://cdn3.iconfinder.com/data/icons/office-business-1/512/touch2-256.png"}}
                    style={{width:100,height:130,alignSelf:"center"}}
                    />
                    <Text  style={{color:"black",alignSelf:"center",fontWeight:"bold"}}>19001810</Text>
                    <Text style={{marginTop:5,color:"black",alignSelf:"center",fontWeight:"bold"}}>Hotline</Text>
                </View>
                <View style={{borderWidth:1,width:170,marginLeft:30,marginTop:35,borderRadius:40,borderColor:colors.blue}}>
                    <Image
                    source={{uri:"https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/mailbox_mail_post_email-256.png"}}
                    style={{width:100,height:130,alignSelf:"center"}}
                    />
                    <Text  style={{color:"black",alignSelf:"center",fontWeight:"bold"}}>medili@gmail.com</Text>
                    <Text style={{marginTop:5,color:"black",alignSelf:"center",fontWeight:"bold"}}>Email</Text>
                </View>
                </ScrollView>
                </View>
        </View>
    )
}