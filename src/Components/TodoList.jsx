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

  const addTasks = () => {
    const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      complete: false,
      taskName: inputValue,
    };

    const inputIsTrue = inputValue
      ? setTasks([...tasks, newTask])
      : setTasks([...tasks]);

    return inputIsTrue;
  };
  const deleteTask = (e) => {
    const newTask = tasks.filter((m) => m.id !== e.id);

    setTasks(newTask);
  };
  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="input-holder">
        <Input value={inputValue} onChange={handleChange} type="text" />
        <button onClick={addTasks}>Add</button>
      </div>
      <List task={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default TodoList;
