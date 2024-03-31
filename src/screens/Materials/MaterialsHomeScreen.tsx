import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BtnTouch } from '../../componets/BtnTouch';
import { appTheme } from '../../themes/appTheme';
import { MaterialsResponse } from '../../interfaces/pandoraApiInterfaces';
import { useMaterialApi } from '../../hooks/useMaterialApi';
import { MaterialsCard } from '../../componets/MaterialsCard';

export const MaterialsHomeScreen = () => {

    const { listMaterial, isLoading, loadMaterial } = useMaterialApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const createMaterial: MaterialsResponse = {
        id_material: '',
        nombre: '',
        peso: '',
        densidad: '',
        tipo: '',
        costo_my: '',
        costo_mn: '',
        __v: 0,
    }

    useEffect( () => {
        ( isLoading ) && loadMaterial();
    },[isFocused]);

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                // Convertir objectos en array
                data={ Object.values( listMaterial ) }
                keyExtractor={ (item) => '#'+item.id_material}
                ListHeaderComponent={(
                    <View>
                        <Text
                            style={{
                                ...appTheme.title,
                                ...appTheme.globalMargin,
                                marginTop: 20
                            }}
                        >
                            Registro Materia Prima
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
                            title='Crear Material'
                            action={ () => navigation.navigate("MaterialsFormScreen",{MaterialsResponse:createMaterial}) }
                            background='#5DADE2'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadMaterial }
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <MaterialsCard
                        material={ item }
                    />
                )}
            />
        </View>
    )
}