import React, { useContext, useEffect, useState } from "react";
import CustomBox from "../components/CustomBox";
import { Box, Button, TextField, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import apiCall from "../utils/apiCalls";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { login, user } = useContext(authContext);
  const [error, setError] = useState(null);

  async function handleSignup(e) {
    e.preventDefault();
    setError(null);

    if (password !== passwordConfirmation) {
      return setError("Passwords dont match.");
    }

    if (password.length < 8) {
      return setError("Password must have at least 8 digits.");
    }

    try {
      const bodyData = { email, password };
      const { data } = await apiCall.post("/signup", bodyData);
      login(data)
    } catch (err) {
      if(err?.response){
        return setError(err?.response?.data?.error);
      }
      setError(err?.error)
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
        onSubmit={handleSignup}
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
        <TextField
          placeholder="Confirme contraseña"
          type="password"
          sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button
          variant="contained"
          color="orange"
          type="submit"
          disabled={!email || !password || !passwordConfirmation}
          sx={{ padding: 1.1 }}
        >
          Registrarse
        </Button>

        <Button variant="contained" color="success" onClick={handleGoogle}>
          Registrarse con Google
          <FcGoogle size={30} />
        </Button>
      </Box>

      <Typography fontSize={14}>
        Ya tiene una cuenta?{" "}
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          Igrese aqui
        </Link>
      </Typography>
    </CustomBox>
  );
};

export default Signup;
