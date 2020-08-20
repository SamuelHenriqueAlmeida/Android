import React,{useState} from 'react'
import {Text, Button, View, StyleSheet} from 'react-native'
import estilo from './Estilo'

export default function Contador (props) {
    let inicial = props.inicial
    const [numero, setNumero] = useState(props.inicial)

    function inc(){
        setNumero(numero * 2)
    }

    function limp(){
        setNumero(inicial)
    }
    
    return(
        <React.Fragment>
            <View style={styles.view1}>                        
                <Text>Valor Inicial: {inicial}</Text>
            </View> 

            <View style={styles.view2}>          
                <Button color="green" title="Dobro" onPress={inc}/>
                <Button color="red" title="Limpar" onPress={limp}/>
                <Text>Valor: {numero}</Text>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    view1:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'gray',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view2:{
        flexDirection:"row",
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: 'white',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'space-around', // centraliza o eixo y
    },
    text:{
        fontSize:32,
        color:'firebrick',
        fontWeight:'bold'
    }
})


// useState => framework verifica quando acontece alguma mudanca
// export default props => {
//     const [numero, setNumero] = useState(props.inicial)
    
//     function inc(){
//        setNumero(numero + 1)
//     }

//     function dec(){
//         setNumero(numero - 1)
//     }
//     return(
//         <View>
//             <Text style={estilo.textHeader}>Valor inicial: {numero}</Text>
//             <Button title="Incremento" onPress={inc}/>
//             <Button title="Decremento" onPress={dec}/>
//         </View>
//     );
// }

// export default ({inicial = 0, passo = 1 }) => {
//     const [numero, setNumero] = useState(inicial)
//     function inc(){
//        setNumero(numero + passo)
//     }
//     function dec(){
//         setNumero(numero - passo)
//     }
//     return(
//         <View>
//             <Text style={estilo.textHeader}>Valor inicial: {numero}</Text>
//             <Button title="+" onPress={inc}/>
//             <Button title="-" onPress={dec}/>
//         </View>
//     );
// }