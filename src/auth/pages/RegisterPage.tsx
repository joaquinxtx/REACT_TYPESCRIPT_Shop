import { Google } from '@mui/icons-material'
import {Link as RouterLink}from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../Layout/AuthLayout'

export const RegisterPage = () => {
  return (
<div className="BackcgroundAuthLayout">
    <AuthLayout title='Registrarse'>
        
        <form>
                <Grid container>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label='Nombre Completo' type='text' placeholder='Nombre' fullWidth/>
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label='correo' type='email' placeholder='Correo@google.com' fullWidth/>
                    </Grid>

                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField label='contraseña' type='password' placeholder='Correo@google.com' fullWidth/>
                    </Grid>

                    <Grid container spacing={2} sx={{mb:1}} >
                        <Grid item xs={12} sm={12} sx={{mt:2}}>
                            <Button variant='contained' fullWidth>
                            <Typography sx={{ml:1}}>Crear Cuenta</Typography>
                            </Button>

                        </Grid>
                        

                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{mr:1}}>¿ Ya estas registrado ? </Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
    </AuthLayout>
</div>
  )
}
