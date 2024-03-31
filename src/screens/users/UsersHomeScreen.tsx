import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { UsersResponse } from '../../interfaces/pandoraApiInterfaces';
import {appTheme} from '../../themes/appTheme';
import { useUserApi } from '../../hooks/useUserApi';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { BtnTouch } from '../../componets/BtnTouch';
import { UsersCard } from '../../componets/UsersCard';

export const UsersHomeScreen = () => {

    const { listUser, isLoading, loadUser } = useUserApi();

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const createUser: UsersResponse = {
        id_usuario: '',
        username: '',
        email: '',
        password: '',
        cp: '',
        __v: 0,
    }

    useEffect( () => {
        ( isLoading ) && loadUser();
    },[isFocused]);

    return(
        <View
            style={ appTheme.globalContainer }
        >
            <FlatList
                // Convertir objectos en array
                data={ Object.values( listUser ) }
                keyExtractor={ (item) => '#'+item.id_usuario}
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
                            title='Crear user'
                            action={ () => navigation.navigate("UsersFormScreen",{UsersResponse:createUser}) }
                            background='#5DADE2'
                        />
                    </View>
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={ (!isLoading) }
                        onRefresh={ loadUser }
                        colors={ ["pink"] }
                        progressBackgroundColor="black"
                    />
                }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ( { item } ) => (
                    <UsersCard
                        user={ item }
                    />
                )}
            />
        </View>
    )
}