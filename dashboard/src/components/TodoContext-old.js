import React, { createContext, useContext, useState } from "react";
import { TodoList } from "./TodoList";
const TodoContext = createContext();

export const TodoContainer = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [sing, setSing] = useState([]);
  const [newRepo, setNewRepo] = useState("");
  // const value = [todoData, setTodoData];
  const value = { todoData, setTodoData };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
