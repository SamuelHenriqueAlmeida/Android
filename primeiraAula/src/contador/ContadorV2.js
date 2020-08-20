import React, {useState} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <View style={styles.view}>
            <Text style={styles.texto}>Contador V2</Text>
            {/* Comunicacao direta (passagem de parametros)*/}
            <ContadorDisplay num={num}></ContadorDisplay> 
            {/* Comunicacao indireta (passagem de funcoes que sao atualizadas*/}
            <ContadorBotoes inc={inc} dec={dec}></ContadorBotoes>
        </View>
    );
}

const styles = StyleSheet.create({
    texto:{
        color: 'darkblue',
        fontSize: 24,
        fontWeight:'bold'
    },
    view:{
        alignItems:'center',
        justifyContent:'center',
        width:300
    }

})