import "./App.css";
import { AddToDo } from "./components/AddToDo";
import { Filter } from "./components/Filter";
import { Task } from "./components/Task";
import { TaskModifier } from "./components/TaskModifier";
export const App = () => {
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
        <AddToDo />
        <TaskModifier />
        <div className="task-container-main">
          <Task />
        </div>
        <Filter />
      </div>
    </div>
  );
};
