import React from "react";
import { TodoPreview } from "../todoPreview/todoPreview";

export const TodoList = ({ todos, deleteTodo, toggleIsDone }) => {
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const todosToRender = todos.map((todo) => {
    return (
      <TodoPreview
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleIsDone={toggleIsDone}
        key={todo.id}
      ></TodoPreview>
    );
  });

  return <ul>{todosToRender}</ul>;
};
