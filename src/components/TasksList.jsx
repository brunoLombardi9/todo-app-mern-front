import { Typography } from "@mui/material";
import React, { useState } from "react";
import CustomBox from "./CustomBox";
import TaskListItem from "./TaskListItem";
import Loading from "./Loading";
import SearchTaskForm from "./SearchTaskForm";

const TasksList = ({ tasks, deleteTask, loading }) => {
  const [selectedTasks, setSelectedTasks] = useState([])


  return (
    <CustomBox>
      {loading ? <Loading /> : <SearchTaskForm tasks={tasks} setSelectedTasks={setSelectedTasks}/>}

      {!loading && selectedTasks.length === 0 && (
        <Typography variant="body1" color="white" textAlign="center">
        No se encontraron tareas
        </Typography>
      )}

      {!loading &&
        selectedTasks.length > 0 &&
        selectedTasks.map((task) => (
          <TaskListItem task={task} deleteTask={deleteTask} key={task._id} />
        ))}
    </CustomBox>
  );
};

export default TasksList;
