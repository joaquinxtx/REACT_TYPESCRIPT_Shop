

import { singInWithGoogle } from "../../firebase/provider";
import { AppDispatch } from "../store";
import { checkingCredetial, login, logout } from "./authSlice";


export interface PropsChecking {
    email?:string;
    password?:string;
}




export const checkingAuthentication=({email,password}:PropsChecking)=>{

    return async(dispatch:AppDispatch)=>{
        dispatch( checkingCredetial() )
    }
}



export const startGoogleSignIn=()=>{

    return async(dispatch:AppDispatch)=>{
        dispatch( checkingCredetial() )
        const result = await singInWithGoogle()

        if(!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}