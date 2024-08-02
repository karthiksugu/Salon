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


import React from 'react';
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const SideArrowIcon = ({ width = 45, height = 45, color = 'white', gradientColor = 'white' }) => (
    <Svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M1 11L6 6L1 1" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export default SideArrowIcon;
