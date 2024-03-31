import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { ExamenResponse } from "../interfaces/pandoraApiInterfaces";
import { FormData } from "./useFormExamen";

export const useExamenApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    const [ listExamen, setListExamen ] = useState<ExamenResponse>({} as ExamenResponse);

    const apiUrl: string = 'http://192.168.145.231:3000/api/v1/examens';

    const loadExamen = async () => {

        setIsLoading(false); 

        const response = await pandoraApi.get<ExamenResponse>( apiUrl );

        setListExamen( response.data );

        setIsLoading(true); 

    }

    const  createExamen =  async ( data: FormData ) => {
        const dataBody = {
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            genero: data.genero,
        };

        await pandoraApi.post( apiUrl, dataBody );

    }

    const updateExamen =  async ( data: FormData ) => {

        const dataBody = {
            nombre: data.nombre,
            apellido: data.apellido,
            edad: data.edad,
            genero: data.genero,
        };

        await pandoraApi.put( apiUrl + `/${data._id}`, dataBody );

    }

    const deleteExamen = async ( data: FormData ) => {
        await pandoraApi.delete( apiUrl + `/${data._id}` );
    }

    useEffect(() =>{
        loadExamen();
    },[]);

    return { 
        isLoading, 
        listExamen,
        loadExamen, 
        createExamen, 
        updateExamen, 
        deleteExamen,
    };

}