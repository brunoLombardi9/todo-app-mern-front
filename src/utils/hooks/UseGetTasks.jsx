import React, { useEffect, useState } from "react";
import apiCall from "../apiCalls.js";

const useGetTasks = () => {
  const { user } = useContext(authContext);
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    try {
      const tasks = await apiCall.get(`/tasksmanager/userId=${user.userId}`);
      console.log(tasks.data);
      setTasks(tasks.data);
    } catch (error) {
      console.log("Something went brong.");
    }
  }

  useEffect(() => {
    getTasks();
  }, []);
  return tasks;
};

export default useGetTasks;
