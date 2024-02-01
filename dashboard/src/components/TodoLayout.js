import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
export const MultiTodo = () => {
  return (
    <>
      <section className="todo-wrap multi">
        <section className="inner">
          <h2>@Home</h2>
          <TodoList />
        </section>

        <section className="inner">
          {" "}
          <h2>@Hobby</h2>
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
