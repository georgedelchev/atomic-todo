import React, {useState, useContext} from 'react'
import { View, CheckBox, Text, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Context } from '../Context/Context';
import { setTodoStatus, deleteTodo } from '../Context/actions';

const TodoItem = ({title, id, isComplete}) => {
    const { dispatch } = useContext(Context);

    const handleCheck = (bool) => {
        dispatch(setTodoStatus(id, bool));
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    }

    let textDecorationLine = isComplete ? 'line-through' : 'none';
    let opacity = isComplete ? 0.4 : 1;

    return (
        <TouchableNativeFeedback>
            <View style={{...styles.todoItem, opacity}}>
                <View style={styles.checkboxContainer}>
                    <CheckBox value={isComplete} onValueChange={handleCheck} />
                    <Text style={{...styles.text, textDecorationLine}}>{title}</Text>
                </View>
                <View style={styles.close}>
                    <TouchableOpacity onPress={handleDelete}>
                        <Icon style={{color: 'white'}} name='close' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
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
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 0,
        backgroundColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    text: {
        marginBottom: 3,
        fontSize: 20,
        color: 'white',
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
})


export default TodoItem
