import React, {useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { IList } from '../components/ListItems'
import { IItem } from '../components/ListItems'

export type DParams = {
    name: string;
    color: string;
    id: string;
  };



const Detail = () => {

    const [itemData, setItemData] = useState<IItem>({name: '', color: '', id: ''})
    const route = useRoute()
    useEffect(() => {

        const { name, color, id } = route.params as IItem;
        setItemData({name:name,  color: color, id:id})
        

    }, [route.params]);


    

    return (
           <View>
               <Text>Nombre: {itemData.name} </Text>
               <Text>Color: {itemData.color}</Text>

           </View>



    )

}
export default Detail;