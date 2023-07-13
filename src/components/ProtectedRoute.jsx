import React, { useContext, useEffect } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const ProtectedRoute = ({ children, needsAuth = true }) => {
  const { auth, user, logout } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (needsAuth) {
      !auth && navigate("/login");
    } else {
      auth && navigate("/tasksmanager");
    }
  }, [auth, user]);

  return (
    <>
      {auth && (
        <Box
          sx={{
            padding: 2,
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginLeft: "auto",
              marginRight: 2,
            }}
          >
            <Typography color={"white"}>Bienvenido {user.email} !</Typography>
            <Button onClick={logout} variant="contained" color="delete">
              Logout
            </Button>
          </Box>
        </Box>
      )}

      {children}
    </>
  );
};

export default ProtectedRoute;
