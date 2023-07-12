import { useState } from "react";
import "./Task.css";
export const Task = ({
  taskItem,
  setTask,
  index,
  setAddInputValue,
  addInputValue,
  hanldeAddTask,
}) => {
  const [completedCheckBox, setCompletedCheckBox] = useState(false);

  const handleCheckBoxClick = (e) => {
    e.stopPropagation();
    setCompletedCheckBox((prevState) => !prevState);
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(index);
    setTask((prevState) => prevState.filter((task, i) => i !== index));
  };
  const handleTaskEdit = (e) => {
    console.log(`edit button triggred for ${index} index`);
    handleDelete(e);
    setAddInputValue(taskItem);
    hanldeAddTask();
  };
  return (
    <div className="task-container">
      <div className="task-left">
        <input
          type="checkbox"
          checked={completedCheckBox}
          onClick={handleCheckBoxClick}
        />
        <h3 style={{ color: completedCheckBox ? "green" : "red" }}>
          {taskItem}
        </h3>
      </div>
      <div className="task-right">
        <button onClick={handleTaskEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
