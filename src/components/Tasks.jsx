import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import CustomBox from "./CustomBox";
import TaskItem from "./TaskItem";
import Loading from "./Loading";

const Tasks = ({ tasks, deleteTask, loading }) => {
  return (
    <CustomBox>
      {loading && <Loading />}

      {!loading && tasks.length === 0 && (
        <Typography variant="body1" color="white" textAlign="center">
          No hay Tareas
        </Typography>
      )}

      {!loading &&
        tasks.length > 0 &&
        tasks.map((task) => (
          <TaskItem task={task} deleteTask={deleteTask} key={task._id} />
        ))}
    </CustomBox>
  );
};

export default Tasks;
