import { Checkbox } from "@mui/material";
import React from "react";
import Modal from "react-modal";
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
  id: string;
}
export const ToDoPage = () => {
  let currentPath = window.location.pathname;
  const [modalIsOpen, setIsOpen] = React.useState<any>(false);
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: "950743fdsaf940", task: "Task 1" },
    { id: "14fd4324f3940", task: "Task 2" },
    { id: "3647fd4324f39klk40", task: "Task 3" },
  ]);
  const openModal = () => {
    setIsOpen(true);
  };
  // setTasks([{"Task 1", 3232} , {"Task 1",2323}]);
  const deleteTask = (id: string) => {
    setTasks(
      //filters tasks array so that if the id isnt equal to the id chosen, keep it in array
      tasks.filter((task: { id: string; task: string }) => task.id !== id)
    );
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  console.log(tasks);
  return (
    <div id="toDoPageDiv">
      <Header currentPath={currentPath} />
      <div id="toDoTitle">TO-DO-LIST</div>
      <div id="toDoBox">
        {tasks.map((task: Task) => {
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
              <TrashIcon onClick={() => deleteTask(task.id)} />
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
