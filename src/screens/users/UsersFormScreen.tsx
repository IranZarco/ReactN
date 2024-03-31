import React, { useEffect } from 'react';
import { View, Text, TextInput} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackUserParams } from '../../navigator/UserNavigator';
import { useFormUser } from '../../hooks/useFormUser';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';
interface Props extends StackScreenProps<RootStackUserParams,'UsersFormScreen'>{};
    
export const UsersFormScreen = ( { navigation, route } :Props ) => {

    const { 
        state, 
        handleSubmit, 
        handleInputChange, 
        handleDelete
    } = useFormUser();

    useEffect( () => {
        const user = route.params.UsersResponse;
        handleInputChange( 'id_usuario', user.id_usuario);
        handleInputChange( 'username', user.username );
        handleInputChange( 'email', user.email );
        handleInputChange( 'password', user.password );
        handleInputChange( 'cp', user.cp );
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
                ( state.id_usuario !== '' ) && 
                <BtnTouch 
                    title='Eliminar user' 
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
                    value={ state.username }
                    onChangeText={ (text) => handleInputChange( 'username', text ) }
                    placeholder='Nombre de user'
                />
                <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.email }
                    onChangeText={ (text) => handleInputChange( 'email', text ) }
                    placeholder='email'
                />
                  <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.password }
                    onChangeText={ (text) => handleInputChange( 'password', text ) }
                    secureTextEntry={true}
                    placeholder='contra'
                />
                  <TextInput
                    style={{
                        ...appTheme.input,
                        height: "auto",
                    }}
                    value={ state.cp }
                    onChangeText={ (text) => handleInputChange( 'cp', text ) }
                    placeholder='cp'
                />
                <BtnTouch
                    action={ () => {
                        handleSubmit();
                        navigation.popToTop();
                    }}
                    title={ ( state.id_usuario != '' ) ? 'Actualizar Registro' : 'Crear Registro' }
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
