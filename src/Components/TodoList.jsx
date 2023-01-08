import React, { useState } from "react";
import List from "./List";

import "../Styles/TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = ({ target: input }) => {
    const inputValue = input.value;
    // console.log(inputValue);
    setInputValue(inputValue);
    return inputValue;
  };

  const handleClick = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
    console.log(tasks);
    return tasks;
  };
  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="input-holder">
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </div>
      <List task={tasks} />
    </div>
  );
};

export default TodoList;
