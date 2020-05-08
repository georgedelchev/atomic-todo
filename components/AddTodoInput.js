import React, { useState, useContext, useEffect } from 'react'
import { Button, StyleSheet, View, Text, TextInput, 
        Modal, TouchableOpacity, Alert, TouchableNativeFeedback } from 'react-native';
import { setTodoPopup, addTodo } from '../Context/actions';
import { Context } from '../Context/Context';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddTodoInput = () => {
    const { state, dispatch } = useContext(Context);
    const [ todoInput, setTodoInput ] = useState('');


    const sendTodo = () => {
        if(!todoInput) {
            Alert.alert('Error', 'Please enter some text', [{
                type: 'OK'
            }]);
            return;
        }
        dispatch(addTodo(todoInput));
        setTodoInput('');
    }

    const closeModal = () => {
        dispatch(setTodoPopup(false));
        return;
    }

    let isVisible = state.isTodoPopupVisible ? true : false;
    
    const handleSubmit = () => {
        sendTodo();
        return;
    }

    return (
        <Modal onRequestClose={closeModal} transparent={true} visible={isVisible} animationType='slide'>
            <TouchableOpacity activeOpacity={1} onPress={() => dispatch(setTodoPopup(false))} 
            style={styles.modalContainer}>
                <TouchableOpacity activeOpacity={1} style={styles.popupContainer} 
                onPress={() => dispatch(setTodoPopup(true))}>
                        <View style={styles.inputContainer}>
                            <TextInput showSoftInputOnFocus={true} returnKeyType='go' 
                            onSubmitEditing={handleSubmit} autoFocus={true}
                            onChangeText={(text) => setTodoInput(text)} value={todoInput} 
                            placeholder='Add todo...' style={styles.input} />
                            <View style={styles.btnWrapper}>
                                <TouchableNativeFeedback onPress={sendTodo}>
                                    <View style={styles.btn}>
                                        <Icon name='arrow-right' size={25} style={styles.icon} />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    
    btnWrapper: {
        elevation: 5,
        width: 60,
        borderRadius: 20,
        overflow: 'hidden',
    },
    
    popupContainer: {
        flexDirection: 'row',
        height: 200,
        alignItems: 'flex-start',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        elevation: 20
    },

    input: {
        width: 250,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontSize: 20,
        padding: 0,
        paddingVertical: 0,
        textDecorationLine: 'none'
    },

    btn: {
        width: 60,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#4285F4',
    },

    icon: {
        color: 'white',
        marginBottom: 3
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})


export default AddTodoInput;
