import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NativeButton from './NativeButton';
import { filterTodos } from '../Redux/actions';

const Header = ({openDrawer}) => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');
    const [searchVisibility, setSearchVisibility] = useState(false);
    let marginLeft = searchVisibility ? 0 : 280;
    let opacity = searchVisibility ? 1 : 0;
    let inputRef = useRef(null);

    useEffect(() => {
        searchVisibility ? inputRef.current.focus() : inputRef.current.blur();
        dispatch(filterTodos(searchInput));
    })

    const closeSearch = () => {
        if(searchInput === '') {
            setSearchVisibility(false);
        }
    }
    
    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", closeSearch);
        return () => {
            Keyboard.removeListener("keyboardDidHide", closeSearch);
        }
    })
    
    
    const handleChange = text => {
        setSearchInput(text);
    } 

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={openDrawer} style={styles.burgerMenu}>
                <View style={styles.bar}></View>
                <View style={styles.bar}></View>
                <View style={styles.bar}></View>
            </TouchableOpacity>
            <View style={{...styles.searchContainer, marginLeft}}>
                <NativeButton onPress={() => setSearchVisibility(!searchVisibility)} style={styles.search}>
                    <Icon name='search' size={22} style={{color: 'white'}} />
                </NativeButton>
                <TextInput ref={inputRef} value={searchInput} onChangeText={handleChange} autoFocus={searchVisibility} style={{...styles.searchInput, opacity}} 
                placeholder='Search Task...' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4285F4',
        elevation: 10,
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    search: {
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        opacity: 0,
        color: 'white',
        height: 50,
        width: 150,
        fontSize: 20,
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
    burgerMenu: {
        width: 30,
        height: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    bar: {
        width: '100%',
        height: 4,
        backgroundColor: '#404040',
        marginVertical: 2
    }
})


export default Header;
