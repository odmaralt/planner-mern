type CheckTaskModalProps = {
  closeCheckModal: () => void;
  deleteTask: (_id: string) => Promise<void>;
  id: string;
};
export const CheckTaskModal = (props: CheckTaskModalProps) => {
  return (
    <div>
      {/* <div id="taskModalDiv">
        <div id="addTaskText" style={{ fontSize: "16px" }}>
          Are you sure you want to check this box? The selected task will be
          removed from the list.
        </div>
        <form>
          <div id="addTaskButton">
            <button onClick={() => props.deleteTask(props.id)}>I'm sure</button>
            <button onClick={props.closeCheckModal}>Cancel</button>
          </div>
        </form>
      </div> */}
    </div>
  );
};
