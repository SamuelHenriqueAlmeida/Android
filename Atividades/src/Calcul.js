import React, { Component } from 'react'
import { Text, Button, TextInput } from 'react-native'

export default class Contador extends Component {
        state = {
            resultado = this.props.valor
        }
        soma(num1, num2) {
            parseInt(num1)
            parseInt(num2)
            parseInt(this.setState({ resultado: num1 + num2 }))
        }
    
        subtracao(num1, num2) {
            parseInt(this.setState({ resultado: num1 - num2 }))
        }

        render(){
            return(
            <>
                <TextInput
                    placeholder = "Digite o primeiro numero"
                    value = {this.state.num1}
                    onChangeText={this.num1}
                />
                  <TextInput
                    placeholder = "Digite o segundo numero"
                    value = {this.state.num2}
                    onChangeText={this.num2}
                />
                <Button
                    collor="black" title="soma" onPress={() => this.soma(this.num1, this.num2)}
                />
                <Button
                    collor="red" title="subtracao" onPress={() => this.subtracao(this.num1, this.num2)}
                />
                <Text> Resultado: {this.state.valor}</Text>
            </>
            );
        }

}
