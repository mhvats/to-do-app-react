import "./Filter.css";
export const Filter = ({ taskLength }) => {
  return (
    <div className="filter-container">
      <button>Filter</button>
      <h3>Completed: 1</h3>
      <h4>Total Tasks: {taskLength}</h4>
    </div>
  );
};
