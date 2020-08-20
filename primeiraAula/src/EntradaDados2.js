import React,{useState} from 'react'
import {Text, View, TextInput, Button, StyleSheet, Alert} from 'react-native'

export default props => {
    const [nome, setNome] = useState('Nome')
    const [sobrenome, setSobrenome] = useState('Sobrenome')

    return (
        <View>
            <Text style={styles.text}> Informe os seguintes dados:</Text>
            <TextInput
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            <TextInput
                placeholder="Digite seu sobrenome"
                value={sobrenome}
                onChangeText={sobrenome => setSobrenome(sobrenome)}
            />
            <Button title="Clique-me" onPress={() => Alert.alert(nome + " " + sobrenome)}/>
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