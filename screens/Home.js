import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AddTodoButton from '../components/AddTodoButton';
import AddTodoInput from '../components/AddTodoInput';
import TodoList from '../components/TodoList';
import UndoTodo from '../components/UndoTodo';
import Header from '../components/Header';

const Home = ({navigation}) => {
    return (
        <>
        <Header openDrawer={() => navigation.openDrawer()} />
        <View style={styles.container}>
            <TodoList />
            <AddTodoInput />
            <AddTodoButton />
            <UndoTodo />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
});

export default Home;