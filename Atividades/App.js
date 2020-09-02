import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculadora2 from './src/Calculadora2'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calculadora2></Calculadora2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
