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
import { Text, View, StyleSheet, Dimensions, StatusBar, Pressable } from 'react-native';
import { useTheme } from '../../Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface LocationPermissionScreenProps {
    navigation: any;
}

const LocationPermissionScreen: React.FC<LocationPermissionScreenProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <Text style={[styles.logo, { color: theme.text }]}>What’s your location ?</Text>
                <Text style={[styles.subheader, { color: theme.text }]}>We need your location to show available Saloons</Text>

                <Pressable onPress={() => navigation.navigate('LocationPermissionScreen')}>
                    <LinearGradient colors={[theme.text, theme.text]} style={[styles.linearGradient, { borderColor: '#000', }]}>
                        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
                            Continue
                        </Text>
                    </LinearGradient>
                </Pressable>
                <Text onPress={() => navigation.navigate('LocationScreen')} 
                style={[styles.bottomtext, { color: theme.text }]}>Enter Location Manually</Text>

            </SafeAreaView>
        </>

    )
}

export default LocationPermissionScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25,



    },
    logo: {
        fontSize: 26,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 40,
        marginTop: 80
    },
    subheader: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 24,
        marginTop: 10
    }, linearGradient: {
        borderRadius: 5,
        marginTop: height * 0.55,
        height: 50,
        width: width * 0.875,
        borderWidth: 1,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        lineHeight: 27

    },   bottomtext: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        lineHeight: 24,
        marginTop: 20,
        marginHorizontal: width * 0.23,
    },
})