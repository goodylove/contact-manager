import React from "react";
import "../Styles/List.css";
const List = ({ task, onDelete }) => {
  return (
    <ul>
      {task.map((item, index) => {
        return (
          <li key={index} id={index}>
            <span> {item.taskName}</span>
            <span>
              <i onClick={() => onDelete(item.id)} className="fa fa-trash"></i>
              <i onClick={() => onDelete(item)} className="fa fa-trash"></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
