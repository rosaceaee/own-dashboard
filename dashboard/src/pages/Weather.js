import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

const keyy = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
};
const url = `http://dataservice.accuweather.com/currentconditions/v1/226081?apikey=${keyy.apiKey}&language=ko-kr`;

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("에러 ㄹㅈㄷ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data &&
        data.map((item, key) => (
          <section className="widget-container half" key={key}>
            <p>Weather Text: {item.WeatherText}</p>
            {item.Temperature && item.Temperature.Metric && (
              <p>온도: {item.Temperature.Metric.Value} °C</p>
            )}
          </section>
        ))}
    </>
  );
};
export default Weather;
