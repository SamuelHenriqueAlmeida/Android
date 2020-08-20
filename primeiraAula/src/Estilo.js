import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    viewStyle: {
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#5f9ea0',
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    textHeader:{
        fontSize: 32,
        color:'red',
        fontWeight:'bold',
        fontStyle:'italic'
    }
})