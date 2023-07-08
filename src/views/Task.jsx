import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomBox from "../components/CustomBox";
import Loading from "../components/Loading";
import apiCall from "../utils/apiCalls.js";
import { Box, Button, Grid, Typography } from "@mui/material";
import { BsArrowLeftCircleFill } from "react-icons/Bs";

const Task = () => {
  const params = useParams();
  const [taskData, setTaskData] = useState(null);

  async function getTaskInfo() {
    try {
      const { data } = await apiCall.get(`/task/${params.taskId}`);
      setTaskData(data);
    } catch (error) {}
  }

  useEffect(() => {
    getTaskInfo();
  }, []);
  return (
    <CustomBox>
      {taskData ? (
        <>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"}>
              <Typography color={"white"}>Título:</Typography>
              <Typography color={"white"}>{taskData.title}</Typography>
            </Box>
            <Box display={"flex"}>
              {taskData.date && (
                <>
                  <Typography color={"white"}>Fecha:</Typography>
                  <Typography color={"white"}>{taskData.date}</Typography>
                </>
              )}
            </Box>
          </Grid>
          <Grid
            display={"flex"}
            borderRadius={"5px"}
            sx={{ backgroundColor: "white", minHeight: "100px" }}
            padding={1}
          >
            <Typography>{taskData.content}</Typography>
          </Grid>
        </>
      ) : (
        <Loading />
      )}

      <Link to={"/tasksManager"} style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="orange"
          sx={{ display: "flex", gap: 1 }}
        >
          <BsArrowLeftCircleFill size={20} />
          Regresar
        </Button>
      </Link>
    </CustomBox>
  );
};

export default Task;
