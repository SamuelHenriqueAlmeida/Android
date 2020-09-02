import React, {Component} from 'react'
import {Text, Button} from 'react-native'

export default class Contador extends Component{
    state = {
        numero: this.props.valor
    }

    incremento(num){
        this.setState({numero:num+1})
    }

    decremento(num){
        this.setState({numero:num-1})
    }

    render(){ 
        return(
            <>
                <Text> Valor inicial do contador: {this.props.valor}</Text>
                <Text> Valor alterado: {this.state.numero}</Text>
                <Button
                    title="Incremento" onPress={() => this.incremento(this.state.numero)}
                />
                <Button
                    title="Decremento" onPress={() => this.decremento(this.state.numero)}
                />
            </>
        );
    } 
}

