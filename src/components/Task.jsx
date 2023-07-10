import "./Task.css";
export const Task = ({ taskItem, onDelete }) => {
  // console.log(index);
  return (
    <div className="task-container">
      <div className="task-left">
        <input type="checkbox" />
        <h3>{taskItem}</h3>
      </div>
      <div className="task-right">
        <button>Edit</button>
        <button onClick={() => onDelete(taskItem)}>Delete</button>
      </div>
    </div>
  );
};
