


import { async } from "@firebase/util";
import { Inputs } from "../../auth/pages/RegisterPage";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider";
import { AppDispatch } from "../store";
import { checkingCredetial, login, logout } from "./authSlice";


export interface PropsChecking {
    email?:string;
    password?:string;
}




export const checkingAuthentication=(data:PropsChecking)=>{

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

export const startCreatingUserWithEmailPassword =(data:Inputs)=>{
    return async (dispatch:AppDispatch)=>{
        dispatch( checkingCredetial() )

       const result = await registerUserWithEmailPassword(data)

       if(!result.ok)return dispatch(logout(result.errorMessage))

       dispatch(login(result))

      
    }

}

export const startLoginWithEmailPassword=(data:Inputs)=>{
    return async(dispatch:AppDispatch)=>{
        dispatch(checkingCredetial());
        const result= await loginWithEmailPassword(data)
        
        if(!result.ok) return dispatch(logout(result))

        dispatch(login(result))
    }

} 

export const StartLogout =()=>{
    return async(dispatch:AppDispatch)=>{
        await logoutFirebase();

        dispatch(logout({}));

    }
}