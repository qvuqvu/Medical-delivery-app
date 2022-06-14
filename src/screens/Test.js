import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../assets/language/i18n'
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Test = () => {

    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState('en');
    const changeLanguage = value => {
        i18n
            .changeLanguage(value)
            .then(() => setLanguage(value))
            .catch(err => console.log(err));
    };
    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage]);
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
                {t('hello')}{' '}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
                {t('this line is translated')}
            </Text>
        </View>
    );
};

export default Test;
