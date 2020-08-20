import React from 'react'
import {Text, View} from 'react-native'
import estilo from './Estilo'

//Por convensao, chamamos o parametro de props 
// export default function Parametro (props) {
//     console.warn(props)
//     return(
//         <View style={estilo.viewStyle}>
//             <Text> Valores recebidos por parametro: { props.valor1}</Text>
//             <Text>O dobro de { props.valor1} eh: { props.valor1 * 2}</Text>
//             <Text> Valores recebidos por parametro: { props.valor2}</Text>
//             <Text> O dobro de { props.valor2} eh: { props.valor2 * 2}</Text>
//         </View>
//     );
// }

export default props => {
    console.warn(props)
    return(
        <View style={estilo.viewStyle}>
            <Text> Valores recebidos por parametro: { props.valor1}</Text>
            <Text>O dobro de { props.valor1} eh: { props.valor1 * 2}</Text>
            <Text> Valores recebidos por parametro: { props.valor2}</Text>
            <Text> O dobro de { props.valor2} eh: { props.valor2 * 2}</Text>
        </View>
    );
}