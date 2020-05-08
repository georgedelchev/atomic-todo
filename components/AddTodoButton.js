import React, {useContext} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { toggleTodoPopup } from '../Context/actions';
import { Context } from '../Context/Context';

const AddTodoButton = () => {
    const { dispatch } = useContext(Context);

    return (
        <View style={styles.button}> 
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("rgba(0,0,0,0.2)", true)} 
            onPress={() => dispatch(toggleTodoPopup())}>
                    <View style={styles.innerView}><Icon style={styles.icon} name="plus" size={30} /></View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 70,
        height: 70,
        padding: 20,
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: '#4285F4',
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
    },

    innerView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        color: 'white'
    }
})

export default AddTodoButton