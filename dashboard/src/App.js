import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
import {
  BrowserRouter as Router,
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import logo from "./logo.svg";
import "./style/base.scss";
import "./style/newlayout.scss";

import { Provider } from "react-redux";
import store from "./reducer/store";
import LayT from "./components/LayT";
import { TodoProvider } from "./context/TodoContext";
const Context = createContext();
function App() {
  return (
    <div className="App">
      {/*  <TodoContainer value={{ todoData: store.getState().todoData }}>*/}
      <TodoProvider>
        <LayT />
      </TodoProvider>{" "}
      {/* <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<User />} />
            </Routes>
          </BrowserRouter>
        </Layout> */}
    </div>
  );
}

export default App;
