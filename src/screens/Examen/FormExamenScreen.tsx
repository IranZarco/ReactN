import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackExamenParams } from '../../navigator/ExamenNavigator';
import { useFormExamen } from '../../hooks/useFormExamen';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';

interface Props extends StackScreenProps<RootStackExamenParams,'ExamenFormScreen'>{};

interface BtnForm{
    nombre:      string;
    genero:     string;
    action: () => void;
}

const BtnForm = ( { nombre, genero, action } :BtnForm ) => {

    let colorbtn: string = 'white';

    switch( genero ){
        case 'No quiero decir':
            colorbtn = 'gray';
            break;
        case 'Hombre':
            colorbtn = 'blue';
            break;
        case 'Mujer':
            colorbtn = 'pink';
            break;
    }

    return(
        <TouchableOpacity
            onPress={ action }
        >
            <View
                style={{
                    backgroundColor: colorbtn,
                    borderRadius: 30,
                    borderWidth: ( genero == '' ) ? 1 : 0,
                    marginHorizontal: 2,
                    justifyContent: 'center',
                    height: 60,
                    width: 90,
                }}
            >
                <Text
                    style={{
                        color: ( genero == '' ) ? 'black' : 'white',
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 17
                    }}
                >
                    { nombre }
                </Text>
            </View>
        </TouchableOpacity> 
    );

}

export const ExamenFormScreen = ( { navigation, route } :Props ) => {

    const { 
        state, 
        handleSubmit, 
        handleInputChange, 
        handleDelete
    } = useFormExamen();

    useEffect( () => {
        const examen = route.params.ExamenResponse;
        handleInputChange( '_id', examen._id );
        handleInputChange( 'nombre', examen.nombre );
        handleInputChange( 'apellido', examen.apellido );
        handleInputChange( 'edad', examen.edad );
        handleInputChange( 'genero', examen.genero );
    },[]);

    return(
        <View
            style={{
                ...appTheme.globalContainer,
                ...appTheme.globalMargin,
                marginHorizontal: 10,
            }}
        >
            {
                ( state._id !== '' ) && 
                <BtnTouch 
                    title='Eliminar registro' 
                    action={ () => {
                        handleDelete();
                        navigation.popToTop();
                    }}
                    background='red'
                />
            }
            <Text
                style={appTheme.title}
            >
                Formulario
            </Text>
            <View
                style={{ alignItems: "center" }}
            >
                { /* Formulario */ }
                <TextInput
                    style={ appTheme.input }
                    value={ state.nombre }
                    onChangeText={ (text) => handleInputChange( 'nombre', text ) }
                    placeholder='nombre'
                />
                <TextInput
                    style={ appTheme.input }
                    value={ state.apellido }
                    onChangeText={ (text) => handleInputChange( 'apellido', text ) }
                    placeholder='apellido'
                />
                <TextInput
                    style={ appTheme.input }
                    value={ state.edad }
                    onChangeText={ (text) => handleInputChange( 'edad', text ) }
                    placeholder='edad'
                />
                <Text
                    style={ appTheme.menuText }
                >
                    Genero
                </Text>
                <View
                    style={{ flexDirection: 'row', marginTop: 5 }}
                >
                    <BtnForm
                        nombre='No quiero decir'
                        action={ () => handleInputChange('genero','No quiero decir') }
                        genero={ ( state.genero == 'No quiero decir' ) ? state.genero : '' }
                    />
                    <BtnForm
                        nombre='Hombre'
                        action={ () => handleInputChange('genero','Hombre') }
                        genero={ ( state.genero == 'Hombre' ) ? state.genero : '' }
                    />
                    <BtnForm
                        nombre='Mujer'
                        action={ () => handleInputChange('genero','Mujer') }
                        genero={ ( state.genero == 'Mujer' ) ? state.genero : '' }
                    />
                </View>
                <BtnTouch
                    action={ () => {
                        handleSubmit();
                        navigation.popToTop();
                    }}
                    title={ ( state._id != '' ) ? 'Actualizar' : 'Crear' }
                    background='black'
                />
                <BtnTouch
                    action={ () => navigation.popToTop() }
                    title="Regresar"
                    background='violet'
                />
            </View>
        </View>
    );
}
