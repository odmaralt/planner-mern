import React, { useState } from "react";
type CreateToDoModalProps = {
  closeModal: () => void;
};
const initialValues = {
  task: "",
};
export const CreateToDoModal = (props: CreateToDoModalProps) => {
  const [formValues, setFormValues] = useState<any>(initialValues); // formvalues takes initial values

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleAddButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const values = {
      ...formValues,
    };
    props.closeModal();
    console.log(formValues);
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
