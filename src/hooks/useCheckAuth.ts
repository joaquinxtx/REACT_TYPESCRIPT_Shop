
import { onAuthStateChanged } from 'firebase/auth'
import {useEffect} from 'react'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/authSlice'
import { useAppDispatch, useAppSelector } from './hooks'

export const useCheckAuth = () => {
    const {status}= useAppSelector(state=>state.auth)

  const dispatch= useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth,async(user)=>{
      if(!user) return dispatch(logout(user))
      const{uid,email,displayName,photoURL}=user
      dispatch(login({uid,email,displayName,photoURL}))
      
    })
    
  }, [])
  return{
    status
  }
}
