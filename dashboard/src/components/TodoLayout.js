import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
import { ReactComponent as Home } from "../img/Home.svg";
import { ReactComponent as Run } from "../img/Run.svg";

export const MultiTodo = ({ todoname }) => {
  return (
    <>
      <section className="todo-wrap multi">
        <section className="inner">
          <Home />
          <TodoList todoname={todoname[0]} />
        </section>

        <section className="inner">
          {" "}
          <Run />
          <TodoList todoname={todoname[1]} />
        </section>
      </section>
    </>
  );
};

export const SingleTodo = ({ todoname }) => {
  return (
    <>
      {" "}
      <section className="todo-wrap single">
        {" "}
        <section className="inner">
          <TodoList todoname={todoname} />
        </section>
      </section>
    </>
  );
};

export const AddSingleTodo = ({ todoname }) => {
  return (
    <>
      {" "}
      <section className="inner">
        <TodoList todoname={todoname} />
      </section>
    </>
  );
};
