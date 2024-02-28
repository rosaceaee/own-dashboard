import React, { createContext, useContext, useReducer } from "react";

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_CONTAINER":
      return [...state, action.payload];
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => useContext(TodoStateContext);
export const useTodoDispatch = () => useContext(TodoDispatchContext);
