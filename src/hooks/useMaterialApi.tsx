import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { MaterialsResponse } from "../interfaces/pandoraApiInterfaces";
import { FormData } from "./useFormMaterial";

export const useMaterialApi = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);


    const [ listMaterial, setListMaterial ] = useState<MaterialsResponse>({} as MaterialsResponse);

    const apiUrl: string = 'http://192.168.145.231:3000/api/v1/materials';

    const loadMaterial = async () => {

        setIsLoading(false); 

        const response = await pandoraApi.get<MaterialsResponse>( apiUrl );

        setListMaterial( response.data );

        setIsLoading(true); 

    }

    const  createMaterial =  async ( data: FormData ) => {
        const dataBody = {
            nombre: data.nombre,
            peso: data.peso,
            densidad: data.densidad,
            tipo: data.tipo,
            costo_my: data.costo_my,
            costo_mn: data.costo_mn,
        };

        await pandoraApi.post( apiUrl, dataBody );

    }

    const updateMaterial =  async ( data: FormData ) => {

        const dataBody = {
            nombre: data.nombre,
            peso: data.peso,
            densidad: data.densidad,
            tipo: data.tipo,
            costo_my: data.costo_my,
            costo_mn: data.costo_mn,
        };

        await pandoraApi.put( apiUrl + `/${data.id_material}`, dataBody );

    }

    const deleteMaterial = async ( data: FormData ) => {
        await pandoraApi.delete( apiUrl + `/${data.id_material}` );
    }

    useEffect(() =>{
        loadMaterial();
    },[]);

    return { 
        isLoading, 
        listMaterial,
        loadMaterial, 
        createMaterial, 
        updateMaterial, 
        deleteMaterial
    };

}