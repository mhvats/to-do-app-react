import { useState } from "react";
import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { Filter } from "./components/Filter";
import { Task } from "./components/Task";
import { TaskModifier } from "./components/TaskModifier";
export const App = () => {
  const [tasks, setTask] = useState([]);
  const [addInputValue, setAddInputValue] = useState("");

  const handleAddButton = () => {
    setTask((prevState) => [...prevState, addInputValue]);
    setAddInputValue("");
    console.log(tasks);
  };

  const renderTask = tasks.map((item, index) => {
    return <Task key={index} taskItem={item} />;
  });

  const taskLength = tasks.length;
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
        <AddToDo
          addInputValue={addInputValue}
          setAddInputValue={setAddInputValue}
          onAdd={handleAddButton}
        />
        <TaskModifier />
        <div className="task-container-main">{renderTask}</div>
        <Filter taskLength={taskLength} />
      </div>
    </div>
  );
};
