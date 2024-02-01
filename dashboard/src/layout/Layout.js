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
      <section className="container">
        <WidgetLayoutWide>
          <div className="first">
            <Weather />
            <MultiTodo />
          </div>
        </WidgetLayoutWide>

        <WidgetLayoutWide>
          <section className="second">
            <section className="source">
              <GitHubCalendar
                username="rosaceaee"
                year="2024"
                colorScheme="light"
              />
            </section>
            <section className="repo-wrap">
              <SingleTodo /> <SingleTodo />
              <SingleTodo />
              {sing.map((sing, index) => (
                <section key={index}>{sing}</section>
              ))}
            </section>
          </section>
        </WidgetLayoutWide>
      </section>
    </>
  );
};

export default Layout;
