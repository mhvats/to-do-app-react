import "./Task.css";
export const Task = ({ taskItem, onDelete, onCheckBox, checkBox }) => {
  return (
    <div className="task-container">
      <div className="task-left">
        <input
          type="checkbox"
          checked={checkBox}
          onClick={(e) => onCheckBox(e)}
        />
        <h3 style={{ color: checkBox ? "red" : "black" }}>{taskItem}</h3>
      </div>
      <div className="task-right">
        <button>Edit</button>
        <button onClick={(e) => onDelete(taskItem, e)}>Delete</button>
      </div>
    </div>
  );
};
