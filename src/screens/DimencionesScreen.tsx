import React from 'react'
import { Text, View, StyleSheet, useWindowDimensions } from 'react-native'

export const DimencionesScreen = () => {
    const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
        <View style={{...styles.cajaMorada,width:width * 0.6}}>
            <Text style={styles.title}>
                Ancho: {width} Alto: {height}
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'violet',
    },
    
    cajaMorada:{
        backgroundColor: '#5961DE',
        height: '50%',
    },
    cajaNaranja:{
        backgroundColor: '#f0a23b',
    },
    title:{
        fontSize: 30,
        textAlign: 'center',
    },
})