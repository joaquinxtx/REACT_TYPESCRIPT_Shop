
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { Inputs } from "../auth/pages/RegisterPage";
import { FirebaseAuth } from "./config";

const googleProvider= new GoogleAuthProvider();

export const singInWithGoogle = async()=>{

    try {
        const result = await signInWithPopup(FirebaseAuth,googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        const {displayName,email,photoURL,uid} =result.user
        return{
            ok:true,
            //user Info
            displayName,email,photoURL,uid
        }
       
    } catch (error:any) {
        // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    


        return{
            ok:false,
            errorMessage,
        }
        
    }
}

export const registerUserWithEmailPassword=async(data:Inputs)=>{
    
    
    try {
        console.log(data)
      const resp = await createUserWithEmailAndPassword(FirebaseAuth,data.email,data.password)
      const {uid,photoURL,email,displayName}=resp.user
      console.log(resp)
      
     

      return{
        ok:true,
        uid,photoURL,email,displayName
      }
    
    } catch (error:any) {
        return {ok:false, errorMessage: error.message}
    }
}

export const loginWithEmailPassword =async(data:Inputs)=>{

    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth,data.email,data.password)
        
        const{uid,photoURL,displayName,email}=resp.user

        return{
            ok:true,
            uid,photoURL,displayName,email
        }

    } catch (error:any) {
        return {ok:false, errorMessage: error.message}
    }


}

export const  logoutFirebase = async()=>{

    return await FirebaseAuth.signOut();

}