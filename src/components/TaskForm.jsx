import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import CustomBox from "./CustomBox";
import { authContext } from "../context/AuthContext";
import apiCall from "../utils/apiCalls";

const TasksForm = ({handleSearch}) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(authContext);

  async function handleForm(e) {
    e.preventDefault();

    try {
      const bodyData = { title, date, content, userId: user.userId };
      await apiCall.post("/tasksmanager", bodyData);
      handleSearch()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <CustomBox>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              margin: "auto",
              gap: 2,
              paddingBottom: 2,
            }}
          >
            <TextField
              placeholder="Título"
              sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              type="date"
              sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
              fullWidth
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>

          <TextField
            placeholder="Tarea..."
            type="text"
            onChange={(event) => setContent(event.target.value)}
            fullWidth
            multiline
            minRows={5}
            maxRows={5}
            sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
          />

          <Button
            variant="contained"
            type="submit"
            color="orange"
            disabled={!title}
            sx={{ marginTop: "2rem" }}
          >
            Agregar tarea
          </Button>
        </CustomBox>
      </form>
    </>
  );
};

export default TasksForm;
