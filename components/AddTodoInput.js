import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, TextInput, Text, 
        Modal, TouchableOpacity, Alert, TouchableNativeFeedback } from 'react-native';
import { setTodoPopup, addTodo } from '../Redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import NativeButton from './NativeButton';
import PriorityPopup from './PriorityPopup';

const AddTodoInput = () => {
    const dispatch = useDispatch();
    const isTodoPopupVisible = useSelector(state => state.isTodoPopupVisible);
    const [ todoInput, setTodoInput ] = useState('');
    const [isPriorityPopupVisible, setIsPriorityPopupVisible] = useState(false);
    const [todoPriority, setTodoPriority] = useState('none');

    const sendTodo = () => {
        if(!todoInput) {
            Alert.alert('Error', 'Please enter some text', [{
                type: 'OK'
            }]);
            return;
        }
        dispatch(addTodo(todoInput, todoPriority));
        dispatch(setTodoPopup(false));
        setTodoPriority('none');
        setTodoInput('');
    }

    const closeModal = () => {
        dispatch(setTodoPopup(false));
        setTodoPriority('none');
        return;
    }

    let isVisible = isTodoPopupVisible ? true : false;
    
    const handleSubmit = () => {
        sendTodo();
        return;
    }

    const handlePriorityPopup = () => {
        setIsPriorityPopupVisible(true)
    }
    const closePriorityPopup = () => {
        setIsPriorityPopupVisible(false)
    }
    const handleTodoPriority = val => {
        setTodoPriority(val);
        setIsPriorityPopupVisible(false);
    }

    const priorityColors = {
        none: '#404040',
        low: 'green',
        medium: 'orange',
        high: 'red',
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
                            placeholder='Add todo...' style={{...styles.input, color: priorityColors[todoPriority]}} />
                            <View style={styles.btnWrapper}>
                                <TouchableNativeFeedback onPress={sendTodo}>
                                    <View style={styles.btn}>
                                        <Icon name='arrow-right' size={25} style={styles.icon} />
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        <View style={styles.priorityContainer}>
                            <NativeButton onPress={handlePriorityPopup} style={styles.featureButton}>
                                <Icon style={styles.features} name='flag' size={25} />
                                <PriorityPopup closePriorityPopup={closePriorityPopup} 
                                isPriorityPopupVisible={isPriorityPopupVisible}
                                handlePriorityPopup={handlePriorityPopup}
                                handleTodoPriority={handleTodoPriority} />
                            </NativeButton>
                            <NativeButton style={styles.featureButton}>
                                <Icon style={styles.features} name='clock-o' size={25} />
                            </NativeButton>
                            <NativeButton style={styles.featureButton}>
                                <Icon style={styles.features} name='tag' size={25} />
                            </NativeButton>
                            <NativeButton style={styles.featureButton}>
                                <Icon style={styles.features} name='comment' size={25} />
                            </NativeButton>
                        </View>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    priorityContainer: {
        flexDirection: 'row',
        paddingVertical: 5
    },
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
        height: 160,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        elevation: 20
    },

    featureButton: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
    },

    features: {
        color: '#404040',
    }
})


export default AddTodoInput;
