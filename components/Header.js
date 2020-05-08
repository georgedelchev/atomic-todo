import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Atomic Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4285F4',
        elevation: 10
    },
    text: {
        color: 'white',
        fontSize: 30,
    }
})


export default Header;
