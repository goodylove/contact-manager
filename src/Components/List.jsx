import React from "react";

import Items from "./Items";
import "../Styles/List.css";

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
