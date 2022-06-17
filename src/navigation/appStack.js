import React, { useEffect } from 'react'
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
import MyOrderComplete from '../screens/MyOrderComplete';
import MyLastOrder from '../screens/MyLastOrder';
import News1 from "../screens/News1"
import News2 from '../screens/News2';
import News3 from '../screens/News3';
import News4 from '../screens/News4';
import News5 from '../screens/News5';
import MapAdress from '../screens/MapAdress';
import Map from '../screens/Map';
import auth from '@react-native-firebase/auth';
import firestore from "@react-native-firebase/firestore"
import { useDispatch } from "react-redux";
const App = createNativeStackNavigator();

export function AppStack() {
    const user = auth().currentUser;
    const dispatch = useDispatch();
    const updatelang = (value) => dispatch({
        type: "UPDATE_TO_LANGUAGE",
        payload: {
            language: value,
        },
    });
    useEffect(() => {
        firestore()
            .collection('User' + user.uid).onSnapshot((snapshot) => {
                snapshot.docs.map((doc) => {
                    updatelang(doc.data().isLanguage)
                });
            });
    }, []);
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
            <App.Screen
                name="MyOrderComplete"
                component={MyOrderComplete}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="MyLastOrder"
                component={MyLastOrder}
                options={{
                    headerShown: false,
                }} />
            <App.Screen
                name="News1"
                component={News1}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="News2"
                component={News2}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="News3"
                component={News3}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="News4"
                component={News4}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="News5"
                component={News5}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="MapAdress"
                component={MapAdress}
                options={{
                    headerShown: false,
                }}
            />
            <App.Screen
                name="Map"
                component={Map}
                options={{
                    headerShown: false,
                }}
            />
        </App.Navigator>
    )
}


