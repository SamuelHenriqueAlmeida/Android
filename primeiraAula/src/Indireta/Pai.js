import React, {useState} from 'react'
import {Text, StyleSheet} from 'react-native'
import Filho from './Filho'

export default props => {
    const [num, setNum] = useState(0)

    function exibirValor(numero){
        setNum(numero)
    }
    
    return (
        <>
            <Text style={styles.text}>Valor sorteado: {num}</Text>
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
