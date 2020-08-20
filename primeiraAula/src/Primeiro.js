import React from 'react'
import {Text, StyleSheet} from 'react-native'

// export default () => <Text>Meu primeiro componente!!!</Text>

/* export default () => {
     return(
         <Text>Meu primeiro componente!!!</Text>
     );
}*/

export default function Primeiro() {
    return(
        <Text style={styles.text1}> Meu primeiro componente!!!</Text>
    );
}

const styles = new StyleSheet.create({
    text1:{
        fontSize: 24,  //tamnho da fonte
        color: 'blue', //Cor da fonte
        fontWeight:'bold', //normal, bold, 100-900
        fontStyle:'italic', //normal,
        textAlign: 'center', //"auto", "left", "right", "center", "justify"
        textTransform:'uppercase',//"none", "uppercase", "lowercase", "capitalize"
    },
    text2:{
        fontSize: 16,
        color: 'green',
        fontWeight:'bold'
    }
})