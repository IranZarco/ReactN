import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { Tab1Screen } from "../screens/Tab/Tab1Screen";
import { Tab2Screen } from "../screens/Tab/Tab2Screen";
import { StackNavigator } from "./StackNavigator";
import { MaterialTopNavigator } from "./MaterialTopNavigator";
//import Ionicons from '@expo/vector-icons/Ionicons';
//import { Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { colorsTheme } from "../themes/appTheme";
import { TareaNavigator } from "./TareaNavigator";
import { ExamenNavigator } from "./ExamenNavigator";
import { UserNavigator } from "./UserNavigator";
import { MaterialNavigator } from "./MaterialNavigator";


export type RootTabBottomParams = {
    UserNavigator:undefined;
    TareaNavigator: undefined;
    ExamenNavigator: undefined;
    MaterialTopNavigator: undefined;
    StackNavigator: undefined;
    MaterialNavigator: undefined;
}

const Tab = createMaterialBottomTabNavigator<RootTabBottomParams>();

export const MaterialBottomNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName="StackNavigator"
            sceneAnimationEnabled={ true }
            activeColor={ colorsTheme.primary }
            inactiveColor={ colorsTheme.tertiary }
            labeled={true} // Mostrar label
            barStyle={{
                borderTopWidth: 2,
                borderTopColor: colorsTheme.secondary,
                paddingBottom: 0,
                backgroundColor: colorsTheme.background,
                elevation: 0,
            }}
            screenOptions={ ({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName: string = "";
                    switch( route.name ){
                        case 'TareaNavigator':
                            iconName = 'group';
                            break;
                        case 'ExamenNavigator':
                            iconName = 'cloud';
                            break;
                        case 'MaterialTopNavigator':
                            iconName = 'apple';
                            break;
                        case 'StackNavigator':
                            iconName = 'compass';
                            break;
                        case 'UserNavigator':
                            iconName = 'compass';
                            break;
                        case 'MaterialNavigator':
                            iconName = 'apple';
                            break;
                    }
                    //return <Text style={{ color }}>{ iconName }</Text>;
                    return <FontAwesome name={iconName} size={24} color={ color } />
                }
            })}
        >
            <Tab.Screen
                name="TareaNavigator"
                options={{ 
                    title: "Pantalla 1",
                    //tabBarLabel: "I",
                }}
                component={ TareaNavigator }
            />
            <Tab.Screen
                name="ExamenNavigator"
                options={{ title: "Pantalla 2" }}
                component={ ExamenNavigator }
            />
            <Tab.Screen
                name="MaterialTopNavigator"
                options={{ title: "Pantalla 3" }}
                component={ MaterialTopNavigator }
            />
            <Tab.Screen
                name="StackNavigator"
                options={{ title: "Pantalla 4" }}
                component={ StackNavigator }
            />
            <Tab.Screen
                name="UserNavigator"
                options={{ 
                    title: "Pantalla 5",
                    //tabBarLabel: "I",
                }}
                component={ UserNavigator}
            />
            <Tab.Screen
                name="MaterialNavigator"
                options={{ 
                    title: "Pantalla 6",
                    //tabBarLabel: "I",
                }}
                component={ MaterialNavigator}
            />
        </Tab.Navigator>
    );
}