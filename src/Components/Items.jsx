import React, { useState } from "react";
import Input from "./Common/Input";

const Item = ({ item, onEditMode, onCheck, onDelete, onEditModeComplete }) => {
  const [editValue, setEditValue] = useState(item.taskName);

  return (
    <li>
      {!item.editMode ? (
        <>
          <span
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.taskName}
          </span>
          <span>
            <i
              className="fa fa-pencil-square-o"
              aria-hidden="true"
              onClick={() => onEditMode(item.id, true)}
            ></i>

            <i
              onClick={() => onCheck(item.id)}
              className={`fa fa-${!item.completed ? "check-square" : "times"}`}
              aria-hidden="true"
            ></i>

            <i onClick={() => onDelete(item.id)} className="fa fa-trash"></i>
          </span>
        </>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onEditMode(item.id, false);
            onEditModeComplete(item.id, editValue);
          }}
        >
          <Input
            value={editValue}
            onChange={({ target }) => {
              setEditValue(target.value);
            }}
          />

          <button type="submit">
            <i className="fa fa-check-square"></i>
          </button>
          <button
            type="button"
            onClick={() => {
              onEditMode(item.id, false);
              setEditValue(item.taskName);
            }}
          >
            <i className="fa fa-times"></i>
          </button>
        </form>
      )}
    </li>
  );
};

export default Item;
