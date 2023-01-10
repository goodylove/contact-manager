import React from "react";

import Items from "./Items";
import "../Styles/List.css";

// const buttonStyle = {
//   backgroundColor: "rgba(255, 255, 200, 1)",
//   paading: "5px",
// };

const List = ({
  task,
  onDelete,
  onCheck,
  completedTask,
  onEditMode,
  onEditModeComplete,
}) => {
  console.log(completedTask);

  return (
    <ul>
      {task.map((item) => {
        return (
          <Items
            key={item.id}
            item={item}
            onCheck={onCheck}
            onDelete={onDelete}
            onEditMode={onEditMode}
            onEditModeComplete={onEditModeComplete}
          />
        );
      })}
    </ul>
  );
};

export default List;
