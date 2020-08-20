import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor='#7fffd4'/>
            <Quadrado cor='#ff801a'/>
            <Quadrado cor='#50d1f6'/>
            <Quadrado cor='#dd22c1'/>
            <Quadrado cor='#8312ed'/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        // flexGrow:1,
        backgroundColor:'black',
        width:'100%'
    }
})