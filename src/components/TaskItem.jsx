import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { BsTrash3Fill } from "react-icons/Bs";
import Task from "../views/Task";

const TaskItem = ({ task, deleteTask }) => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      {showModal && (
        <Task
          taskId={task._id}
          handleModal={handleModal}
          deleteTask={deleteTask}
        />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "primary.main",
          padding: 2,
          borderRadius: "5px",
          ":hover": { transform: "scale(1.05)", cursor: "pointer" },
          transition: " 0.1s",
          transitionTimingFunction: "ease-in-out",
        }}
      >
        <Box
          onClick={handleModal}
          sx={{ textDecoration: "none", width: "80%" }}
        >
          <Typography color={"white"} noWrap>
            {task.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <BsTrash3Fill
            fill="red"
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => deleteTask(task._id)}
          />
        </Box>
      </Box>
    </>
  );
};

export default TaskItem;
