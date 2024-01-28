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
  .then((data) => console.log(data));
console.log(test);

const Weather = () => {
  return <></>;
};
export default Weather;
