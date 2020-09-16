import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button} from 'react-native'

export default function ListaCartao (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cartao/cliente'+id 
    useEffect(() => {
            fetch(string, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTYwMDIwNTkyMzQ2MSwiZXhwIjoxNjAwODEwNzIzfQ.HXHGnO-prv6mLKPz-TVdsR4CffCTwUCOrgwhuOGPo21BxsWwZj5FxxzUaVf0XciJ548VASdc3BidklQa-l5oDw'
            }
        })
        .then((response) => {   
            if(!response.ok){
                if(response.status == 400){
                    Alert.alert("Cliente nao encontrado!");
                    props.navigation.goBack()
                }
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

        function renderizacao (){
            if(data != null){
                return (
                    <>
                        
                    </>
                )
            }
        }
    
        return(
            <View style={{flex:1, padding: 24}}>
                {renderizacao()}
            </View>
        );
    }