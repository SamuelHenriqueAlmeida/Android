import React from 'react'
import {Text, Button} from 'react-native'

export default function Comp (props){

    function calcula(){
        props.retorno(props.valor1+props.valor2)
    }

    return(
        <>
            <Text>Valores recebidos por parametro: 
                {props.valor1} e {props.valor2}
            </Text> 
            <Button 
                title="Executar"
                onPress={calcula}
            />
        </>
    );
}
