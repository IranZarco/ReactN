import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { UsersResponse } from "../interfaces/pandoraApiInterfaces";
import { FormData } from "./useFormUser";

export const useUserApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    const [ listUser, setListUser ] = useState<UsersResponse>({} as UsersResponse);

    const apiUrl: string = 'http://192.168.145.231:3000/api/v1/usuarios';

    const loadUser = async () => {

        setIsLoading(false); 

        const response = await pandoraApi.get<UsersResponse>( apiUrl );

        setListUser( response.data );

        setIsLoading(true); 

    }

    const  createUser =  async ( data: FormData ) => {
        const dataBody = {
            username: data.username,
            email: data.email,
            password: data.password,
            cp:data.cp,
        };

        await pandoraApi.post( apiUrl, dataBody );

    }

    const updateUser =  async ( data: FormData ) => {

        const dataBody = {
            username: data.username,
            email: data.email,
            password: data.password,
            cp:data.cp,
        };

        await pandoraApi.put( apiUrl + `/${data.id_usuario}`, dataBody );

    }

    const deleteUser = async ( data: FormData ) => {
        await pandoraApi.delete( apiUrl + `/${data.id_usuario}` );
    }

    useEffect(() =>{
        loadUser();
    },[]);

    return { 
        isLoading, 
        listUser,
        loadUser, 
        createUser, 
        updateUser, 
        deleteUser
    };

}