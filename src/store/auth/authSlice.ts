import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
     name: 'auth',
     initialState: {
         status:'not-Autenticated',//'not-Autenticated','Authenticated
         uid:null,
         email:null,
         displayName:null,
         photoURL:null,
         errorMessage:null,
     },
     reducers: {
           login: (state,  {payload}  ) => {
            state.status='Autenticated';//'not-Autenticated','Authenticated
            state.uid=payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage=null;

             
          },
           logout: (state, {payload}  ) => {
            state.status='not-Autenticated';//'not-Autenticated','Authenticated
            state.uid=null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage=payload.errorMessage;

             
          },
           checkingCredetial: (state ) => {
              state.status='checking'
          },
     }
});


// Action creators are generated for each case reducer function
export const { login,logout,checkingCredetial } = authSlice.actions;