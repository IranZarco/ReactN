import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'; 
import { BtnTouch } from '../componets/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"InicioScreen">{};

export const InicioScreen = ( { navigation }:Props ) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.texto}>DSM-53</Text>
        </View>
        <View>
            <Image style={styles.imagen} source = {require('./../../assets/perfil.jpeg')}/>
        </View>
        <View>
            <Text style={styles.texto}>Iran Cardenas Zarco</Text>
        </View>
        <View>
            <Text style={styles.texto}>Profesor: Fidel Rodrigo Lazcano Martinez</Text>
        </View>
        <BtnTouch
            action={ () => navigation.navigate("HobbiesScreen") }
            title='Mis Hobbies'
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#0637FF',
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
        alignSelf: 'flex-end',
        fontSize: 18,
        color: 'white',
        padding: 10,
    },
})