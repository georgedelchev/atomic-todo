import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, BackHandler } from 'react-native';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import StateProvider from './Context/Context';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
        BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

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


  return (
    <StateProvider>
      <Header />
      <View style={styles.container}>
        <TodoList />
        <AddTodoInput />
        <AddTodoButton />
      </View>
    </StateProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;