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



import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from './RootNavigator';
import SplashScreen from "../Screens/SplashScreen";
import LoginScreen from "../Screens/Login";
import SignUpScreen from "../Screens/SignUp";
import OTPScreen from '../Screens/OtpScreen';
import LocationPermissionScreen from '../Screens/LocationPermission'
import LocationScreen from '../Screens/Location'
import MyTabs from './BottomTab';
import Saloons from "../Screens/Saloons";
import MyBookings from '../Screens/MyBookings'

export type RootStackParamList = {
    SplashScreen: any ;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator: React.FC  = () =>{
    const routeNameRef = React.createRef();
    const [currentRootName, setCurrentRootName] = React.useState('SplashScreen')


    return(
        <NavigationContainer
        ref={navigationRef}
        onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}
        onStateChange={() => {
            const currentRouteName = navigationRef.current.getCurrentRoute().name
            setCurrentRootName(currentRouteName)
        }}
        >
            <Stack.Navigator screenOptions={{headerShown:false,gestureEnabled:false}}>
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
                <Stack.Screen name='OTPScreen' component={OTPScreen}/>
                <Stack.Screen name='LocationPermissionScreen' component={LocationPermissionScreen}/>
                <Stack.Screen name='LocationScreen'  component={LocationScreen}/>
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="Saloons" component={Saloons}/>
                <Stack.Screen name="MyBookings" component={MyBookings}/>


                
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default StackNavigator;