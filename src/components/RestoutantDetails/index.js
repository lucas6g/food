import React from 'react'

import {View,Text,Image} from 'react-native'
import estilo from './estilo'
//componete mostra todos os detalhes do restaurante e vai ser renderizado na lista

function RestorantDetail({restaurante}){
    return(
        <View style={estilo.container} >
            <Image
            style={estilo.imgDetail}
            source={{uri:restaurante.image_url}}
            
            />
            <Text style={estilo.nomeRestaurante}>{restaurante.name}</Text>
            <Text style={estilo.avaliacao}>Estrelas {restaurante.rating}  , {restaurante.review_count} Reviews</Text>

        </View>
    )
}

export default RestorantDetail