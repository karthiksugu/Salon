/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-return-assign */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */


import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, StatusBar, TouchableOpacity,Pressable,BackHandler } from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window');

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
            <Pressable onPress= {() => BackHandler.exitApp() }style={styles.backarrowview}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>
                <Text style={[styles.mainheader, { color: theme.text }]}>Log In</Text>
                <Text style={[styles.subheader, { color: theme.text }]}>Please sign in to your existing account</Text>
                <Text style={[styles.subpartheader, { color: theme.secondary }]}>Enter Mobile Number</Text>
                <View style={styles.textInputView}>
                    <View style={[styles.textInputCode, { backgroundColor: theme.textinputfield, borderColor: theme.textinputfieldborder }]}>
                        <Text style={[styles.inputStyle, { color: theme.text }]}>+91</Text>

                    </View>
                    <View style={[styles.textInputNumber, { backgroundColor: theme.textinputfield, borderColor: theme.textinputfieldborder }]}>

                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('OTPScreen')}>
                <LinearGradient  colors={[theme.text, theme.onPrimary]} style={[styles.linearGradient,{borderColor: '#000',}]}>
                    <Text style={[styles.buttonText,{color:theme.buttonText}]}>
                       Get OTP
                    </Text>
                </LinearGradient>
                </TouchableOpacity>
               
                <Text style={[styles.bottomheader, { color: theme.secondary }]}>Don’t have an account?  <Text onPress={()=>navigation.navigate('SignUpScreen')} style={[styles.bottomsubheader, { color: theme.text }]}>Sign Up</Text></Text>
            </SafeAreaView>
        </>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    backarrowview: {

        marginVertical: 65
    },
    mainheader: {
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 48,
    },
    subheader: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 24,
        marginTop: 10
    },
    subpartheader: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 20
    }, textInputView: {
        flexDirection: 'row',
        marginVertical: 10,
    }, textInputCode: {
        height: height * 0.065,
        width: width * 0.15,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }, textInputNumber: {
        height: height * 0.065,
        width: width * 0.70,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        marginLeft: 10,

    }, inputStyle: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        fontWeight: '600',
        lineHeight: 27,

    },
    linearGradient: {
        borderRadius: 5,
        marginTop: 20,
        height:50,
        width:width * 0.875,
        borderWidth: 1,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        lineHeight:27
      
    },  bottomheader: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 40,
        marginHorizontal: width * 0.2,
    },
    bottomsubheader: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 20,
        marginHorizontal: width * 0.2,
        textDecorationLine:'underline'
    },
})