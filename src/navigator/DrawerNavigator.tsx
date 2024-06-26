import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/stack/Settings';
import { MenuInterno } from '../componets/MenuInterno';
import { AvatarScreen } from '../screens/stack/AvatarScreen';
import { FormScreen } from '../screens/FormScreen';
import { FormContextScreen } from '../screens/FormContextScreen';
import { PokemonNavigator } from './PokemonNavigator';
import { MaterialBottomNavigator } from './MaterialBottomNavigator';


export type RootStackParamsDrawer = {
    StackNavigator: undefined;
    Settings: undefined;
    AvatarScreen: undefined;
    FormScreen: undefined;
    FormContextScreen: undefined;
    PokemonNavigator: undefined;
    MaterialBottomNavigator: undefined;
}

const Drawer = createDrawerNavigator<RootStackParamsDrawer>();

export const DrawerNavigator = () => {

    const { width }  = useWindowDimensions();

    return(
        <Drawer.Navigator
            initialRouteName="MaterialBottomNavigator"
            screenOptions={{
                headerShown: true,
                drawerType: width >= 768 ? 'permanent' : 'front',
                //overlayColor: 'transparent',
                drawerPosition: "right",
                drawerStyle: {
                    backgroundColor: 'rgba(0, 205, 255,0.8)',
                    width: width * 0.7,
                },
                headerStyle: {
                    height: 60,
                },
            }}
            drawerContent={ (props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title:"Home" }}
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="Settings"
                options={{ title:"Settings" }}
                component={ Settings }
            />
            <Drawer.Screen
                name="AvatarScreen"
                options={{ title:"Perfil" }}
                component={ AvatarScreen }
            />
            <Drawer.Screen
                name="FormScreen"
                options={{ title:"Formulario" }}
                component={ FormScreen }
            />
            <Drawer.Screen
                name="PokemonNavigator"
                options={{ title:"Pokedex" }}
                component={ PokemonNavigator }
            />
            <Drawer.Screen
                name="FormContextScreen"
                options={{ title:"Formulario Context" }}
                component={ FormContextScreen }
            />
            <Drawer.Screen
                name="MaterialBottomNavigator"
                options={{ title:"Página Inicial" }}
                component={ MaterialBottomNavigator }
            />
        </Drawer.Navigator>
    );
}