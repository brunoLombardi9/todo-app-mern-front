import React, { useEffect, useState } from "react";
import CustomBox from "../components/CustomBox";
import Loading from "../components/Loading";
import apiCall from "../utils/apiCalls.js";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { MdCancel } from "react-icons/Md";

const Task = ({ taskId, handleModal, deleteTask }) => {
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
        <CustomBox>
          <MdCancel
            fill="red"
            size={35}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: 5,
              top: 5,
            }}
            onClick={handleModal}
          />
          {taskData ? (
            <>
              <Grid
                display={"flex"}
                justifyContent={"space-between"}
                sx={{ flexDirection: { xs: "column", md: "row" } }}
              >
                <Box display={"flex"} sx={{ flexDirection: { xs: "column" } }}>
                  <Typography color={"white"}>Título:</Typography>
                  <TextField
                    sx={{ ".MuiInputBase-root": { backgroundColor: "white" } }}
                    defaultValue={taskData.title}
                  />
                </Box>
                <Box display={"flex"}>
                  <Box display={"flex"} flexDirection={"column"} width={"100%"}>
                    <Typography color={"white"}>Fecha:</Typography>
                    <TextField
                      type="date"
                      defaultValue={taskData.date}
                      sx={{
                        ".MuiInputBase-root": { backgroundColor: "white" },
                      }}
                    />
                  </Box>
                </Box>
              </Grid>

              <TextField
                defaultValue={taskData.content}
                sx={{
                  ".MuiInputBase-root": { backgroundColor: "white" },
                }}
                fullWidth
                multiline
                minRows={5}
                maxRows={5}
              />
            </>
          ) : (
            <Loading />
          )}
          <Button
            variant="contained"
            color="delete"
            onClick={() => deleteTask(taskId)}
          >
            Eliminar
          </Button>
          <Button
            variant="contained"
            color="orange"
            sx={{ display: "flex", gap: 1 }}
            disabled
          >
            Guardar
          </Button>
        </CustomBox>
      </Box>
    </Grid>
  );
};

export default Task;
