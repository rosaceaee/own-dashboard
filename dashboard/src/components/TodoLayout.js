import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
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

export const AddSingleTodo2 = () => {
  const [sing, setSing] = useState([]);
  const [newRepo, setNewRepo] = useState("");

  const onChange = (e) => {
    setNewRepo(e.target.value);
  };

  const Add = () => {
    const newSing = (
      //  <AddSingleTodo todoname={[todoname, ...newRepo]} key={sing.length} />
      <AddSingleTodo todoname={[...newRepo]} key={sing.length} />
    );
    setSing([...sing, newSing]);
  };

  const todoname = [".."];
  const todonamee = ["집에서 할 일", "취미"];

  const [set, setSet] = useState(false);
  const Show = () => setSet((sset) => !sset);
  return (
    <>
      {" "}
      <section className="inner">
        <TodoList todoname={todoname} />{" "}
        {sing.length > 0 ? (
          <>
            {" "}
            {sing.map((sing, index) => (
              <section className="todo-wrap single" key={index}>
                {sing}
              </section>
            ))}
          </>
        ) : (
          ""
        )}
      </section>
    </>
  );
};
