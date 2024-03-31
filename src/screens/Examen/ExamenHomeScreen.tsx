import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { ExamenResponse } from '../../interfaces/pandoraApiInterfaces';
import { appTheme } from '../../themes/appTheme';
import { useExamenApi } from '../../hooks/useExamenApi';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BtnTouch } from '../../componets/BtnTouch';
import { ExamenCard } from '../../componets/ExamenCard';

export const ExamenHomeScreen = () => {

    const { listExamen, isLoading, loadExamen } = useExamenApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const createExamen: ExamenResponse = {
        _id: '',
        nombre: '',
        apellido: '',
        edad: '',
        genero: 'No quiero decir',
        __v: 0,
    }

    useEffect( () => {
        ( isLoading ) && loadExamen();
    },[isFocused]);

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                // Convertir objectos en array
                data={ Object.values( listExamen ) }
                keyExtractor={ (item) => '#'+item._id }
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                marginTop: 20
                            }}
                        >
                            Registro
                        </Text>
                        {
                            ( !isLoading ) &&
                            <ActivityIndicator
                                style={{ height: 100 }}
                                size={ 40 }
                                color="pink"
                            />
                        }
                        <BtnTouch
                            title='Crear registro'
                            action={ () => navigation.navigate("ExamenFormScreen",{ExamenResponse:createExamen}) }
                            background='#5DADE2'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadExamen }
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <ExamenCard
                        examen={ item }
                    />
                )}
            />
        </View>
    )
}