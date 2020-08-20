import React, {useState} from 'react'
import {Text, StyleSheet} from 'react-native'
import Filho from './Filho2'

export default props => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')

    function exibirValor(numero, texto){
        setNum(numero)
        setTexto(texto)
    }
	
    return (
        <>
            <Text style={styles.text}> {texto} {num}</Text>
            <Filho min={1} max={60} funcao={exibirValor}></Filho>
        </>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 24,
        fontWeight:'bold'
    }
})
