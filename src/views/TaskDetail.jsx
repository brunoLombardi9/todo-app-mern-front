import React, { useEffect, useState } from "react";
import CustomBox from "../components/CustomBox";
import apiCall from "../utils/apiCalls.js";
import { CircularProgress } from "@mui/material";
import UpdateTaskForm from "../components/UpdateTaskForm";
import { useParams } from "react-router-dom";

const TaskDetail = () => {
  const [taskData, setTaskData] = useState(null);
  const taskId = useParams().taskId;

  async function getTaskInfo() {
    try {
      const { data } = await apiCall.get(`/task/${taskId}`);
      setTaskData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTaskInfo();
  }, []);
  return (
    <>
      {taskData ? (
        <UpdateTaskForm taskData={taskData} />
      ) : (
        <CustomBox>
          <CircularProgress sx={{ margin: "auto", padding: 2 }} />
        </CustomBox>
      )}
    </>
  );
};

export default TaskDetail;
