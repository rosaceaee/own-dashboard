import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoContainer = ({ children }) => {
  const [todoData, setTodoData] = useState([]);

  const value = {
    todoData,
    setTodoData,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
