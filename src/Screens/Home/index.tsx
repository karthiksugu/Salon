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
import { Text, View, StyleSheet, Dimensions, StatusBar, SafeAreaView,Image,FlatList } from 'react-native';
import { useTheme } from '../../Themes';
import LocationIcon from '../../Components/assets/LocationIcon';
import LinearGradient from 'react-native-linear-gradient';
import DownArrowIcon from '../../Components/assets/DownArrow';
import BellIcon from '../../Components/assets/BellIcon';
import salons from '../../Components/Config/DummyData';
import Listing from '../../Components/Listing';
const { width, height } = Dimensions.get('window');

interface TopTabProps {
    navigation: any;
}

const TopTab: React.FC<TopTabProps> = ({ navigation }) => {
    const theme = useTheme()



    return (
        <>
            <StatusBar hidden={false} barStyle='light-content' backgroundColor={'transparent'} translucent={true} />
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
                <View style={styles.backarrowview}>
                    <LocationIcon color={theme.text} />
                    <Text style={[styles.mainheader, { color: theme.text }]}>Location</Text>
                    <DownArrowIcon color={theme.text} />
                    <Text style={[styles.AddressStyle, { color: theme.text }]}>Address</Text>
                    <View style={styles.belliconStyle}>
                    <BellIcon color={theme.text} />
                    </View>
                </View>

                <View style={styles.textInputView}>
                    <View style={[styles.textInputNumber, { backgroundColor: theme.textinputfield, borderColor: theme.textinputfieldborder }]}>

                    </View>
                </View>

                <View style={styles.subcategoryView}>
                    <Text style={[styles.bottomsubheader, { color: theme.subhead }]}>Services</Text>
                    <View style = {styles.submenuview}>
                        <View style={styles.menulist}>
                        <Image style={styles.menuicon} source={require('../../Components/assets/HomeMenu/HairCutIcon.png')}/>
                        <Text style={[styles.menutextstyle, { color: theme.text }]}>Hair Cut</Text>
                        </View>

                        <View style={styles.menulist}>
                        <Image style={styles.menuicon} source={require('../../Components/assets/HomeMenu/Shaving.png')}/>

                        <Text style={[styles.menutextstyle, { color: theme.text }]}>Shaving</Text>
                        </View>

                        <View style={styles.menulist}>
                        <Image style={styles.menuicon} source={require('../../Components/assets/HomeMenu/HairnShave.png')}/>

                        <Text style={[styles.menutextstyle, { color: theme.text }]}>Hair Cut &{'\n'} Shaving</Text>
                        </View>

                        <View style={styles.menulist}>
                        <Image style={styles.menuicon} source={require('../../Components/assets/HomeMenu/Facewash.png')}/>

                        <Text style={[styles.menutextstyle, { color: theme.text }]}>Face Wash</Text>
                        </View>

                    </View>
                </View>

               <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
               <Text style={[styles.contenthead, { color: theme.text }]}>Nearest Saloons</Text>
               <Text onPress={()=>navigation.navigate('Saloons')} style={[styles.contentsubheadd, { color: theme.subhead }]}>VIEW ALL</Text>
               </View>
                <Listing value={salons}/>

            </SafeAreaView>
        </>

    )
}

export default TopTab;

const styles = StyleSheet.create({

    logo: {
        fontSize: 54,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 81,


    },
    safeAreaContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    backarrowview: {

        marginTop: 65,
        flexDirection: 'row',
    },
    subcategoryView: {
        marginVertical: 20,
        //flexDirection: 'row',
        borderWidth: 0,
    },
    mainheader: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 24,
        marginLeft: 10,
        marginRight:2,
        marginTop: -2,
        
    },
    contenthead:{
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        lineHeight: 27,
        marginLeft: 10,
        marginRight:2,
        marginTop: -2,
    },
    contentsubheadd:{
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 18,
        marginTop: 5,
        textDecorationLine:'underline'

    },
    AddressStyle:{
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 2,
        position: 'absolute',
        top: 13,
        left:25,
        marginHorizontal: width * 0.02,
    },
    belliconStyle:{
        position: 'absolute',
        top: 1,
        right:1,
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

    }, bottomheader: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 40,
        marginHorizontal: width * 0.2,
    },
    bottomsubheader: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 18,
        marginTop: 2,
        marginHorizontal: width * 0.02,

    },
    borderBottom: {
        height: 1, // Border thickness
        width: '100%',
        marginTop: 10,
    },
    submenuview:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
    },
    menulist:{
        padding:1,
       
    },
    menuicon:{
        height:75,
        width:75
    },
    menutextstyle:{
        fontSize: 11,
        fontFamily: 'Poppins-Regular',
        fontWeight: '600',
        lineHeight: 21,
        marginTop: 2,
        marginHorizontal: width * 0.03,
    },
})