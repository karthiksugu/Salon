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

const LogOutIcon = ({ width = 45, height = 45, color = 'white', gradientColor = 'white' }) => (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M0 16V0H8.02V1H1V15H8.02V16H0ZM12.462 11.538L11.76 10.819L14.079 8.5H5.192V7.5H14.079L11.759 5.18L12.462 4.462L16 8L12.462 11.538Z" fill={color}/>
    </Svg>
);

export default LogOutIcon;
