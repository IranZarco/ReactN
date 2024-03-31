import { useReducer } from "react";
import { useMaterialApi } from "./useMaterialApi";

export interface FormData{

    id_material:    string ;
    nombre:         string;
    peso:           string;
    densidad:       string;
    tipo:           string;
    costo_my:       string;
    costo_mn:       string;

}

export const InitialStateForm :FormData={
    id_material:'',
    nombre:'',
    peso:'',
    densidad:'',
    tipo:'',
    costo_my:'',
    costo_mn:''
}

type Action = {type: 'handleInputChange',payload:{fieldName: keyof FormData, value:string}}


const  formReducer =(state:FormData, action:Action)=>{

    switch (action.type){
        case 'handleInputChange':
            return{
                ...state,
                [action.payload.fieldName]:action.payload.value,
            }
            default:
                return {...state};

            }

}

export const useFormMaterial=()=>{
    const [state,dispatch]=useReducer(formReducer,InitialStateForm)
    const {createMaterial,updateMaterial,deleteMaterial}= useMaterialApi();
    const handleInputChange =(fieldName:keyof FormData, value:string)=>{
    dispatch({type:'handleInputChange', payload:{fieldName,value}})
    }

    const handleSubmit =()=>{
        (state.id_material==='')
        ?createMaterial(state)
        :updateMaterial(state)
    }

    const handleDelete =()=>{
        (state.id_material!=='')
        &&deleteMaterial(state)
    }

    return {
        state,handleDelete,handleInputChange,handleSubmit
    }

}

