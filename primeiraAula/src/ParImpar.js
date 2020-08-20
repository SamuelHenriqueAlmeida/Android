import React from 'react'
import {View,Text} from 'react-native'

export default ({num = 0}) => {
    if(num %2 === 0){
        return(
            <View>
                <Text>O resultado eh:</Text>
                <Text>Par</Text>
            </View>
        )
    }
    else{
        return(
            <View>
                <Text>O resultado eh:</Text>
                <Text>Impar</Text>
            </View>
        )
    }
}

// export default ({num = 0}) => {
//     return(
//         <View>
//             <Text>O resultado eh:</Text>
//             {num %2 ===0
//             ? <Text>Par</Text>
//             : <Text>Impar</Text> 
//             }
            
//         </View>
//     )
// }