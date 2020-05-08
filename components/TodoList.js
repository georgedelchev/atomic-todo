import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Context } from '../Context/Context';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { state } = useContext(Context);
    const [status, setStatus] = useState('all');

    let pending = state.todoList.filter(todo => !todo.isComplete);
    let completed = state.todoList.filter(todo => todo.isComplete);
    let filteredTodos = [];

    const filtersStyle = {
        [status]: {
            ...styles.activeFilter
        }
    }

    if(status === 'pending') {
        filteredTodos = pending;
    } else if(status === 'completed') {
        filteredTodos = completed;
    } else if (status === 'all') {
        filteredTodos = pending.concat(completed);
    }

    return (
        <ScrollView style={styles.listContainer}>
            <View style={styles.list}>
                <FlatList data={filteredTodos} renderItem={({ item }) => {
                    return <TodoItem title={item.title} id={item.id} isComplete={item.isComplete} />
                }} />
            </View>
            { state.todoList[0] &&
                <View style={styles.filterButtons}>
                    <TouchableOpacity onPress={() => setStatus('all')}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...styles.text, ...filtersStyle['all']}}>All</Text><Text style={styles.text}>  |  </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus('pending')}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...styles.text, ...filtersStyle['pending']}}> Pending</Text><Text style={styles.text}>  |  </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus('completed')}>
                        <Text style={{...styles.text, ...filtersStyle['completed']}}> Completed</Text>
                    </TouchableOpacity>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
    
    list: {
        elevation: 20,
    },
    
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        paddingBottom: 20
    },

    text: {
        fontSize: 18
    },

    activeFilter: {
        color: '#4285F4',
        fontWeight: 'bold'
    },
})

export default TodoList;
