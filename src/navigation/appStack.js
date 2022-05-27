import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Success from '../global/Success';
import ProductInfo from '../global/ProductInfo';
import medical from '../screens/medical';
import DrawerNavigator from './DrawerNavigator';
import StoreDetail from '../screens/StoreDetail';
import MyShoppingScreen from '../screens/MyShoppingScreen';
import ProductCard from '../components/ProductCard';
import MyOrder from '../screens/MyOrder';
import Discount from '../screens/Discount';
import ChoiceVoucher from '../screens/ChoiceVoucher';


const App = createNativeStackNavigator();

export function AppStack() {

    return (
        <App.Navigator>

            <App.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }}
            />

            <App.Screen
                name="card"
                component={ProductCard}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="Success"
                component={Success}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="ProductInfo"
                component={ProductInfo}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="Medical"
                component={medical}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="StoreDetail"
                component={StoreDetail}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="MyShopping"
                component={MyShoppingScreen}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="Discount"
                component={Discount}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="MyOrder"
                component={MyOrder}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="ChoiceVoucher"
                component={ChoiceVoucher}
                options={{
                    headerShown: false,
                }} />

        </App.Navigator>
    )
}


