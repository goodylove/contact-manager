import React from "react";
import "../Styles/List.css";

const List = ({ task, onDelete }) => {
  return (
    <ul>
      {task.map((item, index) => {
        return (
          <li key={index}>
            <span> {item.taskName}</span>
            <span>
              {/* <i className="fa fa-pencil-square-o" aria-hidden="true"></i> */}
              <i className="fa fa-check-square" aria-hidden="true"></i>

              <i onClick={() => onDelete(item.id)} className="fa fa-trash"></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
