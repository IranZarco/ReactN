import React, { useEffect } from 'react';
import { View, Text, TextInput} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackMaterialParams } from '../../navigator/MaterialNavigator';
import { useFormMaterial } from '../../hooks/useFormMaterial';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';
interface Props extends StackScreenProps<RootStackMaterialParams,'MaterialsFormScreen'>{};
    
export const MaterialsFormScreen = ( { navigation, route } :Props ) => {

    const { 
        state, 
        handleSubmit, 
        handleInputChange, 
        handleDelete
    } = useFormMaterial();

    useEffect( () => {
        const material = route.params.MaterialsResponse;
        handleInputChange( 'id_material', material.id_material);
        handleInputChange( 'nombre', material.nombre );
        handleInputChange( 'peso', material.peso );
        handleInputChange( 'densidad', material.densidad );
        handleInputChange( 'tipo', material.tipo );
        handleInputChange( 'costo_my', material.costo_my );
        handleInputChange( 'costo_mn', material.costo_mn );
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
                ( state.id_material !== '' ) && 
                <BtnTouch 
                    title='Eliminar material' 
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
                Formulario de Material
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
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.peso }
                    onChangeText={ (text) => handleInputChange( 'peso', text ) }
                    placeholder='peso'
                />
                  <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.densidad }
                    onChangeText={ (text) => handleInputChange( 'densidad', text ) }
                    placeholder='densidad'
                />
                  <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.tipo }
                    onChangeText={ (text) => handleInputChange( 'tipo', text ) }
                    placeholder='tipo'
                />
                <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.costo_my }
                    onChangeText={ (text) => handleInputChange( 'costo_my', text ) }
                    placeholder='costo mayor'
                />
                <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.costo_mn }
                    onChangeText={ (text) => handleInputChange( 'costo_mn', text ) }
                    placeholder='costo menor'
                />
                <BtnTouch
                    action={ () => {
                        handleSubmit();
                        navigation.popToTop();
                    }}
                    title={ ( state.id_material != '' ) ? 'Actualizar Registro' : 'Crear Registro' }
                    background='black'
                />
                <BtnTouch
                    action={ () => navigation.popToTop() }
                    title="Regresar"
                    background='red'
                />
            </View>
        </View>
    );
}
