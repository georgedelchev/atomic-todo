import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import NativeButton from './NativeButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const PriorityPopup = ({closePriorityPopup, isPriorityPopupVisible, handlePriorityPopup, handleTodoPriority}) => {
    return (
        <Modal animationType='fade' onRequestClose={closePriorityPopup} visible={isPriorityPopupVisible} transparent={true}>
            <TouchableOpacity onPress={closePriorityPopup} activeOpacity={1} style={{flex: 1}}>
                <TouchableOpacity onPress={handlePriorityPopup} activeOpacity={1} style={{position: 'absolute', top: 415, left: 30,justifyContent: 'center', paddingVertical: 10, borderRadius: 20, elevation: 5, backgroundColor: 'white'}}>
                    <NativeButton onPress={() => handleTodoPriority('none')} style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5}}>
                        <Icon style={{color: '#404040', marginRight: 10}} name='flag' size={25} />
                        <Text>No Priority</Text>
                    </NativeButton>
                    <NativeButton onPress={() => handleTodoPriority('low')} style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5}}>
                        <Icon style={{color: 'green', marginRight: 10}} name='flag' size={25} />
                        <Text>Low Priority</Text>
                    </NativeButton>
                    <NativeButton onPress={() => handleTodoPriority('medium')} style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5}}>
                        <Icon style={{color: 'orange', marginRight: 10}} name='flag' size={25} />
                        <Text>Medium Priority</Text>
                    </NativeButton>
                    <NativeButton onPress={() => handleTodoPriority('high')} style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 5}}>
                        <Icon style={{color: 'red', marginRight: 10}} name='flag' size={25} />
                        <Text>High Priority</Text>
                    </NativeButton>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    
})


export default PriorityPopup
