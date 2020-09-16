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

        function renderizacao () {
            if(data != null){
                return(
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>Cartoes do cliente {idCliente}:</Text>
                    </View>
                        <FlatList
                            data={data}
                            keyExtractor={({id}) => id}
                            renderItem={({ctr}) => (
                                <View>
                                    <View style={styles.viewTexto}>
                                        <Text>Id cartao:</Text>
                                        <Text>{ctr.id}</Text>
                                    </View>
                                    <View style={styles.viewTexto}>
                                        <Text>Numero do cartao:</Text>
                                        <Text>{ctr.numero}</Text>
                                    </View>
                                    <View>
                                        <Text>Data de validade:</Text>
                                        <Text>{ctr.dataValidade}</Text>
                                    </View>
                                    <View>
                                        <Text>Bloqueado:</Text>
                                        <Text>{ctr.bloqueado}</Text>
                                    </View>

                            </View>
                            )}
                        />              
                    </View>
                );
            }
        }
    
        return(
            <View style={{flex:1, padding: 24}}>
                {renderizacao()}
            </View>
        );
    }