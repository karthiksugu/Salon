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
import { Text, View, StyleSheet, Dimensions, StatusBar,FlatList,Image } from 'react-native';
import { useTheme } from '../Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import RatingStarIcon from './assets/RatingStarIcon';


const { width, height } = Dimensions.get('window');

interface ListingProps {
    navigation: any;
    value:any
}

const Listing: React.FC<ListingProps> = ({ navigation,value }) => {
    const theme = useTheme()
console.log(value)


    return (
        <>
            <SafeAreaView style={[styles.safeAreaContainer, { backgroundColor: theme.background }]}>
            <FlatList
                showsVerticalScrollIndicator ={false}
                data={value.salons}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                <View style={styles.item}>
                    <View style={{flex: 1,}}>
                    <Image source={{ uri: item.photo }} style={styles.image} />
                    </View>
                    <View style={{flex: 1,paddingTop: height *0.03,}}>
                    <Text style={[styles.name,{color:theme.text}]}>{item.name}</Text>
                    <RatingStarIcon/>
                    <Text style={[styles.rating,{color:theme.text}]}> {item.rating}  <Text style={[styles.totalrating,{color:theme.text}]}>{'(1k+)'}</Text></Text>
                    <Text style={[styles.city,{color:theme.listplace}]}>{item.city} - <Text style={styles.distance}>{item.distance}</Text></Text>
                    <Text style={[styles.employees,{color:theme.text}]}>After: {item.number_of_employees} <Text style={[styles.subemployees,{color:theme.text}]}>persons</Text></Text>
                    </View>
                  
                   
                </View>
                )}
            />
             
            </SafeAreaView>
        </>

    )
}

export default Listing;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
       // paddingHorizontal: 25
    },
    item: {
        //backgroundColor: '#fff',
       // padding: 15,
        marginBottom: 25,
        flexDirection: 'row',
        borderRadius: 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        elevation: 0.01,
      },
      image: {
        width: width * 0.4,
        height: width * 0.4,
        borderRadius: 5,
      },
      name: {
        fontSize: 16,
        lineHeight:24,
        fontFamily: 'Poppins-Bold',
        fontWeight: '500',
        marginVertical: 5,
      },
      city: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        lineHeight:21,
        marginTop: 5,
      },
      rating: {
        fontSize: 14,
        lineHeight:21,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        marginVertical: 5,
        position: 'absolute',
        left:width * 0.06,
        top: height * 0.065
      },
      totalrating: {
        fontSize: 12,
        lineHeight:18,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        marginVertical: 5,
      },
      distance: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        lineHeight:21
      },
      employees: {
        fontSize: 14,
        fontWeight: '300',
        fontFamily: 'Poppins-SemiBold',
        lineHeight:19,
        marginTop: 8,
      },
     subemployees: {
        fontSize: 10,
        fontWeight: '300',
        fontFamily: 'Poppins-Regular',
        lineHeight:15,
        marginTop: 8,
      },
})