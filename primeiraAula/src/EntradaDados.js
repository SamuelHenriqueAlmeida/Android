import React, {useState} from 'react'
import {View,TextInput, Text, StyleSheet, Alert, Button} from 'react-native'

export default props => {
    const [nome, setNome] = useState('')

    return (
        <View>
            <Text style={styles.text}>Texto digitado: {nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        color:'blue',
        fontWeight:'bold'
    }
})
