import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const SearchTaskForm = ({ tasks, setSelectedTasks }) => {
  const [input, setInput] = useState("");

  function searchTask(e) {
    const inputWords = input.split(" ");
    const filteredTasks = tasks.filter((task) => {
      const taskTitle = task.title.toLowerCase();
      return inputWords.some((word) => taskTitle.includes(word.toLowerCase()));
    });

    filteredTasks.length > 0
      ? setSelectedTasks(filteredTasks)
      : setSelectedTasks([]);
  }

  useEffect(() => {
    searchTask();
  }, [input]);

  return (
    <TextField
      placeholder="Buscar tarea"
      onChange={(e) => setInput(e.target.value)}
      sx={{
        ".MuiInputBase-root": {
          backgroundColor: "white",
          borderRadius: 10,
        },
        width: "100%",
      }}
    />
  );
};

export default SearchTaskForm;
