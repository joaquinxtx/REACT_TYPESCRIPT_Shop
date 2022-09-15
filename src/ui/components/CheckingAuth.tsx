import { Grid } from '@mui/material'
import React from 'react'
import './CheckingAuth'

export const CheckingAuth = () => {
  return (
    <Grid
      container
      className="backgrounAuth"
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", padding: 4 }}
    >

        <div className="lds-facebook"><div></div><div></div><div></div></div>
    </Grid>
  )
}
