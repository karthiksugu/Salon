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
import { Text, View, StyleSheet, Dimensions, StatusBar, Image,Pressable } from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';



const { width, height } = Dimensions.get('window');

interface MyBookingsProps {
    navigation: any;
}

const MyBookings: React.FC<MyBookingsProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>           
                         <Text style={[styles.mainheader, { color: theme.text }]}>My Bookings</Text>
                </View>


              
                <View style={[styles.item1, { borderColor: theme.border }]}>
                <Text style={[styles.bookedtime, { color: theme.listplace }]}>Booked on : 09 Apr 2024 at 10.30 AM</Text>  
                <View style={[styles.item, { borderColor: theme.border }]}>
                    <View style={{ flex: 1 }}>
                        <Image source={{ uri: 'https://uploads-ssl.webflow.com/61f6bdf6622ca14c87d8dac1/6464022cd9a97ebd3de17cf3_SalonMainImage.jpg' }} style={styles.image} />
                    </View>
                    <View style={{ flex: 1.78,paddingHorizontal: 10 }}>
                        <Text style={[styles.name, { color: theme.text }]}> Hair Cut & Shaving</Text>
                        <Text style={[styles.city, { color: theme.listplace }]}>Be a Man : Kochi</Text>
                        <Text style={[styles.employees, { color: theme.text }]}>Chair 1 </Text>
                        <Text style={[styles.timeslottextstyle, { color: theme.position }]}>Tue, 09 Apr 2024 | 10:00 PM</Text>      
                    </View>
                    
                </View>
                
                <View style={{flexDirection:'row'}}>
                <View style={[styles.cancelbutton,{borderColor: theme.border2}]}>
                        <Text style={[styles.cancelbuttontext, { color: theme.buttonText }]}>Finished</Text> 
                    </View>
                    <View style={{height:height * 0.04,borderWidth:1,backgroundColor:'#fff',width:1,marginRight:10}}/>
                   
                    <View style={[styles.directionbutton,{borderColor: theme.border2,backgroundColor:theme.bbutton}]}>
                        <Text style={[styles.directionButtontext, { color: theme.text }]}>Add Review</Text> 
                    </View>
                    
                </View>
                    
                </View>



            

            </SafeAreaView>
        </>

    )
}

export default MyBookings;

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
        marginLeft: width * 0.22,
        marginTop: 12,
    },
    employees:{

        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: '300',
        lineHeight: 17,
        position:'absolute',
        right: 1,
        top: 16,

    },



    item: {
  
        flexDirection: 'row',
        borderRadius: 10,
       // borderWidth: 1,
     
        padding: 15
    },
    item1: {
    
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 50,
        paddingBottom:25
     
    },
    image: {
        width: width * 0.27,
        height: width * 0.25,
        borderRadius: 5,
    },
    name: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Poppins-Bold',
        fontWeight: '500',
        marginVertical: 5,
        marginTop:12
    },
    city: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
        marginTop: 2,
    },
    bookedtime:{
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
        marginTop: 2,
        position:'absolute',
        top:-25,
        left:5
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
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-SemiBold',
        lineHeight: 20,
        marginTop:12
        // position:'absolute',
        // right:20,
        // bottom:70
    },
    directionbutton:{  
        justifyContent: 'center',
        alignItems: 'center',
         paddingHorizontal: 5,
         borderWidth: 1, 
         height:height * 0.04 ,
         width : width * 0.45,
        // marginTop: 15,
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
         width :width * 0.27,
        backgroundColor:'#98FFFF',
         borderRadius: 5,
        marginHorizontal:14
        },
        cancelbuttontext:{
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
       
    }

})