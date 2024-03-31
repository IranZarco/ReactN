import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersFormScreen } from '../screens/users/UsersFormScreen';
import { UsersHomeScreen } from '../screens/users/UsersHomeScreen';
import { UsersResponse } from '../interfaces/pandoraApiInterfaces';

export type RootStackUserParams = {
    UsersHomeScreen: undefined;
    UsersFormScreen: { UsersResponse: UsersResponse };
}

const Stackuser = createStackNavigator<RootStackUserParams>();

export const UserNavigator = () => {

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
                component={ UsersHomeScreen }
                name='UsersHomeScreen'
            />
            <Stackuser.Screen
                component={ UsersFormScreen }
                name='UsersFormScreen'
            />
        </Stackuser.Navigator>
    );
}
