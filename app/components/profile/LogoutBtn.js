import {
    StyleSheet,
    Text,
    Pressable,
    View
} from 'react-native'
import React from 'react'
import colors from '../../utils/constants/colors'
import fonts from '../../utils/constants/fonts'
import * as SecureStore from 'expo-secure-store';
import { AuthContext } from '../../../App';
const LogoutBtn = () => {
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Pressable style={styles.btn} onPress={signOut}>
                <Text style={styles.text}>Logout!</Text>
            </Pressable>
        </View>
    )
}
export default LogoutBtn

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingBottom: 24,
        paddingTop: 12,
        minWidth: '100%',
    },
    btn: {
        backgroundColor: colors.lightPurple,
        borderRadius: 6,
        padding: 10,
        borderColor: colors.contrast,
        borderWidth: 1,
        alignItems: 'center',
        minWidth: '100%',

    },
    text: {
        color: 'white',
        fontFamily: fonts.K2D_R,
        fontSize: 16
    }
})