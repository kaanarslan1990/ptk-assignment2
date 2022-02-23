import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const Header = ({ tasks, setTasks }) => {
  const [value, setValue] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: uuid(),
      title: value,
      isCompleted: false,
    };

    setTasks([task, ...tasks]);
    setValue("");
  };

  return (
    <header className="header">
      <h1>ToDo's</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;