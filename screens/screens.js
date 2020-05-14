import React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import About from './About';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home} options={{title: 'Todos'}} />
            <Drawer.Screen name='About' component={About} />
        </Drawer.Navigator>
    )
}

export default AppNavigator;

