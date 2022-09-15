import {useMemo} from 'react'
import { Link as RouterLink } from "react-router-dom";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../Layout/AuthLayout";
import { SubmitHandler, useForm } from "react-hook-form";

import { AppDispatch, useAppDispatch } from "../../store/store";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useAppSelector } from "../../hooks/hooks";

export type Inputs = {
    email: string;
    password:string;
    displayName:string;
    
};


export const RegisterPage = () => {

  const dispatch:AppDispatch = useAppDispatch();
  const {
   
    register,
    handleSubmit,
    watch,
    formState: { errors } ,
  } = useForm<Inputs>()




  const onSubmit: SubmitHandler<Inputs> = (data) => { 
    dispatch(startCreatingUserWithEmailPassword(data)) 
    console.log({errorMessage})
}

const{status,errorMessage}=useAppSelector(state=>state.auth)

const isCheckingAuthentication = useMemo(()=>status ==='checking',[status])


  return (
    <div className="BackcgroundAuthLayout">
      <AuthLayout title="Registrarse">
        <form onSubmit={handleSubmit(onSubmit) }>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre Completo"
                type="text"
                placeholder="Nombre"
                fullWidth
               
                {...register("displayName",{
                  required:{
                    value:true,
                    message:'El nombre es requerido'
                  }, 
                  minLength:{
                    value:4,
                    message:'El nombre debe tener mas de 4 letras'
                  }
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                      {errors?.displayName?.message}
              </span>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="Correo@google.com"
                fullWidth
                
                {...register("email",{
                  required:{
                    value:true,
                    message:'El Email es requerido'
                  }
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                      {errors?.email?.message}
              </span>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="Correo@google.com"
                fullWidth
                
                {...register("password",{
                  required:{
                    value:true,
                    message:'El password es requerido'
                  }, 
                  minLength:{
                    value:4,
                    message:'El Password debe tener mas de 4 letras'
                  }
                })}
              />
              <span className="text-danger text-small d-block mb-2">
                      {errors?.password?.message}
              </span>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 1 }}>
            
              <Grid item xs={12} sm={12} sx={{ mt: 2 }} display={!!errorMessage? '':'none'}>
                <Alert severity='error'> {errorMessage } </Alert>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ mt: 2 }}>
                <Button disabled={isCheckingAuthentication} type="submit" variant="contained" fullWidth>
                  <Typography sx={{ ml: 1 }}>Crear Cuenta</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>¿ Ya estas registrado ? </Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </div>
  );
};
