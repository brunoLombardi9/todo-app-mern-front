import { Grid } from '@mui/material'
import React from 'react'

const AppContainer = ({ children }) => {
    return (
        <Grid
            component="header"
            sx={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.main"
            }}
        >
            {children}
        </Grid>
    )
}

export default AppContainer