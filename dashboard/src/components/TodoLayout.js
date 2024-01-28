import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
export const TodoLayout = () => {
  return (
    <>
      <section className="wrapper widget-container half">
        <section className="widget-container half todo">
          <TodoList />
        </section>

        <section className="widget-container half todo">
          <TodoList />
        </section>
      </section>
    </>
  );
};
