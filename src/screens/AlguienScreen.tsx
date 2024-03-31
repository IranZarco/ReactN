import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { BtnTouch } from '../componets/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"AlguienScreen">{};

export const AlguienScreen = ( { navigation } :Props ) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.texto1}>Mi mascota</Text>
        </View>
        <View>
            <Image style={styles.imagen} source = {require('./../../assets/mora.jpeg')}/>
        </View>
        <View>
            <Text style={styles.texto}>Mora es una perra leal, es muy juguetona y a veces es muy tranquila, aunque sea muy pequeña, se sabe defender muy bien, es una buena mamá y es una gran mascota.</Text>
        </View>
        <BtnTouch 
            title='Regresar a mis hobbies'
            action={ () => navigation.pop() }
        />
        <BtnTouch 
            title='Regresar al inicio'
            action={ () => navigation.popToTop() }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#00A2FF',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    imagen: {
        width: 200,
        height: 200,
        marginRight:10,
        borderRadius: 100,
    },
    texto: {
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white',
    },
    texto1: {
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        fontSize: 40,
        color: 'white',
    },
})
