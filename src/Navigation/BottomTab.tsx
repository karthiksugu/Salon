/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
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



import React, { FunctionComponent, useEffect, useState } from 'react';
import { Dimensions, Image, View, Text, ImageBackground, SafeAreaView, StyleSheet, Platform, PermissionsAndroid,Alert ,Linking } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useTheme } from '../Themes';
import HomeTabIcon from '../Components/assets/BottomTab/HomeTabIcon';
import BookingTabIcon from '../Components/assets/BottomTab/BookingTabIcon';
import SavedTabIcon from '../Components/assets/BottomTab/SavedTabIcon';
import MyProfileTabIcon from '../Components/assets/BottomTab/MyProfileTabIcon';
import Bookings from '../Screens/Bookings'
import TopTab from '../Screens/Home';
import Saved from '../Screens/Saved';
import MyProfile from '../Screens/MyProfile';
// ------------ Import Images -------------------

export type BottomTabParamList = {
    TopTab: undefined;
    Bookings: undefined;
    Saved: undefined;
    MyProfile: any;
};

interface MyTabs {
    navigation: any;
}


const Tab = createBottomTabNavigator<BottomTabParamList>();

const MyTabs: FunctionComponent<MyTabs> = ({ navigation }) => {
    const route = useRoute();
    const theme = useTheme()

  


    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { backgroundColor: theme.onSecondary, height: Platform.OS == "ios" ? 100 : 85, justifyContent: 'center', borderTopWidth: 0 },
                    tabBarHideOnKeyboard: Platform?.OS === 'ios' ? false : true
                }}
            >
                <Tab.Screen name="TopTab" component={TopTab}
                    options={{
                        tabBarLabelStyle: { color: '#FFFFFF' },
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <>
                                    {!focused
                                        ?
                                        <View style={styles.iconView}>
                                            <View style={styles.chatIcon}>
                                            <HomeTabIcon color={theme.tabicon}/>
                                            </View>
                                        </View> 
                                        : 
                                            <View style={styles.chatIcon}>
                                            <HomeTabIcon color={theme.text}/>
                                                {/* <Text style={{ color: "white", backgroundColor: "red", position: 'absolute', right: -5, fontSize: 11, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 50 }}>18</Text> */}
                                            </View>
                                           
                                        }
                                </>
                            );
                        },
                    }}
                />
                <Tab.Screen name="Bookings" component={Bookings}
              
                    options={{
                        tabBarLabelStyle: { color: '#FFFFFF' },
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <>
                                    {!focused
                                        ? 
                                        <View  style={styles.iconView}>
                                            <View style={styles.chatIcon}>
                                            <BookingTabIcon color={theme.tabicon}/>
                                                {/* <Text style={{color:"white",backgroundColor:"red" ,position:'absolute',right:-5,fontSize:11,paddingHorizontal:4,paddingVertical:2,borderRadius:50}}>18</Text> */}
                                            </View>

                                        </View>
                                        :
                                      
                                            <View style={styles.chatIcon}>
                                            <BookingTabIcon color={theme.text}/>
                                                {/* <Text style={{ color: "white", backgroundColor: "red", position: 'absolute', right: -5, fontSize: 11, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 50 }}>18</Text> */}
                                            </View>
                                            
                                       
                                    }
                                </>
                            );
                        }
                    }}
                />

          
                    <Tab.Screen name="Saved" component={Saved}
                        options={{
                            tabBarLabelStyle: { color: '#FFFFFF' },
                            tabBarIcon: ({ size, focused, color }) => {
                                return (
                                    <>
                                        {!focused ?  
                                        
                                        <View style={styles.iconView}>
                                                <View style={styles.chatIcon}>
                                                <SavedTabIcon color={theme.tabicon}/>                                               
                                                </View>
                                                </View>
                                          
                                            :
                                          
                                                <View style={styles.chatIcon}>
                                                <SavedTabIcon color={theme.text}/> 
                                                </View>
                                               
                                          
                                        }
                                    </>

                                );
                            }

                        }}
                    />
                

                <Tab.Screen name="My Profile" component={MyProfile}
               
                    options={{
                        tabBarLabelStyle: { color: '#FFFFFF' },
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <>
                                    {!focused
                                        ?
                                        <View style={styles.iconView}>
                                            <View style={styles.chatIcon}>
                                            <MyProfileTabIcon color={theme.tabicon}/> 
                                            </View>
                                            </View>
                                       
                                        :
                                        <View style={styles.iconView}>
                                        <View style={styles.chatIcon}>
                                        <MyProfileTabIcon color={theme.text}/> 
                                        </View>
                                        </View>
                                    }
                                </>

                            );
                        }
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default MyTabs;

const styles = StyleSheet.create({
    iconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 73
    },
    chatIcon: {
        flex: 0.7,
        paddingTop: 5,
        position: 'relative'
    },
    chatText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold'
    }
})
