import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExamenHomeScreen } from '../screens/Examen/ExamenHomeScreen';
import { ExamenFormScreen } from '../screens/Examen/FormExamenScreen';
import { ExamenResponse } from '../interfaces/pandoraApiInterfaces';

export type RootStackExamenParams = {
    ExamenHomeScreen: undefined;
    ExamenFormScreen: { ExamenResponse: ExamenResponse };
}

const Stack = createStackNavigator<RootStackExamenParams>();

export const ExamenNavigator = () => {

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stack.Screen
                component={ ExamenHomeScreen }
                name='ExamenHomeScreen'
            />
            <Stack.Screen
                component={ ExamenFormScreen }
                name='ExamenFormScreen'
            />
        </Stack.Navigator>
    );
}
