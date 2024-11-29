import React, { useState } from "react";

export const AddForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label name="text">Add description</label>
      <input
        type="text"
        name=""
        id="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};
