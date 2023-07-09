import "./AddToDo.css";
export const AddToDo = ({ addInputValue, setAddInputValue, onAdd }) => {
  return (
    <div className="addtodo-container">
      <input
        placeholder="Add your todo"
        value={addInputValue}
        onChange={(e) => setAddInputValue(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};
