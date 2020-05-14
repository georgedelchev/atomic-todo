import React, {useState} from 'react'
import { View, Text, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native'
import { setEditMenu, editTodoText } from '../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

const EditTodo = ({isEditMenuVisible, title, id}) => {
    const [editInput, setEditInput] = useState(title)
    const dispatch = useDispatch();

    let isModalVisible = isEditMenuVisible ? true : false;
    
    const closeEditMenu = () => {
        dispatch(setEditMenu(false, id));
    }

    const editTodoTitle = () => {
        dispatch(editTodoText(editInput, id));
        dispatch(setEditMenu(false, id));
    }


    return (
        <Modal visible={isModalVisible} animationType='slide' onRequestClose={closeEditMenu}>
            <View style={styles.edit}>
                <Text style={{fontSize: 20}}>Edit Todo:</Text>
                <TextInput style={styles.input} value={editInput} onChangeText={setEditInput} />
                <TouchableOpacity style={styles.editButton} onPress={editTodoTitle}>
                    <Text style={{fontSize: 20, color: '#fff'}}>EDIT</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    edit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    input: {
        paddingHorizontal: 10,
        fontSize: 18,
        marginVertical: 20,
        borderColor: '#404040',
        borderWidth: 1,
        width: '80%'
    },

    editButton: {
        borderRadius: 10,
        backgroundColor: '#4285F4',
        paddingHorizontal: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default EditTodo
