import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';

const About = ({navigation}) => {
    return (
        <>
        <Header openDrawer={() => navigation.openDrawer()} />
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Just the best todo app in the business</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default About;