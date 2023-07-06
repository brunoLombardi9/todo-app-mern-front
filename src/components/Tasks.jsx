import { Box, Typography } from "@mui/material";
import React from "react";
import CustomBox from "./CustomBox";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <CustomBox>
      {tasks.length < 1 ? (
        <Typography variant="body1" color="white" textAlign="center">
          No hay Tareas
        </Typography>
      ) : (
        tasks.map((task) => (
          <TaskItem task={task} deleteTask={deleteTask} key={task._id} />
        ))
      )}
    </CustomBox>
  );
};

export default Tasks;
