import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { UseNavigationAppStack } from '../types';

export interface IItem {
    name: string;
    color: string;
    id: string;

}


export interface IList {
    item: IItem; 
}

const ListItems = ({ item }:IList) => {

   

    const navigation = useNavigation<UseNavigationAppStack>();


     

    return (
        <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate('Detail', {name:item.name, color:item.color, id:item.id })}} >
             <Text>{item.name} - {item.color}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundcolor: 'black',
        borderRadius: 10,
        padding: 10,
    }
})

export default ListItems