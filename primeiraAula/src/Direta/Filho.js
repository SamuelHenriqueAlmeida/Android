import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default props => {
    return (
        <>
            <Text style={styles.text1}>{props.a}</Text>
            <Text style={styles.text2}>{props.b}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    text1:{
        fontSize:24,
        color:'#6495ed',
        fontWeight:'bold'
    },
    text2:{
        fontSize:24,
        color:'#696969',
        fontWeight:'bold'
    }
})
