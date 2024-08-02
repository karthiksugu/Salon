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
import { Text, View, StyleSheet, Dimensions, StatusBar, Image, Pressable } from 'react-native';
import { useTheme } from '../../Themes';
import BackArrowDark from '../../Components/assets/BackArrowDark'
import { SafeAreaView } from 'react-native-safe-area-context';
import MyBookingsIcon from '../../Components/assets/MybookingsIcon';
import SideArrowIcon from '../../Components/assets/SideArrowIcon';
import LogOutIcon from '../../Components/assets/LogOutIcon';



const { width, height } = Dimensions.get('window');

interface MyProfileProps {
    navigation: any;
}

const MyProfile: React.FC<MyProfileProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                <Pressable onPress={()=>navigation.goBack()}>
                    <BackArrowDark width={45} height={45} color={theme.text} gradientColor={theme.text} />
                </Pressable>                  
                  <Text style={[styles.mainheader, { color: theme.text }]}>My Profile</Text>
                </View>

                <Image
                style={styles.profilepic}
                 source = {{uri:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp'}}/>

                    <View style ={styles.detailview}>
                    <Text style={[styles.nameStyle,{color:theme.position}]}>Mr. Ananthu  </Text>
                    <Text style={[styles.phonestyle,{color:theme.position}]}>7898864488 </Text>

                    <Text style={[styles.Editstyle,{color:theme.position}]}>Edit Profile </Text>


                    </View>

                    <Pressable onPress={()=>navigation.navigate('MyBookings')} style ={styles.backarrowview1}>
                    <MyBookingsIcon width={55} height={55} color={theme.text} gradientColor={theme.text} />
                    <Text style={[styles.menustyle, { color: theme.text }]}>My Bookings</Text>
                    <View  style={styles.sidearrowview} >
                    <SideArrowIcon width={45} height={45} color={theme.text} gradientColor={theme.text}/>
                    </View>
                    </Pressable>

                    <View style ={styles.backarrowview2}>
                    <MyBookingsIcon width={55} height={55} color={theme.text} gradientColor={theme.text} />
                    <Text style={[styles.menustyle, { color: theme.text }]}>Payments</Text>
                    <View  style={styles.sidearrowview} >
                    <SideArrowIcon width={45} height={45} color={theme.text} gradientColor={theme.text}/>
                    </View>
                    </View>
              

                    <View style ={styles.backarrowview2}>
                    <LogOutIcon width={55} height={55} color={theme.text} gradientColor={theme.text} />
                    <Text style={[styles.menustyle, { color: theme.text }]}>Logout</Text>
                    <View  style={styles.sidearrowview} >
                    <SideArrowIcon width={45} height={45} color={theme.text} gradientColor={theme.text}/>
                    </View>
                    </View>
 


            </SafeAreaView>
        </>

    )
}

export default MyProfile;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    backarrowview: {

        marginTop: 35,
        flexDirection: 'row',
    },
    backarrowview1: {

        marginTop: height * 0.10,
        flexDirection: 'row',
    },
    backarrowview2: {

        marginTop: height * 0.05,
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

    
       profilepic:{
        width:150,
        height: 150,
        borderRadius:75,
        position:'absolute',
        left:width*0.30,
        top:height*0.20

    },
    nameStyle:{
        fontFamily:'Poppins-Bold',
        fontSize:22,
        fontWeight:'500',
        lineHeight:32,
        
    },
    phonestyle:{
        fontFamily:'Poppins-Reqular',
        fontSize:14,
        fontWeight:'300',
        lineHeight:20,
    },
    Editstyle:{
        fontFamily:'Poppins-Regular',
        fontSize:12,
        fontWeight:'300',
        lineHeight:16,
        marginTop:10,
        textDecorationLine:'underline'
    },
    detailview:{
        marginTop:height*0.28,
        alignItems:'center'
    },
    menustyle:{
        fontFamily:'Poppins-SemiBold',
        fontWeight:'400',
        fontSize:14,
        lineHeight:21,
        marginLeft:20,
        marginTop:2
    },
    sidearrowview:{
        position:'absolute',
        right:5,
        top:3}

})