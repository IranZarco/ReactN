import React from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { UsersResponse } from '../interfaces/pandoraApiInterfaces';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Props{
    user: UsersResponse;
}

export const UsersCard = ( { user } :Props ) => {

    const navigation = useNavigation();
    const { width } = Dimensions.get('window');

    return(
        <TouchableOpacity
            key={ `${user.id_usuario}${user.__v}` }
            activeOpacity={ 0.9 }
            onPress={ () => navigation.navigate('UsersFormScreen',{ UsersResponse: user }) }
        >
            <View
                style={{
                    ...styles.cardContainer,
                    backgroundColor: "red",
                    width: width * 0.40,
                }}
            >
                <Text
                    style={ styles.title }
                >
                    { `Título: \n ${user.username} \n` }
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