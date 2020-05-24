import React from 'react'

import {View,Text,FlatList,TouchableOpacity} from 'react-native'
import estilo from './estilo'
import RestorantDetails from '../../components/RestoutantDetails'


function RestaurantList({title,restaurantes,navigation}){

    if(!restaurantes.length){
        return null //retornar null significa faça nada
    }

    return(
        <View style={estilo.container}>
            <Text style={estilo.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={restaurantes}
                keyExtractor={restaurante => restaurante.id}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('DetailsScreen',{
                            id:item.id
                        })
                    }} >
                        <RestorantDetails  restaurante={item} />
                    </TouchableOpacity>  
                )
                }}
            />
        </View>
    )
}

export default RestaurantList