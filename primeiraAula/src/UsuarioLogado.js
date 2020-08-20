import React from 'react'
import {View,Text} from 'react-native'
import If from './If'

export default props => {
    const usuario = props.usuario || {} //recebe um objeto ou nulo
    return (
        <View>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text>
                    Usuario logado:
                </Text>
                <Text>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </View>
    );
}