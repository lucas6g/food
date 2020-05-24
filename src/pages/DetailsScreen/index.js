import React,{useState,useEffect} from 'react'

import {View,Text,Image,FlatList} from 'react-native'

import estilo from './estilo'

import api from '../../services/api'

function DetailsScreen({route}){

   
 //comunicando informacao de uma tela para outra atraves de parametros
    const {id} = route.params

   const [restaurante,setRestaurante] = useState({}) //colocar null para valor inicial de um obejeto 


 async function getRestauranteById(id){
        const response  = await api.get(`/${id}`)
        setRestaurante(response.data)
    }

    useEffect(()=>{
        getRestauranteById(id)
    },[])
    
    if(!restaurante){
        return null
    }

    return(
        <View>
            <Text>{restaurante.name}</Text>
              <FlatList 
                data={restaurante.photos}
                keyExtractor={(photo)=>{
                    return photo
                }}

                renderItem={({item})=>{
                  return <Image style={{width:300,height:200}} source={{uri:item}}/>
                }}
              
              />
        </View>
        
    )
}

export default DetailsScreen
