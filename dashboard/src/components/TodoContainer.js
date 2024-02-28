// src/components/TodoContainer.js
import React, { useState, useEffect } from "react";

const TodoContainer = ({ container }) => {
  const { id, name } = container;

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const localStorageKey = `todoData-${id}`;
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData) {
      setTodos(storedData);
    }
  }, [id]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const updatedList = [...todos, inputText];
      setTodos(updatedList);
      const localStorageKey = `todoData-${id}`;
      localStorage.setItem(localStorageKey, JSON.stringify(updatedList));
      setInputText("");
    }
  };

  return (
    <>
      <hr />
      <div>
        <h2>{name}</h2>
        <div>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add new todo..."
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoContainer;
