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
      completed: false,
      taskName: inputValue,
    };

    const inputIsTrue = inputValue
      ? setTasks([...tasks, newTask])
      : setTasks([...tasks]);

    return inputIsTrue;
  };
  const deleteTask = (itemId) => {
    const newTask = tasks.filter((item) => item.id !== itemId);
    setTasks(newTask);
  };

  const completeTask = (itemId) => {
    // const task = tasks.map((task) => {
    //   if (item.id === task.id) {
    //     return { ...task, completed: true };
    //   } else {
    //     return task;
    //   }
    // });
    // console.log("working");
    // setTasks(task);

    const newTasks = [...tasks];
    const item = newTasks.find((task) => task.id === itemId);
    item.completed = !item.completed;

    setTasks(newTasks);
  };

  const handleEditMode = (itemId, value) => {
    const newTasks = [...tasks];
    const item = newTasks.find((task) => task.id === itemId);
    item.editMode = value;

    setTasks(newTasks);
  };

  const handleEditModeComplete = (itemId, value) => {
    const newTasks = [...tasks];
    const item = newTasks.find((task) => task.id === itemId);
    item.taskName = value;

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h2>Todo App</h2>
      <div className="input-holder">
        <Input value={inputValue} onChange={handleChange} type="text" />
        <button onClick={addTasks}>Add</button>
      </div>
      <List
        task={tasks}
        onDelete={deleteTask}
        onCheck={completeTask}
        onEditMode={handleEditMode}
        onEditModeComplete={handleEditModeComplete}
      />
    </div>
  );
};

export default TodoList;
