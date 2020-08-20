import React from 'react'
import {View,StyleSheet} from 'react-native'

export default () => {
    return (
        <View style={styles.FlexV4}>
            <View style={styles.V0}/>
            <View style={styles.V1}/>
            <View style={styles.V2}/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV4:{
        width: 100,
        backgroundColor:'black',
        flexGrow:1
    },
    V0:{
        backgroundColor:'#36c9a7',
        height: 100
    },
    V1:{
        backgroundColor:'#ff801a',
        flexGrow:2
    },
    V2:{
        backgroundColor:'#dd22c1',
        flexGrow:1
    }
})