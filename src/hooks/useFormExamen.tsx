import { useReducer } from "react";
import { useExamenApi } from "./useExamenApi";


export interface FormData{
    _id:        string;
    nombre:     string;
    apellido:   string;
    edad:       string;
    genero:     'No quiero decir' | 'Hombre' | 'Mujer';
}

export const initialStateForm: FormData = {
    _id: '',
    nombre: '',
    apellido: '',
    edad: '',
    genero: 'No quiero decir',
}

type Action = 
    { type: 'handleInputChange', payload: { fieldName: keyof FormData, value: string } };


const formReducer = ( state: FormData, action: Action ) => {

    switch( action.type ){
        case 'handleInputChange':
            return {
                ...state,
                [ action.payload.fieldName ] : action.payload.value,
            };
        default:
            return { ...state };
    }
}

export const useFormExamen = () => {

    const [ state, dispatch ] = useReducer( formReducer, initialStateForm );

    const { createExamen, updateExamen, deleteExamen} = useExamenApi();

    const handleInputChange = ( fieldName: keyof FormData, value: string ) => {
        dispatch( { type: 'handleInputChange', payload: { fieldName, value } } );
    }

    const handleSubmit = () =>{
        ( state._id === '' )
        ? createExamen( state )
        : updateExamen( state )
    }

    const handleDelete = () => {
        ( state._id !== '' ) && deleteExamen( state );
    }

    return { state, handleInputChange, handleSubmit, handleDelete };

}

