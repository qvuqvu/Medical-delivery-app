import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, PermissionsAndroid, Image, Alert, ScrollView, AsyncStorage } from 'react-native';
import React, { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import HeaderAdress from '../components/HeaderAdress';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
import firestore from "@react-native-firebase/firestore"
import { nhathuoc1 } from '../global/Data';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerIcon: {
        width: 30,
        height: 30,
    }
});

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message:
                    "MEDILI App needs access to your location " +
                    "so you can see your current location.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
    } catch (err) {
        console.warn(err);
    }
};
const { width, height } = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
export default function Map({ navigation }) {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState("");
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    let i = 0;
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
    });
    const [far, setfar] = useState(0);
    const componentDidMount = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            var lat = parseFloat(position.coords.latitude)
            var long = parseFloat(position.coords.longitude)

            var initialRegion = {
                latitude: lat,
                longitude: long,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }

            setRegion(initialRegion)
            console.log(initialRegion)
        },
            (error) => alert(JSON.stringify(error)),
            { enableHighAccuracy: true });
    }
    useEffect(() => {
        componentDidMount()
    }, []);
    const [d, setD] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [marker, setMarker] = useState({ latitude: 0, longitude: 0 });
    const [getTotalData, setTotalData] = useState([]);
    useEffect(() => {
        firestore()
            .collection('Data')
            .doc('Nhathuoc1')
            .get()
            .then(documentSnapshot => {
                const data = documentSnapshot.data().Nhathuoc1;
                setTotalData(data)
            });
    }, [])
    const index = (item) => {
        setD({
            latitude: item.latitude,
            longitude: item.longitude,
        })
    }
    return (
        requestCameraPermission(),
        <View style={{ flex: 1 }}>
            <HeaderAdress navigation={navigation} title={t("?????a ch???")} />
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: parseFloat(region.latitude),
                        longitude: parseFloat(region.longitude),
                        latitudeDelta: parseFloat(region.latitudeDelta),
                        longitudeDelta: parseFloat(region.longitudeDelta),
                    }}
                >
                    <MapViewDirections
                        origin={
                            {
                                latitude: parseFloat(region.latitude),
                                longitude: parseFloat(region.longitude),
                            }
                        }
                        destination={{
                            latitude: parseFloat(d.latitude),
                            longitude: parseFloat(d.longitude),
                        }}
                        apikey={'AIzaSyBPJiW_244NDw39hMqRkLt2_Evm4TCMBXc'} // insert your API Key here
                        strokeWidth={5}
                        strokeColor="hotpink"
                        onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
                            setfar(result.distance)
                        }}

                    />
                    {getTotalData.map(marker => (

                        <Marker
                            onPress={() => { index(marker) }}

                            title={marker.nhathuoc}
                            description={'Kho???ng c??ch: ' + far + ' km'}
                            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
                            <Image style={styles.markerIcon}
                                source={{ uri: marker.markerImage }} />
                        </Marker>
                    ))

                    }
                    <Marker coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude,
                    }} />
                    <Marker
                        coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                    />
                </MapView>
            </View>
        </View >
    )
}