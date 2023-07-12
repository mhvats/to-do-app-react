import { useState } from "react";
import { Task } from "./components/Task";
import "./App.css";
import "./components/AddToDo.css";
import "./components/Filter.css";
import "./components/Task.css";
import "./components/TaskModifier.css";
export const App = () => {
  // STATE VARIABLES

  const [task, setTask] = useState([]);
  const [addInputValue, setAddInputValue] = useState("");
  const [filter, setFilter] = useState(false);
  const [checkCompleted, setCheckCompleted] = useState(false);
  // HANDLER FUNCTIONS

  const hanldeAddTask = (e) => {
    // e.stopPropagation();
    e.preventDefault();
    if (addInputValue !== "") {
      setTask((prevState) => [...prevState, addInputValue]);
      console.log(addInputValue);
      setAddInputValue("");
    } else {
      alert("enter task!");
    }
  };
  const handleFilterDropDown = () => {
    setFilter((prevState) => !prevState);
  };

  // MAP FUNCTION

  const renderTask = task.map((item, index) => {
    return (
      <Task
        key={index}
        taskItem={item}
        setTask={setTask}
        index={index}
        addInputValue={addInputValue}
        setAddInputValue={setAddInputValue}
        hanldeAddTask={hanldeAddTask}
      />
    );
  });

  const totalLength = task.length;
  return (
    <div className="app-container">
      <div style={{ display: "flex", justifyContent: "center", color: "blue" }}>
        <h2>Todo List</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="addtodo-container">
          <form>
            <input
              placeholder="Add your todo"
              value={addInputValue}
              onChange={(e) => {
                setAddInputValue(e.target.value);
              }}
            />
            <button onClick={hanldeAddTask}>Add</button>
          </form>
        </div>
        {/* <div className="taskmodifier-container">
          <button id="1" onClick={handleCompleteAllTask}>
            Complete All Task
          </button>
          <button id="2">Delete Completed Tasks</button>
        </div> */}
        <div className="task-container-main">{renderTask}</div>
        <div className="filter-container">
          <div className="filter">
            {/* <button onMouseEnter={handleFilterDropDown}>Filter</button> */}
            {filter && (
              <div>
                <p className="filter-options">completed task</p>
                <p className="filter-options">completed task</p>
              </div>
            )}
          </div>
          {/* <h3>Completed: 0</h3> */}
          <h4>Total Tasks: {totalLength}</h4>
        </div>
      </div>
    </div>
  );
};
