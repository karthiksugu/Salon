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

const HomeTabIcon = ({ width = 45, height = 45, color = 'white', gradientColor = 'white' }) => (
<Svg width="33" height="53" viewBox="0 0 33 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M17.8347 4.32585L18.1198 4.58199H18.1212L26.0858 11.7385C26.0859 11.7386 26.086 11.7387 26.0861 11.7388C26.2163 11.856 26.3204 11.9991 26.3917 12.1591C26.463 12.3191 26.4999 12.4923 26.5 12.6675C26.5 12.6676 26.5 12.6676 26.5 12.6677V23.25C26.5 23.5815 26.3683 23.8994 26.1339 24.1339C25.8995 24.3683 25.5815 24.5 25.25 24.5H22.25C21.9185 24.5 21.6005 24.3683 21.3661 24.1339C21.1317 23.8994 21 23.5815 21 23.25V17.25C21 16.7859 20.8156 16.3407 20.4874 16.0125C20.1592 15.6844 19.7141 15.5 19.25 15.5H14.75C14.2859 15.5 13.8408 15.6844 13.5126 16.0126C13.1844 16.3407 13 16.7859 13 17.25V23.25C13 23.5815 12.8683 23.8995 12.6339 24.1339C12.3995 24.3683 12.0815 24.5 11.75 24.5H8.75C8.41848 24.5 8.10054 24.3683 7.86612 24.1339C7.6317 23.8994 7.5 23.5815 7.5 23.25V12.6677C7.5 12.6676 7.5 12.6676 7.5 12.6675C7.50007 12.4923 7.53696 12.3191 7.60829 12.1591C7.67964 11.999 7.78385 11.8557 7.91417 11.7386L16.1638 4.32585C16.1638 4.32584 16.1639 4.32583 16.1639 4.32582C16.3933 4.1197 16.6908 4.00568 16.9993 4.00568C17.3077 4.00568 17.6052 4.11971 17.8347 4.32585Z" stroke={color} stroke-width="2"/>
<Path d="M6.85068 40.333V48H5.84968V44.524H1.94468V48H0.94368V40.333H1.94468V43.699H5.84968V40.333H6.85068ZM11.1889 48.099C10.6242 48.099 10.1109 47.9707 9.64889 47.714C9.19422 47.4573 8.83489 47.0943 8.57089 46.625C8.31422 46.1483 8.18589 45.5983 8.18589 44.975C8.18589 44.359 8.31789 43.8163 8.58189 43.347C8.85322 42.8703 9.21989 42.5073 9.68189 42.258C10.1439 42.0013 10.6609 41.873 11.2329 41.873C11.8049 41.873 12.3219 42.0013 12.7839 42.258C13.2459 42.5073 13.6089 42.8667 13.8729 43.336C14.1442 43.8053 14.2799 44.3517 14.2799 44.975C14.2799 45.5983 14.1406 46.1483 13.8619 46.625C13.5906 47.0943 13.2202 47.4573 12.7509 47.714C12.2816 47.9707 11.7609 48.099 11.1889 48.099ZM11.1889 47.219C11.5482 47.219 11.8856 47.1347 12.2009 46.966C12.5162 46.7973 12.7692 46.5443 12.9599 46.207C13.1579 45.8697 13.2569 45.459 13.2569 44.975C13.2569 44.491 13.1616 44.0803 12.9709 43.743C12.7802 43.4057 12.5309 43.1563 12.2229 42.995C11.9149 42.8263 11.5812 42.742 11.2219 42.742C10.8552 42.742 10.5179 42.8263 10.2099 42.995C9.90922 43.1563 9.66722 43.4057 9.48389 43.743C9.30056 44.0803 9.20889 44.491 9.20889 44.975C9.20889 45.4663 9.29689 45.8807 9.47289 46.218C9.65622 46.5553 9.89822 46.8083 10.1989 46.977C10.4996 47.1383 10.8296 47.219 11.1889 47.219ZM22.845 41.862C23.3144 41.862 23.7324 41.961 24.099 42.159C24.4657 42.3497 24.7554 42.6393 24.968 43.028C25.1807 43.4167 25.287 43.8897 25.287 44.447V48H24.297V44.59C24.297 43.9887 24.1467 43.5303 23.846 43.215C23.5527 42.8923 23.153 42.731 22.647 42.731C22.1264 42.731 21.712 42.8997 21.404 43.237C21.096 43.567 20.942 44.0473 20.942 44.678V48H19.952V44.59C19.952 43.9887 19.8017 43.5303 19.501 43.215C19.2077 42.8923 18.808 42.731 18.302 42.731C17.7814 42.731 17.367 42.8997 17.059 43.237C16.751 43.567 16.597 44.0473 16.597 44.678V48H15.596V41.972H16.597V42.841C16.795 42.5257 17.059 42.2837 17.389 42.115C17.7264 41.9463 18.0967 41.862 18.5 41.862C19.006 41.862 19.4534 41.9757 19.842 42.203C20.2307 42.4303 20.5204 42.764 20.711 43.204C20.8797 42.7787 21.1584 42.4487 21.547 42.214C21.9357 41.9793 22.3684 41.862 22.845 41.862ZM32.429 44.755C32.429 44.9457 32.418 45.1473 32.396 45.36H27.578C27.6147 45.954 27.8164 46.4197 28.183 46.757C28.557 47.087 29.008 47.252 29.536 47.252C29.9687 47.252 30.328 47.153 30.614 46.955C30.9074 46.7497 31.1127 46.4783 31.23 46.141H32.308C32.1467 46.7203 31.824 47.1933 31.34 47.56C30.856 47.9193 30.2547 48.099 29.536 48.099C28.964 48.099 28.4507 47.9707 27.996 47.714C27.5487 47.4573 27.1967 47.0943 26.94 46.625C26.6834 46.1483 26.555 45.5983 26.555 44.975C26.555 44.3517 26.6797 43.8053 26.929 43.336C27.1784 42.8667 27.5267 42.5073 27.974 42.258C28.4287 42.0013 28.9494 41.873 29.536 41.873C30.108 41.873 30.614 41.9977 31.054 42.247C31.494 42.4963 31.8314 42.841 32.066 43.281C32.308 43.7137 32.429 44.205 32.429 44.755ZM31.395 44.546C31.395 44.1647 31.3107 43.8383 31.142 43.567C30.9734 43.2883 30.7424 43.0793 30.449 42.94C30.163 42.7933 29.844 42.72 29.492 42.72C28.986 42.72 28.5534 42.8813 28.194 43.204C27.842 43.5267 27.6404 43.974 27.589 44.546H31.395Z" fill={color}/>
</Svg>
);

export default HomeTabIcon;



