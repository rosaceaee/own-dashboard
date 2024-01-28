import React, { useEffect, useState } from "react";
import { getLocationAPI, getWeatherAPI } from "../api/accuAPI";

interface LocationData {
  key: number;
  localizedName: string;
}

interface WeatherData {
  temperature: number;
  weatherIcon: number;
  weatherText: string;
}
const Weatherr = () => {
  const [locationData, setLocationData] = useState<LocationData>();
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    // locationData를 불러오기 전..
    if (locationData === undefined) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getLocationAPI({
            lati: position.coords.latitude,
            latu: position.coords.longitude,
          }).then((res) => {
            const resData = res.data.ParentCity;
            setLocationData({
              key: resData.Key,
              localizedName: resData.LocalizedName,
            });
          });
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }
    // locationData를 불러온 후..
    if (locationData !== undefined) {
      getWeatherAPI(locationData.key).then((res) => {
        const resData = res.data[0];
        setWeatherData({
          temperature: resData.Temperature.Metric.Value,
          weatherIcon: resData.WeatherIcon,
          weatherText: resData.WeatherText,
        });
      });
    }
  }, []);

  return (
    <div>
      <span>zz</span>
      <span>{locationData?.localizedName}</span>
      <span>{weatherData?.temperature}</span>
      <span>{weatherData?.weatherText}</span>
    </div>
  );
};

export default Weatherr;
