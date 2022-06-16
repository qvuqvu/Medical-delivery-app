import React from "react";
import {View,Text} from "react-native"
import HomeAdminHeader from "../components/HomeAdminHeader";

export default function ListOrder({navigation}){
    return (
       <View>
        <View>
                <HomeAdminHeader navigation={navigation} title="List Order" />
        </View>
       </View>
        
    )
}