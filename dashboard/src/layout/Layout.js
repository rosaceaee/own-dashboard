import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
import GitHubCalendar from "react-github-calendar";

import User from "../pages/User";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "./WidgetLayoutSmall";
import Weather from "../pages/Weather";
import { MultiTodo, SingleTodo, AddSingleTodo } from "../components/TodoLayout";
import { TodoList } from "../components/TodoList";
import { Grass } from "../pages/Grass";
const Layout = () => {
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];

  const [sing, setSing] = useState([]);

  function add() {
    const newSing = (
      <AddSingleTodo todoname={[...todoname]} key={sing.length} />
    );
    setSing([...sing, newSing]);
  }

  const todoname = ["repo1", "repo2", "repo3"];
  const todonamee = ["집에서 할 일", "취미"];

  return (
    <>
      {" "}
      <Weather />
      <section className="container">
        <WidgetLayoutWide>
          <div className="first">
            <User user={user} />
            <MultiTodo todoname={todonamee} />
          </div>
        </WidgetLayoutWide>

        <WidgetLayoutWide>
          <h1 className="repo-header">작업 계획</h1>
          <h2 className="addRepo" onClick={add}>
            Repo 추가
          </h2>
          <section className="second">
            <section className="source">
              <GitHubCalendar
                username="rosaceaee"
                year="2024"
                colorScheme="light"
              />
            </section>
            <section className="repo-wrap">
              <SingleTodo todoname={todoname[0]} />
              <SingleTodo todoname={todoname[1]} />
              <SingleTodo todoname={todoname[2]} />
              {sing.map((sing, index) => (
                <section className="todo-wrap single" key={index}>
                  {sing}
                </section>
              ))}
            </section>
          </section>
        </WidgetLayoutWide>
      </section>
    </>
  );
};

export default Layout;
