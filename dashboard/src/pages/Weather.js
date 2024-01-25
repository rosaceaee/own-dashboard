import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

const keykey = "0i8Fy15BARMLJK8SZMsVviAOdMQjcCoY";
const url = `http://dataservice.accuweather.com/currentconditions/v1/226081?apikey=${keykey}`;
console.log(url);
function Weather({ weather }) {
  {
    /*
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];
*/
  }

  return (
    <>
      {" "}
      <div id="status"></div>
      <div id="locationVal">{}</div>
      {/*  
      true
            <p>{user[0].b}</p>
      <p>{user[0].a}</p>

      false
      <p>{user.b}</p>
      <p>{user.a}</p>*/}
    </>
  );
}

export default Weather;
