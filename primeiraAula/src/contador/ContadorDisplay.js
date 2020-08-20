import React from 'react'
import {View,Text, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={styles.Display}>
            <Text style={styles.texto}>{props.num}</Text>
        </View>
    );  
}

const styles = StyleSheet.create({
    Display:{
        backgroundColor: 'cornflowerblue',
        alignItems:'center',
        width:50
    },
    texto:{
        color: '#FFF',
        fontSize: 24
    }

})

