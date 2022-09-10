import { Grid, Typography } from "@mui/material";
import React from "react";


interface Props {
  children: React.ReactNode;
  title?: string;
}

export const AuthLayout = ({ children, title = "" }: Props) => {
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
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ width:{md:450}, backgroundColor: "white", padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>

  );
};
