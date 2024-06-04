import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import AuthNavigator from './app/navigations/AuthNavigator';
import LoggedInNavigator from './app/navigations/LoggedinNavigator';
import * as SecureStore from 'expo-secure-store';

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    'K2D-B': require('./fonts/K2D-Bold.ttf'),
                    'K2D-R': require('./fonts/K2D-Regular.ttf'),
                    'K2D-L': require('./fonts/K2D-Light.ttf'),
                    'AOBOSHI-R': require('./fonts/AoboshiOne-Regular.ttf'),
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await SecureStore.getItemAsync('user_jwt');
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, [SecureStore.getItemAsync('user_jwt')]);

    useEffect(() => {
        console.log("buh")
        console.log(userData);
    }, [userData]);

    if (!appIsReady) {
        return (
            <Text style={{ padding: 24 }}>Loading...</Text>
        );
    }

    return (
        <NavigationContainer>
            {userData != null ? <LoggedInNavigator /> : <AuthNavigator setUserData={setUserData} />}
        </NavigationContainer>
    );
}
