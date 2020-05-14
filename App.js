import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import AppNavigator from './screens/screens';

const App = () => {
  useEffect(handleExit, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />      
      </NavigationContainer>
    </Provider>
  );
};

function handleExit() {
  const backAction = () => {
    Alert.alert('Wait a minute!', 'Are you sure you want to quit?', [
      {
        text: 'cancel',
        onPress: () => null,
        style: 'cancel'
      },
      {
        text: 'YES',
        onPress: () => BackHandler.exitApp()
      }
    ]);
    return true;
  }
  BackHandler.addEventListener("hardwareBackPress", backAction);

  return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
}

export default App;