import React from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import ListItems from '../components/ListItems'

const HomeScreen = () => {

    const productos = [

        {
            nombre: 'Vestido de noche',
            color: 'Rojo',
            id: '001',

        },

        {
            nombre: 'Vestido corto casual',
            color: 'Verde',
            id: '002',

        },

        {
            nombre: 'Vestido de playa',
            color: 'Azul',
            id: '003',

        },

        {
            nombre: 'Vestido patinadora',
            color: 'Rosa',
            id: '004',

        },

    ]

    return (
        <SafeAreaView style={{ marginHorizontal: 10, }} >
            <FlatList
                data={productos}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <ListItems item={item} />}
                ItemSeparatorComponent={() => <View style={{ marginVertical: 10, borderColor: '#000', borderWidth: 1 }} />}
                ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, }}> Mis productos </Text>}>
            </FlatList>

        </SafeAreaView>


    )

}

export default HomeScreen