import React from "react";

export const TodoPreview = ({ todo, handleDeleteTodo, handleToggleIsDone }) => {
  return (
    <li>
      <label name="checkIsDone"> Is done?</label>
      <input
        type="checkbox"
        name="checkIsDone"
        checked={todo.isDone}
        onChange={() => handleToggleIsDone(!todo.isDone, todo.id)}
      />

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
