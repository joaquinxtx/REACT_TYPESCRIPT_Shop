import {useDispatch, useSelector}from 'react-redux'
import { Link as RouterLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../Layout/AuthLayout";
import "./stylesAuth.css";
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';
import { AppDispatch } from '../../store/store';
import { useMemo } from 'react';

type Inputs = {
  correo: string;
  password:string;
  
};




export const LoginPage = () => {

  const{status}=useSelector(state=> state.auth)
  
  const dispatch:AppDispatch = useDispatch();

  const isAutheticated = useMemo(()=>status==='checking',[status] )

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {password,correo}=data
  
    dispatch(checkingAuthentication(password,correo))
}

  console.log(watch("correo","pasword"))

  const onGoogleSignIn =()=>{
    console.log('Google')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type="email"
              placeholder="Correo@google.com"
              fullWidth
              {...register("correo")}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Correo@google.com"
              fullWidth
              {...register("password",{required:true})}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button disabled={isAutheticated} variant="contained" fullWidth type="submit">
                <Typography sx={{ ml: 1 }}>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: 2 }}>
              <Button disabled={isAutheticated} variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
