import React, { useEffect, useState } from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import routes from '../../utils/constants/routes';
import fonts from '../../utils/constants/fonts';
import Checkbox from 'expo-checkbox';
import Environment from '../../utils/constants/Environment';
import colors from '../../utils/constants/colors';
import { SECRET_KEY } from '@env';
import * as Crypto from 'expo-crypto';
import sjcl from 'sjcl';
import { AuthContext } from '../../../App';

const LoginForm = () => {

    const { signIn } = React.useContext(AuthContext);
    const navigation = useNavigation();
    const [authStatus, setAuthStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [fieldsFilled, setFieldsFilled] = useState(true);
    const [focusedInput, setFocusedInput] = useState(null);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);
    const [isPasswordTouched, setIsPasswordTouched] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [errorCode, setErrorCode] = useState('');

    useEffect(() => {
        if (email !== '' && password !== '') {
            setFieldsFilled(true);
        } else {
            setFieldsFilled(false);
        }
    }, [email, password]);
    async function handleSignIn() {
        setAuthStatus(null);
        setIsLoading(true);
        try {
            const response = await fetch(`${Environment.USERS_API}/signin/`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'email': email,
                    'password': password
                },
            });
            const json = await response.json();
            setErrorCode(json.code);
            setErrorMsg(json.msg);
            if (json.code == 1) {
                signIn(json.token);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const getAuthStatus = () => {
        if (isLoading) {
            return <ActivityIndicator size="large" color="#D0D0D0" />
        }

        if (authStatus === 'USER_NOT_CREATED') {
            return <Text style={{ color: '#D0D0D0', fontFamily: fonts.AOBOSHI_R }}>Ha ocurrido un error al registrar el usuario</Text>
        }

        return <></>
    };

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleBlur = (inputName) => {
        setFocusedInput(null);
        if (inputName === 'email') setIsEmailTouched(true);
        if (inputName === 'username') setIsUsernameTouched(true);
        if (inputName === 'password') setIsPasswordTouched(true);
    };

    return (
        <View>
            <View>
                <Text style={[styles.text, { fontFamily: fonts.K2D_B }]}>Email</Text>
                <TextInput
                    style={[
                        styles.textInput,
                        focusedInput === 'email' ? styles.focusedInput : styles.unfocusedInput
                    ]}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="john_doe@example.com"
                    placeholderTextColor={'lightgray'}
                    keyboardType="email-address"
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                />
            </View>
            <View>
                <Text style={[styles.text, { fontFamily: fonts.K2D_B }]}>Password</Text>
                <TextInput
                    style={[
                        styles.textInput,
                        focusedInput === 'password' ? styles.focusedInput : styles.unfocusedInput
                    ]}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor={'lightgray'}
                    keyboardType="default"
                    secureTextEntry={true}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                />
            </View>
            {/* <View style={styles.checkboxContainer}>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#4630EB' : undefined}
                />
                <Text style={styles.text}>Remember me in this device</Text>
            </View> */}
            <View style={styles.msgContainer}>
                <Text style={errorCode != '1' ? styles.errorMsg : styles.successMsg}>{errorMsg}</Text>
            </View>
            <View style={[styles.btnContainer, fieldsFilled ? styles.activeBtnContainer : styles.disabledBtnContainer]}>
                <Pressable style={styles.btn} onPress={() => { if (fieldsFilled) { handleSignIn() } }}>
                    <Text style={[styles.text, { fontFamily: fonts.K2D_B }]}>SIGN IN</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    unfocusedInput: {
        borderColor: colors.lightPurple,
    },
    msgContainer: {

    },
    errorMsg: {
        color: colors.error,
        fontFamily: fonts.K2D_B
    },
    successMsg: {
        color: colors.success,
        fontFamily: fonts.K2D_B
    },
    focusedInput: {
        borderColor: colors.contrast,
    },
    validInput: {
        borderColor: 'green',
    },
    invalidInput: {
        borderColor: 'red',
    },
    textInput: {
        marginBottom: 10,
        marginTop: 4,
        padding: 10,
        borderWidth: 1,
        borderRadius: 6,
        color: 'white',
        minHeight: 39,
        backgroundColor: colors.inputBg,
    },
    text: {
        color: 'white',
        fontFamily: fonts.K2D_R,
        fontSize: 16
    },
    checkboxContainer: {
        display: 'flex', flexDirection: 'row', minWidth: '100%', gap: 10, marginVertical: 10
    },
    linkText: {
        fontWeight: 'bold', textDecorationLine: 'underline'
    },
    btnContainer: {
        borderRadius: 6, marginTop: 5
    },
    activeBtnContainer: {
        backgroundColor: '#595081',
        borderWidth: 1,
        borderColor: colors.contrast,
        borderRadius: 7
    },
    disabledBtnContainer: {
        backgroundColor: '#6C6C6C',
        borderWidth: 1,
        borderColor: colors.contrast,
        borderRadius: 7
    },
    btn: {
        paddingVertical: 10, alignItems: 'center', justifyContent: 'center'
    }
});

export default LoginForm;
