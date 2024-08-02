/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
import ThemeContent from './src/Themes';
import StackNavigator from './src/Navigation/StackNavigator';
import { Provider } from 'react-redux'
import Store from './src/Redux/store';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  LogBox ,
  View,
} from 'react-native';


LogBox.ignoreAllLogs(true);


function App(): JSX.Element {


  return (
    <Provider store={Store}>
   <ThemeContent>
            <StackNavigator />
          </ThemeContent>
  </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
