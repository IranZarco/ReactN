import React from 'react';
import { View, Text } from 'react-native';

const mostrarI = ():void => console.log("Hola");

mostrarI();

const mostrarII = ():void =>{
    console.log("Funcion 2");
}

mostrarII();

const saludo = (nombre:string) :void =>{
    console.log(`Heyyyyyyyyyyyyyyyyyyy muy buenas a todos guapisimos aqui ${nombre}`);
}
saludo("Vegetta 777");

const user_info = (nombre:string, apellido:string, edad?:number) :void =>{
    console.log (`User: ${nombre}, Apellido ${apellido}, Edad:`,(edad)? edad : '');
}
user_info("Iran", "Cardenas", 20);
user_info("Yosimar", "Gomez", 20);
user_info("Luis Angen", "Pillo", 20);

const cartaPostre = ( postre: string, ...frutas: string[]) :void =>{
    console.log (`Postre: ${postre}, Fruta: ${frutas}`);
}
cartaPostre("pay de manzana", "Manzana");
cartaPostre("pay de frutas", "Manzana, Uva, Piña, Cereza");

export const Funciones = () => {
  return (
    <View>
      <Text>
        Funciones
      </Text>
    </View>
  )
}

export default Funciones;