import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Pressable,
    Image,
} from 'react-native';
import React, { act, useEffect, useState } from 'react';
import fonts from '../../utils/constants/fonts';
import colors from '../../utils/constants/colors';
import Environment from '../../utils/constants/Environment';
import { getRandomNumber } from '../../utils/RandomNumber';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';


const LinkAccountPopup = ({ displayLinkAccount, setDisplayLinkAccount }) => {

    const [activeStep, setActiveStep] = useState(1);
    const [currentProfileIconId, setCurrentProfileIconId] = useState(null);
    const [debug, setDebug] = useState(false);
    const [gameName, setGameName] = useState('');
    const [tagLine, setTagLine] = useState('');
    const [region, setRegion] = useState('EUW1');
    const [validName, setValidName] = useState(false);
    const [iconToChangeTo, setIconToChangeTo] = useState(null);
    const [iconChanged, setIconChanged] = useState(false);
    async function handleStepChange() {
        if (debug) {
            // setActiveStep(activeStep + 1);
            return 0;
        }

        if (activeStep == 1 && debug == false) {
            console.log(`${Environment.RR_API}/summoners/summonericon?gameName=${gameName}&tagLine=${tagLine}&region=${region}`);
            setCurrentProfileIconId(await
                fetch(`${Environment.RR_API}/summoners/summonericon?gameName=${gameName}&tagLine=${tagLine}&region=${region}`)
                    .then(response => response.json())
                    .then(data => { console.log(data); setIconToChangeTo(getRandomNumber(1, 10, data.profileIconId)); return data.profileIconId; })
                    .catch(error => { console.log(error); })
            );
        }

        if (activeStep == 2 && debug == false) {
            const URL = `${Environment.RR_API}/summoners/linkaccount?region=${encodeURIComponent(region)}&gameName=${encodeURIComponent(gameName)}&tagLine=${encodeURIComponent(tagLine)}&profileIconId=${encodeURIComponent(currentProfileIconId)}&newIcon=${encodeURIComponent(iconToChangeTo)}`;
            console.log(URL);
            setIconChanged(
                await fetch(URL, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'userToken': await SecureStore.getItemAsync('userToken'),
                    }
                })
                    .then(response => response.json())
                    .then(data => { console.log(data); return data.code; })
                    .catch(error => console.log(error))
            );
        }

        if (activeStep == 3 && debug == false) {
            console.log("buh");
            setDisplayLinkAccount(false);
        }

    }

    useEffect(() => {
        setActiveStep(1);
        setCurrentProfileIconId(null);
        setIconToChangeTo(null);
        setIconChanged(false);
        setValidName(false);
        setTagLine('');
        setGameName('');
    }, [displayLinkAccount])

    useEffect(() => {
        if (iconChanged == 200 && activeStep == 2) {
            setActiveStep(activeStep + 1);
        }
    }, [iconChanged])

    useEffect(() => {
        if (currentProfileIconId != "undefined" && currentProfileIconId != null && activeStep == 1) {
            setActiveStep(activeStep + 1);
        }
    }, [currentProfileIconId]);

    function handleTextChange(text) {
        const regex = /.*\S#\S.*/;
        const containsHashBetweenText = regex.test(text);
        if (containsHashBetweenText) {
            setValidName(true);
            console.log(` == ${text} ==`)
            setGameName(text.split('#')[0]);
            setTagLine(text.split('#')[1]);

        } else {
            setValidName(false);
        }
    }

    const handleStepContent = () => {
        switch (activeStep) {
            case 1:
                return (
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor={colors.grayText}
                        onChangeText={(text) => { handleTextChange(text) }}
                        placeholder='GameName#EUW1'
                    />
                );
                break;
            case 2:
                return (
                    <View style={styles.profileIconsContainer}>
                        <Image
                            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon/${currentProfileIconId}.png` }}
                            style={styles.activeProfileIcon}
                        />
                        <Entypo name="arrow-with-circle-right" size={64} color={colors.contrast} />
                        <Image
                            source={{ uri: `https://ddragon.leagueoflegends.com/cdn/14.11.1/img/profileicon/${iconToChangeTo}.png` }}
                            style={styles.activeProfileIcon}
                        />
                    </View>
                );
                break;
            case 3:
                return (
                    <View style={styles.successContainer}>
                        <AntDesign name="checkcircleo" size={48} color={colors.success} style={styles.textCenter} />
                        <Text style={[styles.text, styles.textCenter, styles.success]}>Account linked successfully</Text>
                    </View>
                );
                break;
            default:
                return (<></>);
                break;
        }
    }

    const returnButtonText = (activeStep) =>{
        switch (activeStep) {
            case 1:
                return 'Next';
                break;
            case 2:
                return 'I changed my Summoner Icon';
                break;
            case 3:
                return 'Finish';
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.content}>
            <View>
                <Text style={[styles.text, styles.bold,]}>Link your League of Legends Account!</Text>
                <Text style={[styles.text, activeStep === 1 ? styles.focusText : null]}>1. Enter your Game Name + Tag Line</Text>
                <Text style={[styles.text, activeStep === 2 ? styles.focusText : null]}>2. Change your Summoner Icon To The Displayed One</Text>
                <Text style={[styles.text, activeStep === 3 ? styles.focusText : null]}>3. Finish!</Text>
            </View>
            {handleStepContent()}
            <Pressable style={[styles.stepsBtn, validName ? styles.activeButton : styles.inactiveButton]} onPress={validName ? handleStepChange : null}>
                <Text style={[styles.text, styles.bold, styles.textCenter]}>{returnButtonText(activeStep)}</Text>
            </Pressable>
        </View>
    );
}

export default LinkAccountPopup

const styles = StyleSheet.create({
    success: {
        color: colors.success
    },
    hide: {
        display: 'none',
    },
    focusText: {
        color: colors.contrast
    },
    profileIconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
    },
    content: {
        backgroundColor: colors.bgPurple,
        minHeight: 247,
        minWidth: 340,
        borderRadius: 7,
        borderColor: colors.contrast,
        borderWidth: 1,
        paddingHorizontal: 22,
        gap: 20,
        paddingVertical: 40
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.K2D_R,
        color: 'white',
    },
    bold: {
        fontFamily: fonts.K2D_B
    },
    textInput: {
        backgroundColor: colors.inputBg,
        borderWidth: 1,
        borderColor: colors.lightPurple,
        borderRadius: 7,
        color: 'white',
        minHeight: 47,
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: fonts.K2D_R,
    },
    textCenter: {
        textAlign: 'center'
    },
    stepsBtn: {
        backgroundColor: '#595081',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: colors.contrast,
        paddingVertical: 8,
    },
    inactiveButton: {
        backgroundColor: colors.disabledBtn
    },
    activeProfileIcon: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: colors.contrast,
        borderRadius: 40
    }
})