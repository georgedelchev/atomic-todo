import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { undoTodo, setUndoPopup } from '../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const UndoTodo = () => {
    const dispatch = useDispatch();
    const isUndoPopupVisible = useSelector(state => state.isUndoPopupVisible);

    const closeModal = () => {
        dispatch(setUndoPopup(false));
    }

    const openModal = () => {
        dispatch(setUndoPopup(true));
    }

    const undoLastTodo = () => {
        dispatch(undoTodo());
        dispatch(setUndoPopup(false))
    }

    let isVisible = isUndoPopupVisible ? true : false;

    return (
        <Modal onRequestClose={closeModal} transparent={true} visible={isVisible} animationType='slide'>
            <TouchableOpacity onPress={closeModal} activeOpacity={1} style={styles.undoContainer}>
                <TouchableOpacity onPress={openModal} activeOpacity={1} style={styles.undo}>
                    <Text>Todo Deleted</Text>
                    <TouchableOpacity onPress={undoLastTodo}>
                        <Text style={styles.undoText}>UNDO</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    undo: {
        padding: 20,
        width: '100%',
        height: 60,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    undoContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },


    undoText: {
        fontSize: 20,
        color: '#4285F4'
    }
})


export default UndoTodo
