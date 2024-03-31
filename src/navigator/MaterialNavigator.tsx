import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialsFormScreen } from '../screens/Materials/MaterialsFormScreen';
import { MaterialsHomeScreen } from '../screens/Materials/MaterialsHomeScreen';
import { MaterialsResponse } from '../interfaces/pandoraApiInterfaces';

export type RootStackMaterialParams = {
    MaterialsHomeScreen: undefined;
    MaterialsFormScreen: { MaterialsResponse: MaterialsResponse };
}

const Stackuser = createStackNavigator<RootStackMaterialParams>();

export const MaterialNavigator = () => {

    return(
        <Stackuser.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white"
                }
            }}
        >
            <Stackuser.Screen
                component={ MaterialsHomeScreen }
                name='MaterialsHomeScreen'
            />
            <Stackuser.Screen
                component={ MaterialsFormScreen }
                name='MaterialsFormScreen'
            />
        </Stackuser.Navigator>
    );
}
