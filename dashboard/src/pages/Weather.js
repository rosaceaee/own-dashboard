import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";
import axios from "axios";
const keyy = {
  apiKey: process.env.REACT_APP_WEATHER_KEY,
};
//const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey[0].key}?apikey=${keyy.apiKey}&language=ko-kr`;
const local = `http://dataservice.accuweather.com/locations/v1/regions?apikey=${keyy.apiKey}`;

//console.log(local);
const Weather = () => {
  const [data, setData] = useState(null);
  {
    /*
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
*/
  }

  const fullTime = new Date();
  const year = fullTime.getFullYear();
  let month = fullTime.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let day = fullTime.getDate();
  day = day >= 10 ? day : "0" + day;

  const getLocationAPI = async ({ lat, lng }) => {
    return await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${keyy.apiKey}&q=${lat}%2C${lng}&language=ko-kr`
    );
  };

  const getWeatherAPI = async (locationKey) => {
    return await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${locationKey[0].key}?apikey=${keyy.apiKey}&language=ko-kr`
    );
  };

  const [locationData, setLocationData] = useState();
  const [weatherData, setWeatherData] = useState();
  useEffect(() => {
    // locationData를 불러오기 전..
    if (locationData === undefined) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getLocationAPI({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }).then((res) => {
            const resData = res.data.ParentCity;
            const subCityName = res.data.SupplementalAdminAreas[0];
            setLocationData({
              key: resData.Key,
              localizedName: resData.LocalizedName,
              innerCity: subCityName.LocalizedName,
            });
          });
        },
        () => {
          alert("Your location could not be found.");
        }
      );
    }

    if (locationData !== undefined) {
      getWeatherAPI(locationData.key).then((res) => {
        const resData = res.data[0];
        console.log(resData);
        setWeatherData({
          temperature: resData.Temperature.Metric.Value,
          // weatherIcon: resData.WeatherIcon,
          weatherText: resData.WeatherText,
        });
      });
    }
  }, []);

  return (
    <>
      <section className="widget-container half weather">
        <h1>
          {year} {month} {day}
        </h1>
        <span>{locationData?.localizedName}</span>
        <span>{locationData?.innerCity}</span>
        <p>{weatherData?.temperature}</p>{" "}
        <span>{weatherData?.weatherText}</span>
        {/* {data &&
          data.map((item, key) => (
            <section key={key}>
              {item.Temperature && item.Temperature.Metric && (
                <p className="temp">온도: {item.Temperature.Metric.Value} °C</p>
              )}
              <p className="currSky">Weather Text: {item.WeatherText}</p>
            </section>
          ))}
          */}
      </section>
    </>
  );
};
export default Weather;
