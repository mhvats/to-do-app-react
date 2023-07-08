import "./Filter.css";
export const Filter = ({ totalLength }) => {
  return (
    <div className="filter-container">
      <button>Filter</button>
      <h3>Completed: 1</h3>
      <h4>Total Tasks: {totalLength}</h4>
    </div>
  );
};
