import React, { useState } from "react";
import Input from "./Common/Input";
import List from "./List";
import "../Styles/TodoList.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = ({ target: input }) => {
    const inputValue = input.value;

    setInputValue(inputValue);
    return inputValue;
  };

  const handleClick = () => {
    if (!inputValue) {
      setTasks([...tasks]);
    } else {
      setTasks([...tasks, inputValue]);
    }
    setInputValue("");
    return tasks;
  };

  const deleteTask = (e) => {
    const newTask = tasks.filter((m) => {
      if (m === e) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(newTask);
  };
  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="input-holder">
        <Input value={inputValue} onChange={handleChange} type="text" />
        <button onClick={handleClick}>Add</button>
      </div>
      <List task={tasks} id={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default TodoList;
