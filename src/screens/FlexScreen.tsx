import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        //flexWrap: 'wrap-reverse',
        justifyContent: 'space-evenly'
    },
    box1: {
        //flex: 1,
        backgroundColor: 'white',
        width: 100,
        height: 100,
        alignSelf: 'flex-end'
    },
    box2: {
        //flex: 2,
        backgroundColor: 'pink',
        width: 100,
        height: 100,
    },
    box3: {
        //flex: 3,
        backgroundColor: 'blue',
        width: 100,
        height: 100,
    },
})
