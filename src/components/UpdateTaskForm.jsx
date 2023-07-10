import React, { useState } from "react";
import CustomBox from "./CustomBox";
import { Box, Button, TextField } from "@mui/material";
import apiCall from "../utils/apiCalls";

const UpdateTaskForm = ({ taskData, deleteTask }) => {
  const [title, setTitle] = useState(taskData.title);
  const [date, setDate] = useState(taskData.date);
  const [content, setContent] = useState(taskData.content);
  const [loading, setLoading] = useState(false);

  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const bodyData = { title, date, content };
      await apiCall.put(`/task/${taskData._id}`, bodyData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  async function handleDelete() {
    setLoading(true);
    try {
      await deleteTask(taskData._id);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
              paddingTop: 2,
            }}
          >
            <TextField
              placeholder="Título"
              sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={taskData.title}
              inputProps={{ maxLength: 25 }}
            />
            <TextField
              type="date"
              sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
              fullWidth
              onChange={(e) => setDate(e.target.value)}
              defaultValue={taskData.date}
            />
          </Box>

          <TextField
            placeholder="Tarea..."
            type="text"
            onChange={(event) => setContent(event.target.value)}
            defaultValue={taskData.content}
            fullWidth
            multiline
            rows={5}
            sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
          />

          <Button
            variant="contained"
            type="submit"
            color="orange"
            disabled={loading}
          >
            Modificar
          </Button>
          <Button
            variant="contained"
            type="submit"
            color="delete"
            onClick={handleDelete}
            disabled={loading}
          >
            Eliminar
          </Button>
        </CustomBox>
      </form>
    </>
  );
};

export default UpdateTaskForm;
