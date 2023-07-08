import "./AddToDo.css";
export const AddToDo = ({ task, handleSetTask, setTask }) => {
  return (
    <div className="addtodo-container">
      <input
        placeholder="Add your todo"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleSetTask}>Add</button>
    </div>
  );
};
