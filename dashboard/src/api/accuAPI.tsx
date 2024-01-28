import axios from "axios";

interface CurrPosition {
  lati: number;
  latu: number;
}

export const getLocationAPI = async ({ lati, latu }: CurrPosition) => {
  return await axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${process.env.REACT_APP_WEATHER_KEY}&q=${lati}%2C${latu}&language=ko-kr`
  );
};

export const getWeatherAPI = async (locationKey: number) => {
  return await axios.get(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${process.env.REACT_APP_WEATHER_KEY}&language=ko-kr`
  );
};
