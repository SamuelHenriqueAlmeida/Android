import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Fragmento() {
    return(
        <React.Fragment>
            <View>
                <Text>View1</Text>
            </View> 
            <View>
                <Text>View2</Text>
            </View>                 
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#5f9ea0',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view2:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'darkslateblue',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    text:{
        fontSize:32,
        color:'firebrick',
        fontWeight:'bold'
    }
})