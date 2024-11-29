import React from "react";
import { TodoPreview } from "../todoPreview/todoPreview";

export const TodoList = ({ todos, deleteTodo }) => {
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const todosToRender = todos.map((todo) => {
    return (
      <TodoPreview
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        key={todo.id}
      ></TodoPreview>
    );
  });

  return <ul>{todosToRender}</ul>;
};
