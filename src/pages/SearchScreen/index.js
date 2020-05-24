import React,{useState}  from 'react'

import {View,Text,ScrollView} from 'react-native'
import estilo from './estilo'
import SearchBar from '../../components/SearchBar'
import useRestorants from '../../hooks/useRestorants'
import RestorantsList from '../../components/RestaurantList'


function SearchScreen ({navigation}){
    const  [searchTerm,setSearchTerm] = useState('')
    const [getYelpData,restaurants,erroMessage] = useRestorants()
    
    

    function filterRestorantsByPrice(price){
        const filteredRestorants = restaurants.filter((restaurante)=>{
            return restaurante.price === price
        })
        return filteredRestorants
    }
   
    return(
        <View style={estilo.container}>
             <SearchBar
            onTermSubmited={()=>{ //quando precissar passar uma funcao usar outra funcao para nao invocar a funcao quando o componente é renderizado
               getYelpData(searchTerm)
            }}
              term={searchTerm} 
              onSearchTermChange={setSearchTerm} />

            {/* adicionando uma render condicion */}
            {erroMessage ? <Text>{erroMessage}</Text> :null}
            
           
        <ScrollView showsVerticalScrollIndicator={false}>
           <RestorantsList navigation={navigation} restaurantes={filterRestorantsByPrice('$')} title="Cost Efective" />
           <RestorantsList navigation={navigation} restaurantes={filterRestorantsByPrice('$$')}  title="Bit Pricer"/>
           <RestorantsList navigation={navigation} restaurantes={filterRestorantsByPrice('$$$')} title="Big Spender" />
        </ScrollView>

        </View>
    )

}

export default SearchScreen