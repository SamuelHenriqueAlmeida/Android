import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Estilo from './Estilo'

// definicao de componentes baseados em funcao

//Componente exportado por padrao (nao precisava ser nomeada)
export default function Comp (){
    return <Text>Componente oficial</Text>
}

//diferentes formas de exportar uma 
function Comp1 (){
    return <Text>Componente 01</Text>
}

function Comp2 (){
    return <Text>Componente 02</Text>
}

export function Comp3 (){
    return <Text>Componente 03</Text>
}

export{Comp1, Comp2}

const styles = StyleSheet.create({
    textHeader:{
        fontSize: 32,
        color:'red',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    textBody:{
        fontSize: 24,
        color:'darkblue'
    }
})