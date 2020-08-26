import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default props => {
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')
    const [operacao, setOperacao] = useState('')
    let num1 = parseInt(n1)
    let num2 = parseInt(n2)

    function Soma() {
        setOperacao(num1 + num2)
    }

    function Subtracao() {
        setOperacao(num1 - num2)
    }

    function Divisao() {
        if (num2 == 0) {
            setOperacao("por 0 não neh")
        } else {
            if(num2>num1){
                setOperacao("Divisor maior, confira seus valores")
            }else{
                setOperacao(num1 / num2)
            }      
        }
    }

    function Multiplicacao() {
        setOperacao(num1 * num2)
    }

    function Limpar() {
        setOperacao(num1 = "0")
        setN1(0)
        setN2(0)
    }

    return (
        <View>
            <Text>CALCULADORA</Text>

            <TextInput
                value={n1}
                onChangeText={n1 => setN1(n1)}
                placeholder = "Digite um número"
            />
            <TextInput
                value={n2}
                onChangeText={n2 => setN2(n2)}
                placeholder = "Digite um número"
            />
            
            <Button title="+" onPress={Soma} color="black" />
            <Button title="-" onPress={Subtracao} color="#dc143c" />
            <Button title="*" onPress={Multiplicacao} color="black" />
            <Button title="/" onPress={Divisao} color="#dc143c" />
            <Button title="Limpar" onPress={Limpar} color="green"/>
            <Text>Resultado: {operacao} </Text>

        </View>
    )

}
