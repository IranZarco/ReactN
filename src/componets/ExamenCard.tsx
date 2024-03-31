import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ExamenResponse } from '../interfaces/pandoraApiInterfaces';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    examen: ExamenResponse;
}

export const ExamenCard = ( { examen } :Props ) => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    const status = ( examen: ExamenResponse ) => {
        switch( examen.genero ){
            case 'No quiero decir':
                return 'gray';
            case 'Hombre':
                return 'blue';
            case 'Mujer':
                return 'pink';
            default:
                return 'white';
        }
    }

    return(
        <TouchableOpacity
            key={ `${examen._id}${examen.__v}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('ExamenFormScreen',{ ExamenResponse: examen }) }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    backgroundColor: status(examen),
                    width: width * 0.40,
                }}
            >
                <Text
                    style={ styles.title }
                >
                    { `nombre: \n ${examen.nombre} \n` }
                    { `apellido: \n ${examen.apellido} \n` }
                </Text>
            </View>
            <FontAwesome
                style={ styles.icon }
                name='list-alt'
                size={75}
                color="white"
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        height: 120,
        width: 120,
        marginBottom: 25,
        borderRadius: 20,
        overflow: "hidden"
    },
    title:{
        marginHorizontal: 15,
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute",
        bottom: 20,
        right: 15,
        opacity: 0.5,
    }
});