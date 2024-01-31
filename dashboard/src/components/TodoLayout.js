import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
export const MultiTodo = () => {
  return (
    <>
      <section className="wrapper widget-container wide todo">
        <section className="widget-container innertodo">
          <TodoList />
        </section>

        <section className="widget-container innertodo ">
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
      <section className="widget-container innertodo  ">
        <TodoList />
      </section>
      ;
    </>
  );
};
