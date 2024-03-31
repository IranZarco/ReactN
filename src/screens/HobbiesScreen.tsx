import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'; 
import { BtnTouch } from '../componets/BtnTouch';

interface Props extends StackScreenProps<RootStackParams,"HobbiesScreen">{};

export const HobbiesScreen = ( { navigation }:Props ) => {

  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.imagen} source = {require('./../../assets/junto.png')}/>
            <Text style={styles.texto}>Los videjuegos me gusta jugarlos desde que era un niño y me apaciona jugar los juegos en linea.</Text>
            <Text style={styles.texto}>En el ajedrez me apaciona jugar con este juego desde que tenia 15 años al inicio me aburria pero despues vi que era emocionante y lo juego casi diario.</Text>
            <Text style={styles.texto}>Con la guitarraA me intereso tocar la guitarra pero no tenia, hasta entrar a la universidad en el taller de rondalla que quise aprender tocar la guitarra y me gusto hasta que me compre una y e estado precticando y mi tiempo libre </Text>
        </View>
        <BtnTouch
                action={ () => navigation.navigate("AlguienScreen") }
                title='Alguien Importante'
            />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#E025FE',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    imagen: {
        width: 200,
        height: 200,
        marginRight:10,
        borderRadius: 100,
        alignSelf: 'center',
    },
    texto: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
        padding: 10,
    }
})
