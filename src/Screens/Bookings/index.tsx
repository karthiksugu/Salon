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
import { Text, View, StyleSheet, Dimensions, StatusBar, Image ,Pressable} from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';



const { width, height } = Dimensions.get('window');

interface BookingsProps {
    navigation: any;
}

const Bookings: React.FC<BookingsProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>
                    <Text style={[styles.mainheader, { color: theme.text }]}>Bookings</Text>
                </View>



                <View style={[styles.item, { borderColor: theme.border }]}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: 'https://uploads-ssl.webflow.com/61f6bdf6622ca14c87d8dac1/6464022cd9a97ebd3de17cf3_SalonMainImage.jpg' }} style={styles.image} />
                    </View>
                    <View style={{ flex: 1, paddingTop: height * 0.03, paddingHorizontal: 10 }}>
                        <Text style={[styles.name, { color: theme.text }]}>Hair Cut</Text>
                        <Text style={[styles.city, { color: theme.listplace }]}>Be a Man : Kochi</Text>
                        <Text style={[styles.employees, { color: theme.text }]}>Chair 1: </Text>

                         <View style={[styles.directionbutton,{borderColor: theme.border2}]}>
                        <Text style={[styles.directionButtontext, { color: theme.text }]}>Get Direction</Text> 
                        </View>
                    </View>
                    <Text style={[styles.currentpositiontextstyle, { color: theme.position }]}>Current Position</Text> 
                    <Text style={[styles.slotnumbertextstyle, { color: theme.text }]}>03</Text> 
                    <Text style={[styles.positiontextstyle, { color: theme.position }]}>Booking Position : 03</Text> 
                    <Text style={[styles.timeslottextstyle, { color: theme.position }]}>Time : 11:30 PM</Text> 


                    <View style={[styles.cancelbutton,{borderColor: theme.border2}]}>
                        <Text style={[styles.cancelbuttontext, { color: theme.text }]}>Cancel</Text> 
                    </View>



                </View>


            </SafeAreaView>
        </>

    )
}

export default Bookings;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    backarrowview: {

        marginTop: 35,
        flexDirection: 'row',
    },
    locationUsageview: {
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



    item: {
        flex: 0.5,
        marginBottom: 25,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 35,
        padding: 15
    },
    image: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Poppins-Bold',
        fontWeight: '500',
        marginVertical: 5,
    },
    city: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
        marginTop: 5,
    },

    currentpositiontextstyle: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight: 19,
        position:'absolute',
        left:20,
        bottom:120
    },
    positiontextstyle:{
        fontSize: 11,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight: 17,
        position:'absolute',
        right:20,
        bottom:110
    },
    slotnumbertextstyle:{
        fontSize: 96,
        fontWeight: '500',
        fontFamily: 'Poppins-Bold',
        lineHeight: 144,
        position:'absolute',
        left:15,
        bottom:10
    },
    timeslottextstyle:{
        fontSize: 20,
        fontWeight: '300',
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 50,
        position:'absolute',
        right:20,
        bottom:70
    },
    directionbutton:{  
        justifyContent: 'center',
        alignItems: 'center',
         paddingHorizontal: 5,
         borderWidth: 1, 
         height:height * 0.04 ,
         width : width * 0.25,
         marginTop: 15,
         borderRadius: 5
        },
    directionButtontext:{
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight: 15,
       
    },

    cancelbutton:{  
        justifyContent: 'center',
        alignItems: 'center',
         paddingHorizontal: 5,
         borderWidth: 1, 
         height:height * 0.04 ,
         width : width * 0.25,
         marginTop: 15,
         borderRadius: 5,
         position: 'absolute',
         bottom:40,
         right:20
        },
        cancelbuttontext:{
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
       
    }

})