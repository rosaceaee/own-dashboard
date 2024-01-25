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
        <WidgetLayoutSmall weather={<Weather />} />
      </section>
    </>
  );
};

export default Layout;
