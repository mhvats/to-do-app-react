import { useState } from "react";
import { Task } from "./components/Task";
import "./App.css";
import "./components/AddToDo.css";
import "./components/Filter.css";
import "./components/Task.css";
import "./components/TaskModifier.css";
export const App = () => {
  const [task, setTask] = useState([]);
  const [addInputValue, setAddInputValue] = useState("");
  const [completedCheckBox, setCompletedCheckBox] = useState(true);
  const [filter, setFilter] = useState(false);
  // STYLING
  const hanldeAddTask = (e) => {
    e.stopPropagation();
    if (addInputValue !== "") {
      setTask((prevState) => [...prevState, addInputValue]);
      setAddInputValue("");
    } else {
      alert("enter task!");
    }
  };
  const handleDelete = (taskId, e) => {
    e.stopPropagation();
    setTask((prevTasks) =>
      prevTasks.filter((task, index) => {
        index !== taskId;
        console.log(`${task} task has been deleted`);
      })
    );
  };
  const handleCheckBoxClick = (e) => {
    e.stopPropagation();
    setCompletedCheckBox((prevState) => !prevState);
  };

  const handleFilterDropDown = () => {
    setFilter(true);
  };
  const handleOffFilterDropdown = () => {
    setFilter((prevState) => !prevState);
  };
  const renderTask = task.map((item, index) => {
    return (
      <Task
        key={index}
        taskItem={item}
        onDelete={handleDelete}
        onCheckBox={handleCheckBoxClick}
        checkBox={completedCheckBox}
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
          <input
            placeholder="Add your todo"
            value={addInputValue}
            onChange={(e) => {
              setAddInputValue(e.target.value);
            }}
          />
          <button onClick={hanldeAddTask}>Add</button>
        </div>
        <div className="taskmodifier-container">
          <button id="1">Complete All Task</button>
          <button id="2">Delete Completed Tasks</button>
        </div>
        <div className="task-container-main">{renderTask}</div>
        <div className="filter-container">
          <div className="filter">
            <button
              onMouseEnter={handleFilterDropDown}
              onClick={handleOffFilterDropdown}
            >
              Filter
            </button>
            {filter && (
              <div>
                <p className="filter-options">completed task</p>
                <p className="filter-options">completed task</p>
              </div>
            )}
          </div>
          <h3>Completed: 1</h3>
          <h4>Total Tasks: {totalLength}</h4>
        </div>
      </div>
    </div>
  );
};
