import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

const keyy = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
};

const url = `http://dataservice.accuweather.com/currentconditions/v1/226081?apikey=${process.env.REACT_APP_WEATHER_KEY}&language=ko-kr`;
const test = JSON.stringify(url);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const Asdf = ({ temper }) => {
      return (
        <>
          <WidgetLayoutSmall>
            <p>기온:{data[0].WeatherText}</p>
          </WidgetLayoutSmall>
          ;
        </>
      );
    };
  });

console.log(test);

const Weather = ({ temper }) => {
  return (
    <>
      <Asdf temper={temper} />
    </>
  );
};
export default Weather;
