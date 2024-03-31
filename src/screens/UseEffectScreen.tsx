import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { appTheme } from '../themes/appTheme';

export const UseEffectScreen = () => {

    const [ hora, setHora ] = useState( new Date() );

    useEffect(() => {
        const interval = setInterval( () => {
            setHora( new Date() );
            return () => clearInterval(interval);
        }, 1000);
    },[]);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin
            }}
        >
            <Text
                style={ appTheme.title }
            >
                { hora.toLocaleTimeString() }
            </Text>
        </View>
    );
}