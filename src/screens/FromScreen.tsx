import React from 'react'
import { appTheme } from '../themes/appTheme';
import { View, Text, TextInput } from "react-native";

export const FromScreen = () => {
  return (
    <View
        style={{
            ...appTheme.globalContainer,
            ...appTheme.globalMargin,
            marginHorizontal: 10,
        }}
    >
        <Text 
            style={{ 
                ...appTheme.title
            }}
        >Formulario</Text>
    </View>
  );
};
