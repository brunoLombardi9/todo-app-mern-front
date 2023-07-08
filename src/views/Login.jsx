import React, { useContext, useEffect, useState } from "react";
import CustomBox from "../components/CustomBox";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import apiCall from "../utils/apiCalls";
import { authContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useContext(authContext);
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);

    try {
      const bodyData = { email, password };
      const { data } = await apiCall.post("/login", bodyData);
      login(data);
    } catch (err) {
      if (err?.response) {
        return setError(err?.response?.data?.error);
      }
      setError(err?.error);
    }
  }

  function handleGoogle(e) {
    e.preventDefault();
  }

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);


  return (
    <CustomBox>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        paddingBottom={2}
        component={"form"}
        onSubmit={handleLogin}
      >
        <TextField
          placeholder="E-mail"
          type="email"
          sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Contraseña"
          type="password"
          sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="orange"
          type="submit"
          disabled={!email || !password}
          sx={{ padding: 1.1 }}
        >
          Entrar
        </Button>

        <Button variant="contained" color="success" onClick={handleGoogle}>
          Entrar con Google
          <FcGoogle size={30} />
        </Button>
      </Box>

      <Typography fontSize={14}>
        No tiene una cuenta?{" "}
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          Registro
        </Link>
      </Typography>
    </CustomBox>
  );
};

export default Login;
