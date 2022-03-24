import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import ListItems from '../components/ListItems'
import { useNavigation } from '@react-navigation/native';
import { UseNavigationAppStack } from '../types';



const HomeScreen = () => {



    const productos = [

        {

            name: 'Vestido de noche',
            color: 'Rojo',
            id: '001',

        },

        {
            name: 'Vestido corto casual',
            color: 'Verde',
            id: '002',

        },

        {
            name: 'Vestido de playa',
            color: 'Azul',
            id: '003',

        },

        {
            name: 'Vestido patinadora',
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
                ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, }}> Mis productos </Text>}
            /> 

            

        </SafeAreaView>


    )

}
export default HomeScreen;