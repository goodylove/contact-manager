import React from "react";
import "../Styles/List.css";
const List = ({ task }) => {
  return (
    <ul>
      {task.map((item, index) => {
        return (
          <li key={index}>
            <span> {item}</span>
            <span>
              <i className="fa fa-trash"></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
