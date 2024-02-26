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
import { TodoContainer } from "../components/TodoContext";
import { TodoList } from "../components/TodoList";

const Layout = () => {
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];

  const [sing, setSing] = useState([]);
  const [newRepo, setNewRepo] = useState("");

  const onChange = (e) => {
    setNewRepo(e.target.value);
  };

  const Add = () => {
    const newSing = <AddSingleTodo todoname={newRepo} key={sing.length} />;
    setSing([...sing, newSing]);
    setNewRepo("");
  };

  const todoname = [".."];
  const todonamee = ["집에서 할 일", "취미"];

  const [set, setSet] = useState(false);
  const Show = () => setSet((sset) => !sset);

  ///

  return (
    <>
      {" "}
      <Weather />{" "}
      <TodoContainer>
        <section className="container">
          <WidgetLayoutWide>
            <div className="first">
              <User user={user} /> <MultiTodo todoname={todonamee} />
            </div>
          </WidgetLayoutWide>

          <WidgetLayoutWide style={{ position: "relative" }}>
            <h1 className="repo-header">작업 계획</h1>
            <h2 className="addRepo" onClick={Show}>
              Repo 추가
            </h2>
            {set && (
              <>
                <div className="add-modal-wrap">
                  <input
                    type="text"
                    placeholder="dd"
                    onChange={onChange}
                    value={newRepo}
                  ></input>
                  <button type="submit" onClick={Add}>
                    add
                  </button>
                </div>
              </>
            )}
            <section className="second">
              <section className="source">
                <GitHubCalendar
                  username="rosaceaee"
                  year="2024"
                  colorScheme="light"
                />
              </section>
              <section className="repo-wrap">
                {/* {sing.map((sing, index) => (
                  <section className="todo-wrap single" key={index}>
                    {sing}
                  </section>
                ))}*/}

                <SingleTodo todoname={todoname} />

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
            </section>
          </WidgetLayoutWide>
        </section>{" "}
      </TodoContainer>
    </>
  );
};

export default Layout;
