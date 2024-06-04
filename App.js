import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import AuthNavigator from './app/navigations/AuthNavigator';
import LoggedInNavigator from './app/navigations/LoggedinNavigator';
import * as SecureStore from 'expo-secure-store';
import * as React from 'react';

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [userData, setUserData] = useState(null);
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );
    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);
    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async (data) => {
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

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
