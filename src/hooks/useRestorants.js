import {useEffect,useState} from 'react'

import api from '../services/api'


export default function(){
    const [restaurants,setRestaurants] = useState([])
    const [erroMessage,setErrorMessage] = useState('') 

    //nao deixar regras de negocio dentro de componentes extrair como hooks
    //essa logica

    async function getYelpData(term){

        try{

            const resposta = await api.get(`/search`,{
                params:{
                    limit:50,
                    term:term,
                    location:'new york'
                }
            })
            setRestaurants(resposta.data.businesses)
    
        }catch(erro){
            setErrorMessage('Somethin went wrong')
        }
    }

    useEffect(()=>{
        getYelpData('pasta')
    } ,[])

    return [getYelpData,restaurants,erroMessage]
}