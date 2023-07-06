import { Box, Typography } from "@mui/material";
import React from "react";
import { MdCancel } from "react-icons/Md";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        padding: 2,
        borderRadius: "5px",
      }}
    >
      <Typography color={"white"} noWrap>
        {task.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography color={"white"}>{task.date}</Typography>
        <MdCancel
          fill="red"
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => deleteTask(task._id)}
        />
      </Box>
    </Box>
  );
};

export default TaskItem;
