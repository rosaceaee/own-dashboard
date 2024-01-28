import {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";

import User from "../pages/User";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "./WidgetLayoutSmall";
import Weather from "../pages/Weather";
import { TodoLayout } from "../components/TodoLayout";
const Layout = () => {
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];

  return (
    <>
      <section className="wrap">
        <User user={user} />
        <Weather />
        <TodoLayout />
      </section>
    </>
  );
};

export default Layout;
