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


import { ImageStyle, TextStyle, ViewStyle, useColorScheme } from 'react-native';
import React, { createContext } from 'react';
export type Theme = { [key: string]: ViewStyle | TextStyle | ImageStyle };

const ThemeContext = createContext<any>({});

const lightTheme = {
  background: "#FFF",
  text: "#000",
  buttonText:'#FFF',
  textinputfield:'#FFF',
  textinputfieldborder: "#696969",
  secondary: "#686767",
  error: "#b00020",
  surface: "#ffffff",
  onPrimary: "#00000070",
  onSecondary: "white",
  tabicon:'#979797',
  subhead:'#686767',
  onError: "white",
  onSurface: "black",
  listplace:'#ADB3BC',
  border:'#444141',
  border2:'#2D2D2D',
  position:'#2D2D2D',
  bbutton:'#FFFFFF'
 
};

const darkTheme = {
  background: "#000",
  text: "#FFF",
  buttonText:'#000',
  textinputfield:'#272727',
  textinputfieldborder: "#696969",
  secondary: "#686767",
  error: "#cf6679",
  surface: "#121212",
  onPrimary: "#FFFFFF70",
  onSecondary: "#151515",
  tabicon:"#454545",
  subhead:'#7F7F82',
  onError: "black",
  onSurface: "white",
  listplace:'#ADB3BC',
  border:'#444141',
  border2:'#2D2D2D',
  position:'#FBFBFB',
  bbutton:'#464646'

};


export default function ThemeContent ({children} :{children : any}){
  const colorScheme = useColorScheme();
  return(
    <ThemeContext.Provider value={colorScheme === 'dark' ? darkTheme : lightTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext);

