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
import "./style/layout.scss";
import User from "./pages/User";
import Layout from "./layout/Layout";

const Context = createContext();
function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<User />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
