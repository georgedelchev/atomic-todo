import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { setTodoStatus, deleteTodo, setUndoPopup, setEditMenu } from '../Redux/actions';
import EditTodo from './EditTodo';

const TodoItem = ({isEditMenuVisible, title, id, isComplete, visibility, priority}) => {
    const dispatch = useDispatch();

    const handleCheck = (bool) => {
        dispatch(setTodoStatus(id, bool));
    }

    const priorityColors = {
        none: '#404040',
        low: 'green',
        medium: 'orange',
        high: 'red',
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id));
        dispatch(setUndoPopup(true));
        setTimeout(() => dispatch(setUndoPopup(false)), 3000);
    }

    const openEditScreen = () => {
        dispatch(setEditMenu(true, id))
    }

    let textDecorationLine = isComplete ? 'line-through' : 'none';
    let opacity = isComplete ? 0.4 : 1;

    return (
        <View style={{display: visibility}}>
        <TouchableNativeFeedback onPress={openEditScreen}>
            <View style={{...styles.todoItem, opacity}}>
                <View style={styles.sideline}></View>
                <View style={styles.checkboxContainer}>
                    <CheckBox tintColors={{false: priorityColors[priority], true: '#4285F4'}}
                    value={isComplete} onValueChange={handleCheck} />
                    <Text style={{...styles.text, textDecorationLine}}>{title}</Text>
                </View>
                <View style={styles.close}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Icon style={{color: '#404040'}} name='close' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableNativeFeedback>
        <EditTodo isEditMenuVisible={isEditMenuVisible} title={title} id={id} />
        </View>
    )
}

const styles = StyleSheet.create({
    sideline: {
        backgroundColor: '#4285F4',
        width: 10,
        height: '100%',
        marginRight: 10
    },
    checkboxContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },  

    close: {
        padding: 10
    },  

    todoItem: {
        flex: 1,
        height: 65,
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        backgroundColor: '#f8f8f8',
    },

    text: {
        marginBottom: 3,
        fontSize: 20,
        color: '#404040',
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
})


export default TodoItem
