import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const NativeButton = ({style, children, onPress}) => {
    return (
        <View style={{...styles.container, ...style}}>
            <TouchableNativeFeedback onPress={onPress}>
                <View style={style}>
                    {children} 
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden'
    }
})


export default NativeButton;
