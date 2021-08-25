/**
 * Streak APP
 * By Amanpreet Singh Aug 22, 2021
 *
 * 
 * 
 */

import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './app/navigator/Routes';
import configStore from './app/redux/configStore';

export default class App extends Component {

  componentDidMount = () => {
      LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
      LogBox.ignoreAllLogs();//Ignore all log notifications 
  }
  
  

  render() {
    return (
      <Provider store={configStore}>
          <Routes />
      </Provider>
   )
  }
};


//  react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

// cd android && ./gradlew assembleDebug