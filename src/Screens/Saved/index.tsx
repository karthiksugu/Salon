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
import { Text, View, StyleSheet, Dimensions, StatusBar,Pressable } from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';
import salons from '../../Components/Config/DummyData';
import Listing from '../../Components/Listing';


const { width, height } = Dimensions.get('window');

interface SavedProps {
    navigation: any;
}

const Saved: React.FC<SavedProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>
                    <Text style={[styles.mainheader, { color: theme.text }]}>Saved</Text>
                </View>
           
              

                <Listing value={salons}/>

             
            </SafeAreaView>
        </>

    )
}

export default Saved;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    backarrowview: {

        marginTop: 35,
        flexDirection: 'row',
    },
    locationUsageview:{
        marginTop: 20,
        flexDirection: 'row',
        borderWidth: 0,
    },
    mainheader: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 24,
        marginLeft: width * 0.26,
        marginTop: 12,
    },
    textInputView: {
        flexDirection: 'row',
        marginTop: 20,
    },
     textInputCode: {
        height: height * 0.065,
        width: width * 0.15,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }, textInputNumber: {
        height: height * 0.065,
        width: width * 0.88,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
       // marginLeft: 10,

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
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 2,
        marginHorizontal: width * 0.02,
       
    },
    borderBottom: {
        height: 1, // Border thickness
        width: '100%',
        marginTop: 10,
      },
})