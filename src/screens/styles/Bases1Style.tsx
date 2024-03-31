import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Bases1Style = () => {
  return (
    <View>
        <View style = {{
            backgroundColor: '#4b9b56',
            height: '20%',
            width: 100,
            paddingVertical: 100, 
        }}
        />
        <View style = {{
            backgroundColor: 'blue',
            height: '20%',
            width: 100,
            paddingVertical: 100, 
        }}
        />
        <View style = {{
            backgroundColor: 'violet',
            height: '20%',
            width: 100,
            paddingVertical: 100, 
        }}
        />
    </View>
  )
}
