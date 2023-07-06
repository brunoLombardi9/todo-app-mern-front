import React, { useContext, useEffect, useState } from "react";
import TasksForm from "../components/TaskForm";
import Tasks from "../components/Tasks";
import { authContext } from "../context/AuthContext";
import apiCall from "../utils/apiCalls";

const TasksManager = () => {
  const { user } = useContext(authContext);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState(false);

  async function getTasks() {
    try {
      const params = new URLSearchParams();
      params.append("userId", user.userId);
      const tasks = await apiCall.get(`/tasksmanager`, { params });
      setTasks(tasks.data);
    } catch (error) {
      console.log("Something went brong.");
    }
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
    getTasks();
    setSearch(false);
  }, [search]);

  return (
    <>
      <TasksForm handleSearch={handleSearch} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </>
  );
};

export default TasksManager;
