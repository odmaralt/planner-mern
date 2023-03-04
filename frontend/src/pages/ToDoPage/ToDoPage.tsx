import { Checkbox } from "@mui/material";
import React from "react";
import { Header } from "../../components/Header";
import "./ToDoPage.css";
export const ToDoPage = () => {
  let currentPath = window.location.pathname;
  return (
    <div id="toDoPageDiv">
      <Header currentPath={currentPath} />
      <div id="toDoTitle">TO-DO-LIST</div>
      <div id="toDoBox">
        <div>
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />{" "}
          <textarea>Task 1</textarea>
        </div>
        <div>
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />{" "}
          <textarea>Task 1</textarea>
        </div>
        <div>
          {" "}
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />{" "}
          <textarea>Task 1</textarea>
        </div>
        <div>
          {" "}
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />{" "}
          <textarea>Task 1</textarea>
        </div>
        <div>
          {" "}
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />{" "}
          <textarea>Task 1</textarea>
        </div>
      </div>
    </div>
  );
};
