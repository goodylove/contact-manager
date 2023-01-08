import React from "react";
import "../Styles/List.css";
const List = ({ task }) => {
  return (
    <ul>
      {task.map((item, index) => {
        console.log(item);
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default List;
