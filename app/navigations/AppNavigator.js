// src/navigation/AppNavigator.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigator';
import LoggedInNavigator from './LoggedinNavigator';

const AppNavigator = () => {
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                setUserToken(token);
            } catch (error) {
                console.error('Failed to fetch the token from storage:', error);
            }
        };
        checkLoginStatus();
    }, []);


    return (
        <NavigationContainer>
            {userToken ? <LoggedInNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default AppNavigator;
