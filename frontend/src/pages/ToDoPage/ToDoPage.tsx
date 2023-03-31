import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { tokenToString } from "typescript";
import { CreateToDoModal } from "../../components/CreateToDoModal";
import { Header } from "../../components/Header";
import TrashIcon from "../../components/TrashIcon";
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
interface Task {
  task: string;
  _id: string;
}
const fetchTasks = async () => {
  return await axios.get(`http://localhost:9000/tasks`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const ToDoPage = () => {
  let currentPath = window.location.pathname;
  const [modalIsOpen, setIsOpen] = React.useState<any>(false);
  const [data, setData] = useState<Task[]>([]);
  const [tasks, setTasks] = React.useState<Task[]>([
    { _id: "950743fdsaf940", task: "Task 1" },
    { _id: "14fd4324f3940", task: "Task 2" },
    { _id: "3647fd4324f39klk40", task: "Task 3" },
  ]);
  const openModal = () => {
    setIsOpen(true);
  };
  const deleteTask = async (_id: string) => {
    // setTasks(
    //   //filters tasks array so that if the id isnt equal to the id chosen, keep it in array
    //   tasks.filter((task: { _id: string; task: string }) => task._id !== id)
    // );
    await axios
      .delete(`http://localhost:9000/tasks/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer{ ${}}`,
        },
      })
      .then((response) => {
        setTimeout(() => {
          window.location.reload();
        }, 0);
      })
      .catch((err) => console.log(err));
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    fetchTasks()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div id="toDoPageDiv">
      <Header currentPath={currentPath} />
      <div id="toDoTitle">TO-DO-LIST</div>
      <div id="toDoBox">
        {data?.map((task: Task) => {
          return (
            <div>
              <div>
                <Checkbox
                  sx={{
                    color: "rgba(201, 185, 163, 0.8)",
                    "& .MuiSvgIcon-root": { fontSize: 16 },
                  }}
                />
                {task.task}
              </div>
              <TrashIcon onClick={() => deleteTask(task._id)} />
            </div>
          );
        })}
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
        <CreateToDoModal
          closeModal={closeModal}
          setTasks={setTasks}
          tasks={tasks}
        />
      </Modal>
      ;
    </div>
  );
};
