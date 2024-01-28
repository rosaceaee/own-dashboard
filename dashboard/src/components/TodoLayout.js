import React from "react";
import { TodoList } from "./TodoList";
import { WidgetLayoutSmall } from "../layout/WidgetLayoutSmall";
export const TodoLayout = () => {
  return (
    <>
      <section className="wrapper">
        <section className="widget-container small">
          <TodoList />
        </section>

        <section className="widget-container small">
          <TodoList />
        </section>
      </section>
    </>
  );
};
