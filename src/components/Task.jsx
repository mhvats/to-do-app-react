import { useState } from "react";
import "./Task.css";
export const Task = ({ taskItem, onDelete }) => {
  const [completedCheckBox, setCompletedCheckBox] = useState(false);

  const handleCheckBoxClick = (e) => {
    e.stopPropagation();
    setCompletedCheckBox((prevState) => !prevState);
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
        <button>Edit</button>
        <button onClick={(e) => onDelete(taskItem, e)}>Delete</button>
      </div>
    </div>
  );
};
