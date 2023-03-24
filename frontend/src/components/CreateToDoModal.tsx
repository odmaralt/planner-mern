import React, { useState } from "react";
import uuidRandom from "uuid-random";

interface Task {
  task: string;
  id: string;
}
type CreateToDoModalProps = {
  closeModal: () => void;
  tasks: any[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
const initialValues = {
  task: "",
  id: "",
};
export const CreateToDoModal = (props: CreateToDoModalProps) => {
  const [formValues, setFormValues] = useState<any>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value, id: uuidRandom() });
    //sets form values
  };
  const handleAddButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (formValues.task.length > 0) {
    props.setTasks([...props.tasks, formValues]);
    //sets tasks as form values and everything inside tasks array
    }

    props.closeModal();
  };

  return (
    <div id="taskModalDiv">
      <div id="addTaskText">Add a task:</div>
      <form>
        <input
          name="task"
          onChange={handleInputChange}
          id="addTaskInput"
          placeholder="Task"
        />
        <div id="addTaskButton">
          <button onClick={async (e) => await handleAddButton(e)}>Add</button>
          <button onClick={props.closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};
