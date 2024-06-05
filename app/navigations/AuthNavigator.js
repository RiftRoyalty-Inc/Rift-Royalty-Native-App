import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import routes from '../utils/constants/routes';
import BottomTabNavigator from './BottomTabNavigator';
import Home from '../screens/home/Home';
import { Image, Text, View } from 'react-native';
import fonts from '../utils/constants/fonts';
import HeaderAuth from '../components/auth/HeaderAuth';
import VerificationEmail from '../screens/verificationemail/VerificationEmail';
import ChampionCard from '../screens/champion/ChampionCard';
import { useEffect } from 'react';
import { AuthContext } from '../../App';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    const { signIn } = React.useContext(AuthContext);

    return (
        <Stack.Navigator screenOptions={({ routes }) => ({
        })}>
            <Stack.Screen name={routes.LOGIN} component={Login} options={{ header: () => <HeaderAuth /> }} />
            <Stack.Screen name={routes.VERIFICATION_EMAIL} component={VerificationEmail} options={{ header: () => <HeaderAuth /> }} />
        </Stack.Navigator>
    );
}