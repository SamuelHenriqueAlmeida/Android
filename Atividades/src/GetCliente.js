import React,{useState, useEffect} from 'react';
import {View,Text, Alert} from 'react-native';

export default function GetCliente (props){

const [data, setData] = useState([])
useEffect(() => {
    fetch('https://cartoes-piotto.herokuapp.com/api/cliente/1', {
        method: 'GET',
        headers: {
            'Accept' : 'application/json',
            'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDIwNTkyMzQ2MSwiZXhwIjoxNjAwODEwNzIzfQ.HXHGnO-prv6mLKPz-TVdsR4CffCTwUCOrgwhuOGPo21BxsWwZj5FxxzUaVf0XciJ548VASdc3BidklQa-l5oDw'
        }
    })
    .then((response) => {   
        if(!response.ok){
            Alert.alert("Mensagem: " + response.status)
        }
        return response.json()
    })
    .then((json) => {
            setData(json.dados)
        }
    )
    .catch((error) => {
        console.error(error)})
    }, []);

return(
    <View style={{flex:1, padding: 24}}>
        <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>
            Cliente  
        </Text>
        <Text>
            ID: {data.id}
        </Text>
        <Text>
            CPF: {data.cpf} 
        </Text>
        <Text>
            Nome: {data.nome}
        </Text>
        <Text>
            UF: {data.uf}
        </Text>
    </View>
);
}
