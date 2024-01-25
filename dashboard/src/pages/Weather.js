import React from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

function Weather({ weather }) {
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];

  return (
    <>
      <p>{user[0].b}</p>
      <p>{user[0].a}</p>
      {/*  <p>{user.b}</p>
      <p>{user.a}</p>*/}
    </>
  );
}

export default Weather;
