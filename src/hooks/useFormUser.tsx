import { useReducer } from "react";
import { useUserApi } from "./useUserApi";

export interface FormData{
        id_usuario:         string;
        username:      string;
        email: string;
        password:      string;
        cp:             string;
    
    
}

export const InitialStateForm :FormData={
    id_usuario:'',
    username:'',
    email:'',
    password:'',
    cp:''
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

export const useFormUser=()=>{
    const [state,dispatch]=useReducer(formReducer,InitialStateForm)
    const {createUser,updateUser,deleteUser}= useUserApi();
    const handleInputChange =(fieldName:keyof FormData, value:string)=>{
    dispatch({type:'handleInputChange', payload:{fieldName,value}})
    }

    const handleSubmit =()=>{
        (state.id_usuario==='')
        ?createUser(state)
        :updateUser(state)
    }

    const handleDelete =()=>{
        (state.id_usuario!=='')
        &&deleteUser(state)
    }

    return {
        state,handleDelete,handleInputChange,handleSubmit
    }

}

