import "./Task.css";
export const Task = () => {
  return (
    <div className="task-container">
      <div className="task-left">
        <input type="checkbox" />
        <h3>
          This is task field in which user will be able to see his/her task
        </h3>
      </div>
      <div className="task-right">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
