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
import { Text, View, StyleSheet, Dimensions, StatusBar,Pressable} from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input'



const { width, height } = Dimensions.get('window');

interface OTPScreenProps {
    navigation: any;
}

const OTPScreen: React.FC<OTPScreenProps> = ({ navigation}) => {
    const theme = useTheme()
    const [code,setCode] = useState('')



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>     
                           </View>
                <Text style={[styles.mainheader, { color: theme.text }]}>Otp</Text>
                <Text style={[styles.subheader, { color: theme.text }]}>We have sent a code to your Phone Number </Text>
                <Text style={[styles.subheader1, { color: theme.text }]}>+91 8592939239</Text>
                <Text style={[styles.subpartheader, { color: theme.secondary }]}>Enter Otp</Text>
                <View style={styles.textInputView}>
                <OTPInputView
                        style={{width: '80%', height: 75}}
                        pinCount={4}
                         code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged = {value => { setCode({value})}}
                        autoFocusOnLoad
                        codeInputFieldStyle={[styles.underlineStyleBase,{backgroundColor: theme.textinputfield}]}
                        onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}                       
/>
                </View>
                        <Pressable onPress={()=>navigation.navigate('LocationPermissionScreen')}>
                        <LinearGradient  colors={[theme.text, theme.onPrimary]} style={[styles.linearGradient,{borderColor: '#000',}]}>
                    <Text style={[styles.buttonText,{color:theme.buttonText}]}>
                       Submit
                    </Text>
                </LinearGradient>
                        </Pressable>
              
                <Text style={[styles.bottomheader, { color: theme.secondary }]}><Text onPress={()=>console.log('hi')} style={[styles.bottomsubheader, { color: theme.text }]}>Resend </Text> in .50sec</Text>
            </SafeAreaView>
        </>

    )
}

export default OTPScreen;

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
    subheader1: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        lineHeight: 24,
        marginTop: 5,
        textDecorationLine:'underline'
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
        width: width * 0.14,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }, textInputNumber: {
        height: height * 0.06,
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
        marginTop: 30,
        marginHorizontal: width * 0.3,
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
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: width * 0.17,
        height:  width * 0.15,
        marginRight: 24,
        borderWidth: 1,
        borderRadius: 5,
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
})