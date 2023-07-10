import React, { useEffect, useState } from "react";
import CustomBox from "./CustomBox";
import apiCall from "../utils/apiCalls.js";
import { Box, CircularProgress, Grid } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/Ai";
import UpdateTaskForm from "./UpdateTaskForm";

const TaskDetail = ({ taskId, handleModal, deleteTask }) => {
  const [taskData, setTaskData] = useState(null);

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
    <Grid
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backdropFilter: "blur(5px)",
        zIndex: 10000,
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%);",
        }}
      >
        <AiFillCloseCircle
          fill="red"
          size={35}
          style={{ position: "absolute", right: 0, cursor: "pointer" }}
          onClick={handleModal}
        />
        {taskData ? (
          <UpdateTaskForm deleteTask={deleteTask} taskData={taskData} />
        ) : (
          <CustomBox>
            <CircularProgress sx={{ margin: "auto", padding: 2 }} />
          </CustomBox>
        )}
      </Box>
    </Grid>
  );
};

export default TaskDetail;
