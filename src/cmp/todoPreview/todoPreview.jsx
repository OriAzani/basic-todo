import React from "react";

export const TodoPreview = ({ todo, handleDeleteTodo }) => {
  return (
    <li>
      <p>{todo.desc} </p>
      <button
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        Delete Todo
      </button>
    </li>
  );
};
