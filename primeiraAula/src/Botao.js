import React from 'react'
import {Button, View, Alert, StyleSheet} from 'react-native'

function alertButton () {
    Alert.alert('Fui clicado!')
}
export default function Botao (){
    return(
        <View style={styles.view} accessible={true}>
            <Button color='blue'  title='Alert!' onPress={() => Alert.alert('Fui clicado!') }/>
            <Button color='green'  title='Alert!' onPress={(alertButton) }/>
            <Button title='Warn!' onPress={() => console.warn('Fui clicado!')} accessibilityLabel="teste"/>
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        width: "50%",
    }
})
