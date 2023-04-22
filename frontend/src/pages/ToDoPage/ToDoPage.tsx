import { Alert, Checkbox, FormControlLabel, Stack } from "@mui/material";
import axios from "axios";
import { brown } from "@mui/material/colors";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { CreateToDoModal } from "../../components/CreateToDoModal";
import { Header } from "../../components/Header";
import TrashIcon from "../../components/TrashIcon";
import "./ToDoPage.css";
import { CheckTaskModal } from "../../components/CheckTaskModal";
import { useUserProvider } from "../../provider/UserProvider";
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
  checked: boolean;
}
interface IToDoPage {
  user: boolean | undefined;
}

export const ToDoPage: React.FC<IToDoPage> = ({ user }) => {
  let currentPath = window.location.pathname;
  const [modalIsOpen, setIsOpen] = React.useState<any>(false);
  const [data, setData] = useState<Task[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const openModal = () => {
    setIsOpen(true);
  };
  const { userId } = useUserProvider();
  const fetchTasks = async () => {
    return await axios.get(`http://localhost:9000/${userId}/tasks`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const deleteTask = async (_id: string) => {
    await axios
      .delete(`http://localhost:9000/tasks/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9kZHk5NzZAZ21haWwuY29tIiwidXNlcklkIjoiNjQyNGM4ZmU1ZGE0YTU2YjNmZmFkYjlkIiwiaWF0IjoxNjgwMjMyNTg3LCJleHAiOjE2ODAzMTg5ODd9.NknlP8Swrw7dqmh5ABwdNs-WLyGK2XAUjFk7FkCqkJc`,
        },
      })
      .then((response) => {
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);

          window.location.reload();
        }, 1800);
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
                <FormControlLabel
                  key={task._id}
                  control={
                    <Checkbox
                      sx={{
                        color: "rgba(201, 185, 163, 0.8)",
                        "&.Mui-checked": {
                          color: brown[300],
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                      checked={task.checked}
                      onClick={() => deleteTask(task._id)}
                    />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "'Sora',sans-serif",
                        fontWeight: "500",
                        color: "rgb(135, 125, 110)",
                      }}
                    >
                      {task.task}
                    </span>
                  }
                />
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
      {success && (
        <Stack sx={{ width: "100%" }}>
          <Alert
            severity="success"
            color="success"
            style={{ position: "fixed", bottom: "0vh" }}
          >
            Your task has been deleted!
          </Alert>
        </Stack>
      )}
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
    </div>
  );
};
