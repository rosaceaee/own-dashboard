"use strict";
exports.__esModule = true;
var react_1 = require("react");
var accuAPI_1 = require("../api/accuAPI");
var Weatherr = function () {
  var _a = (0, react_1.useState)(),
    locationData = _a[0],
    setLocationData = _a[1];
  var _b = (0, react_1.useState)(),
    weatherData = _b[0],
    setWeatherData = _b[1];
  (0, react_1.useEffect)(function () {
    // locationData를 불러오기 전..
    if (locationData === undefined) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          (0, accuAPI_1.getLocationAPI)({
            lati: position.coords.latitude,
            latu: position.coords.longitude,
          }).then(function (res) {
            var resData = res.data.ParentCity;
            setLocationData({
              key: resData.Key,
              localizedName: resData.LocalizedName,
            });
          });
        },
        function () {
          alert("Your location could not be found.");
        }
      );
    }
    if (locationData !== undefined) {
      (0, accuAPI_1.getWeatherAPI)(locationData.key).then(function (res) {
        var resData = res.data[0];
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
      <span>
        {locationData === null || locationData === void 0
          ? void 0
          : locationData.localizedName}
      </span>
      <span>
        {weatherData === null || weatherData === void 0
          ? void 0
          : weatherData.temperature}
      </span>
      <span>
        {weatherData === null || weatherData === void 0
          ? void 0
          : weatherData.weatherText}
      </span>
    </div>
  );
};
exports["default"] = Weatherr;
