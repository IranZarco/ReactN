import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab1Screen } from '../screens/Tab/Tab1Screen';
import { Tab2Screen } from '../screens/Tab/Tab2Screen';
import { Tab3Screen } from '../screens/Tab/Tab3Screen';
//import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colorsTheme } from '../themes/appTheme';

export type RootTabTopParams = {
    Tab1Screen: undefined;
    Tab2Screen: undefined;
    Tab3Screen: undefined;
}

const Tab = createMaterialTopTabNavigator<RootTabTopParams>();

export const MaterialTopNavigator = () => {
    return(
        <Tab.Navigator
            initialRouteName='Tab1Screen'
            tabBarPosition='top'
            /*
            screenOptions={{
                tabBarShowIcon: true,
                tabBarPressColor: 'violet',
                tabBarPressOpacity: 1,
                tabBarActiveTintColor: 'purple',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 15 },
                tabBarItemStyle: {
                    borderTopWidth: 3,
                    borderTopColor: "violet",
                },
                tabBarStyle: { backgroundColor: 'black' },
                tabBarIndicatorStyle: { 
                    backgroundColor: "purple", 
                    height: 4, 
                    borderRadius: 10,
                }
            }}
             */
            screenOptions={ ({ route }) => ({
                tabBarShowIcon: true,
                tabBarPressColor: colorsTheme.secondary,
                tabBarPressOpacity: 1,
                tabBarActiveTintColor: colorsTheme.primary,
                tabBarInactiveTintColor: colorsTheme.tertiary,
                tabBarShowLabel: true, // Mostrar label
                tabBarLabelStyle: { 
                    fontSize: 8, 
                    fontWeight: 'bold' 
                },
                tabBarItemStyle: {
                    borderTopWidth: 3,
                    borderTopColor: colorsTheme.primary,
                },
                tabBarStyle: { backgroundColor: colorsTheme.background },
                tabBarIndicatorStyle: { 
                    backgroundColor: colorsTheme.primary, 
                    height: 4, 
                    borderRadius: 10,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = "";
                    switch( route.name ){
                        case 'Tab1Screen':
                            iconName = 'group';
                            break;
                        case 'Tab2Screen':
                            iconName = 'cloud';
                            break;
                        case 'Tab3Screen':
                            iconName = 'apple';
                            break;
                    }
                    //return <Text style={{ color }}>{ iconName }</Text>;
                    return <FontAwesome name={iconName} size={22} color={ color } />
                }
            })}
        >
            <Tab.Screen
                name='Tab1Screen'
                options={{
                    title: 'Pantalla 1'
                }}
                component={ Tab1Screen }
            />
            <Tab.Screen
                name='Tab2Screen'
                options={{
                    title: 'Pantalla 2'
                }}
                component={ Tab2Screen }
            />
            <Tab.Screen
                name='Tab3Screen'
                options={{
                    title: 'Pantalla 3'
                }}
                component={ Tab3Screen }
            />
        </Tab.Navigator> 
    );
}