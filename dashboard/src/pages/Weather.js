import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

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
  function Tt() {
    const [apiCallMade, setApiCallMade] = useState(false);

    useEffect(() => {
      const keykey = "0i8Fy15BARMLJK8SZMsVviAOdMQjcCoY";
      const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/226081?apikey=0i8Fy15BARMLJK8SZMsVviAOdMQjcCoY`;
      console.log(url);
      if (!apiCallMade) {
        fetch(url).then((response) => {
          if (response.ok) {
            setApiCallMade(true);
            // Handle the successful response
            console.log("y)");
            const dd = response.json();
            dd.map((i, index) => {
              return (
                <>
                  <p>{index}</p>
                </>
              );
            });
          }
        });
      }
    }, [apiCallMade]);
  }

  Tt();
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
