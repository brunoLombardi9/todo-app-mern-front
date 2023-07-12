import React, { useContext, useEffect, useState } from "react";
import CreateTasksForm from "../components/CreateTaskForm";
import TasksList from "../components/TasksList";
import { authContext } from "../context/AuthContext";
import apiCall from "../utils/apiCalls";
import { Grid } from "@mui/material";

const TasksManager = () => {
  const { user } = useContext(authContext);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getTasks() {
    setLoading(true);
    try {
      const { data } = await apiCall.get(`/tasksmanager/${user.userId}`);
      setTasks(data);
    } catch (error) {
      console.log("Algo salio mal, intente nuevamente mas tarde.");
    }
    setLoading(false);
  }

  function handleSearch() {
    setSearch(true);
  }

  async function deleteTask(taskId) {
    try {
      const params = new URLSearchParams();
      params.append("userId", user.userId);
      params.append("taskId", taskId);
      await apiCall.delete(`/task`, { params });
      setSearch(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (search) {
      getTasks();
      setSearch(false);
    }
  }, [search]);

  return (
    <>
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <CreateTasksForm handleSearch={handleSearch} loading={loading} />
        <TasksList tasks={tasks} deleteTask={deleteTask} loading={loading} />
      </Grid>
    </>
  );
};

export default TasksManager;
