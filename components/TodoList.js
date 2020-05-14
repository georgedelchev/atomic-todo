import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useSelector(state => state.todoList);
    const [status, setStatus] = useState('all');

    let pending = todoList.filter(todo => !todo.isComplete);
    let completed = todoList.filter(todo => todo.isComplete);
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
                    return <TodoItem visibility={item.visibility} title={item.title} id={item.id} 
                    isComplete={item.isComplete} isEditMenuVisible={item.isEditMenuVisible} priority={item.priority}/>
                }} />
            </View>
            { todoList[0] &&
                <View style={styles.filterButtons}>
                    <TouchableOpacity onPress={() => setStatus('all')}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...styles.text, ...filtersStyle['all']}}>All({pending.concat(completed).length})</Text><Text style={styles.text}>  |  </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus('pending')}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{...styles.text, ...filtersStyle['pending']}}> Pending({pending.length})</Text><Text style={styles.text}>  |  </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setStatus('completed')}>
                        <Text style={{...styles.text, ...filtersStyle['completed']}}> Completed({completed.length})</Text>
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
    
    filterButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        paddingBottom: 20
    },

    text: {
        fontSize: 18,
        color: '#404040'
    },

    activeFilter: {
        color: '#4285F4',
        fontWeight: 'bold'
    },
})

export default TodoList;
