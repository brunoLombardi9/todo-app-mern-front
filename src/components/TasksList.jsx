import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import CustomBox from "./CustomBox";
import TaskListItem from "./TaskListItem";
import Loading from "./Loading";

const TasksList = ({ tasks, deleteTask, loading }) => {
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
          <TaskListItem task={task} deleteTask={deleteTask} key={task._id} />
        ))}
    </CustomBox>
  );
};

export default TasksList;
