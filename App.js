import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text, LogBox } from 'react-native';
import * as Font from 'expo-font';
import { useState, useEffect } from 'react';
import AuthNavigator from './app/navigations/AuthNavigator';
import LoggedInNavigator from './app/navigations/LoggedinNavigator';
import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();
export default function App() {
    LogBox.ignoreLogs([
        'Require cycle:',
        'Bottom Tab Navigator',
    ]);
    const [appIsReady, setAppIsReady] = useState(false);
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
                // Restore token stored in `SecureStore` or any other encrypted storage
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };
        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                await SecureStore.setItemAsync('userToken', data);
                console.log("USER_TOWKEN")
                console.log(data);
                dispatch({ type: 'SIGN_IN', token: data });
            },
            signOut: async () => {
                await SecureStore.deleteItemAsync('userToken');
                dispatch({ type: 'SIGN_OUT' })
            },
            signUp: async (data) => {
                await SecureStore.setItemAsync('userToken', data);
                console.log("USER_TOKEN")
                console.log(data);
                dispatch({ type: 'SIGN_IN', token: data });
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

    if (!appIsReady) {
        return (
            <Text style={{ padding: 24 }}>Loading...</Text>
        );
    }

    // This automatically returns either the AuthenticationNavigator for Signing In and Signing Up
    // Or the LoggedInNavigator in the case a userToken is found, meaning there's a user currently signed in
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {state.userToken != null ? (<LoggedInNavigator />) : (<AuthNavigator />)}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
