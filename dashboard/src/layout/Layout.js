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
import { MultiTodo, SingleTodo } from "../components/TodoLayout";
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
    const newSing = <SingleTodo key={sing.length} />;
    setSing([...sing, newSing]);
  }
  return (
    <>
      {" "}
      <User user={user} />
      <section className="wrap">
        <Weather />
        <MultiTodo />

        <article className="wrapp">
          <section className="source">
            <GitHubCalendar
              username="rosaceaee"
              year="2024"
              colorScheme="light"
            />
          </section>{" "}
          <section className="repo-wrap">
            <h2 onClick={add}>addddd</h2>
            <section className="single mt">
              <div className="repo-todo">
                <SingleTodo />
              </div>
            </section>{" "}
            <section className="single mt">
              <div className="repo-todo">
                <SingleTodo />
              </div>
            </section>{" "}
            <section className="single mt">
              <div className="repo-todo">
                <SingleTodo />
              </div>
            </section>{" "}
            {sing.map((sing, index) => (
              <section key={index}>{sing}</section>
            ))}
          </section>
        </article>
      </section>
    </>
  );
};

export default Layout;
