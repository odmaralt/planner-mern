import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";

import { CreateToDoModal } from "../../components/CreateToDoModal";
import { Header } from "../../components/Header";
import "./ToDoPage.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 3,
  },
};
export const ToDoPage = () => {
  let currentPath = window.location.pathname;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          />
          <textarea>Task 1</textarea>
        </div>
        <div>
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />
          <textarea>Task 1</textarea>
        </div>
        <div>
          <Checkbox
            sx={{
              color: "rgba(201, 185, 163, 0.8)",
              "& .MuiSvgIcon-root": { fontSize: 16 },
            }}
          />
          <textarea>Task 3</textarea>
        </div>
      </div>
      <div id="addToDoDiv">
        <p id="addToDo" onClick={openModal}>
          +
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CreateToDoModal closeModal={closeModal} />
      </Modal>
      ;
    </div>
  );
};
