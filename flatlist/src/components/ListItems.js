import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListItems = ({ item }) => {

    const { nombre, color, id } = item

    return (
        <View style={styles.container}>
            <Text>{nombre} - {color}</Text>
        </View>
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