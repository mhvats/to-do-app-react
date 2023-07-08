// import { Data } from "../api/Data";
import "./Task.css";
export const Task = ({ taskItem }) => {
  return (
    <div className="task-container">
      <div className="task-left">
        <input type="checkbox" />
        <h3>{taskItem}</h3>
      </div>
      <div className="task-right">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
