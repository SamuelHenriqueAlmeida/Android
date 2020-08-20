import React from 'react'
import {Button, View, StyleSheet} from 'react-native'

export default props => {
    return (
        <View style={styles.Botoes}>
            <Button
                title="Incremento" onPress={props.inc} color="#dc143c"
            />
            <Button
                title="Decremento" onPress={props.dec} color="darkcyan"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Botoes:{
        flexDirection:'row',
        flexGrow:1
    }
})