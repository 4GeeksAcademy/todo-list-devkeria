import React, { useState } from "react";
import "../../styles/index.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h1>My To-Do List</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <ul>
        {tasks.length === 0 ? (
          <li className="no-tasks">No tasks, add a task</li>
        ) : (
          tasks.map((task, index) => (
            <li className="todo-item" key={index}>
              {task}
              <span className="delete-icon" onClick={() => deleteTask(index)}>
                🗑️
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
