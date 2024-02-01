import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
import { ReactComponent as Home } from "../img/Home.svg";
import { ReactComponent as Run } from "../img/Run.svg";

export const MultiTodo = () => {
  return (
    <>
      <section className="todo-wrap multi">
        <section className="inner">
          <Home />
          <TodoList />
        </section>

        <section className="inner">
          {" "}
          <Run />
          <TodoList />
        </section>
      </section>
    </>
  );
};

export const SingleTodo = () => {
  return (
    <>
      {" "}
      <section className="todo-wrap single">
        {" "}
        <section className="inner">
          <TodoList />
        </section>
      </section>
      ;
    </>
  );
};
