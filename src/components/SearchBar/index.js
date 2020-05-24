import React from 'react'

import {View,TextInput} from 'react-native'
import estilo from './estilo'

import { Ionicons } from '@expo/vector-icons';


function SearchBar({onSearchTermChange,term,onTermSubmited}){
    return(
    <View style={estilo.container}>
        <Ionicons style={estilo.iconSearch} 
        name="ios-search" 
        size={30} color="black" />
        
        <TextInput style={estilo.estiloInput}
        autoCapitalize="none" 
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={(term)=>{
        onSearchTermChange(term)
        }}
        onEndEditing={()=>{ //quando clicar o botao retornar
            onTermSubmited()
        }}
       />
           
    </View>
    )
}

export default SearchBar