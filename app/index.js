import React from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import { Navigation } from 'react-native-navigation';

import {registerScreens} from './screens';

registerScreens(store, Provider);

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',
    $white: '#fff',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
});


const navigatorStyle = {
    statusBarColor: 'black',
    statusBarTextColorScheme: 'light',
    navigationBarColor: 'black',
    navBarBackgroundColor: '#0a0a0a',
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    tabBarButtonColor: 'red',
    tabBarSelectedButtonColor: 'red',
    tabBarBackgroundColor: 'white'
};

export default () => (
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Home',
            title: 'Home',
            //navigatorStyle
        }
    })
)


