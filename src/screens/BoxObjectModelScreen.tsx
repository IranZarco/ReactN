import React from 'react'
import { Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style = {{
            flex:1,
            backgroundColor: 'red', 
        }}
        >
        <Text style = {{
            paddingHorizontal: 100,
            paddingVertical: 20,
            fontSize: 30,
            marginHorizontal: 20,
            borderWidth: 10,
            borderRadius: 20,
        }}>Iran Cardenas Zarco</Text>
    </View>
  );
}
