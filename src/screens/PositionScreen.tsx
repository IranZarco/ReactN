import React from 'react'
import { View, StyleSheet } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaVerde}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
    },
    
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: 'violet',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
    },
    cajaVerde:{
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        right: 0,
    },
})