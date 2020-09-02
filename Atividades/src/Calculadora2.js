import React, { Component } from 'react'
import { Text, Button, TextInput, View } from 'react-native'

export default class Calculadora extends Component {
    state = {
        num1: this.num1,
        num2: this.num2,
        resultado: this.resultado
    }

    soma(num1, num2) {
        this.setState({ resultado: (parseInt(num1) + parseInt(num2)) })
    }

    subtracao(num1, num2) {
        parseInt(this.setState({ resultado: num1 - num2 }))
    }

    multiplicacao(num1, num2) {
        parseInt(this.setState({ resultado: num1 * num2 }))
    }

    divisao(num1, num2) {
        if (parseInt(num2) === 0){
            Alert.alert("Dividendo nulo!")
        }
        parseInt(this.setState({ resultado: num1 / num2 }))
    }


    render() {
        return (
            <View>
            <>
                <Text> Valor inicial do contador: {this.props.valor}</Text>
                <TextInput
                    placeholder="Digite o numero1"
                    value={this.num1}
                    onChangeText={(num1) => this.setState({num1})}
                />
                <TextInput
                    placeholder="Digite o numero2"
                    value={this.num2}
                    onChangeText={(num2) => this.setState({num2})}
                />
                <Button
                    color="black" title="Somar" onPress={() => this.soma(this.state.num1, this.state.num2)}
                />
                <Button
                    color="red" title="Subtrair" onPress={() => this.subtracao(this.state.num1, this.state.num2)}
                />
                <Button
                    color="black" title="Multiplicar" onPress={() => this.multiplicacao(this.state.num1, this.state.num2)}
                />
                <Button
                    color="red" title="Dividir" onPress={() => this.divisao(this.state.num1, this.state.num2)}
                />
                <Text> Resultado: {this.state.resultado}</Text>
            </>
            </View>
        );
    }
}

