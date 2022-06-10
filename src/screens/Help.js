import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native";
import { color } from "react-native-reanimated";
import HeaderSimple from "../components/HeaderSimple";


export default function Help({navigation}){
    return (
        <View>
             <HeaderSimple title="Trợ Giúp" navigation={navigation} />
             <View>
                <View>
                <Image
                 source={{uri:"https://symbols.vn/wp-content/uploads/2021/12/Tuyen-tap-Hinh-dai-dien-avatar-nu-sieu-cute-dang-yeu.jpg"}}
                 style={{width:390,height:300}}
                />
                </View>
                <View>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"black"}}>Chúng tôi có thể giúp gì cho bạn ?</Text>
                </View>
                <View>
                    
                </View>
             </View>
        </View>
    )
}