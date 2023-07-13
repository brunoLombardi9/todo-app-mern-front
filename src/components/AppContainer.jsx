import { Grid } from "@mui/material";
import React from "react";

const AppContainer = ({ children }) => {
  return (
    <Grid
      component="header"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column ",
        alignContent:"center",
        backgroundColor: "primary.main",
      }}
    >
      {children}
    </Grid>
  );
};

export default AppContainer;
