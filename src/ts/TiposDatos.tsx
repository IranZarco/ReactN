import React from 'react';
import { View, Text } from 'react-native';

const nombre: string = 'rodrigo';
let edad: number|string = 27;

console.log (nombre, edad);

edad = "28";

let si:boolean = true;
let no:boolean = false;

console.log( (si) ? 'verdadero' : 'falso', no);

let arr_number : number[] = [1,2,3,4,5,6];
let arr_string : string[] = ["a","e","i","o","u"];

let coleccion_a: Array<number> = [1,2,3];
let coleccion_b: Array<string> = ["a","e","i","o","u"];

console.log(arr_number, arr_string, coleccion_a, coleccion_b);

let tuple: [number,string,boolean] = [ 10, "Iran", true];

console.log(tuple);



export const TiposDatos = () => {
  return (
    <View>
      <Text>
        Tipos de Datos TS
      </Text>
    </View>
  )
}

export default TiposDatos;