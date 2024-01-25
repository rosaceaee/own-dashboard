import React, { useEffect, useState } from "react";
import {
  WidgetLayoutSmall,
  WidgetLayoutHalf,
  WidgetLayoutWide,
} from "../layout/WidgetLayoutSmall";

const RE = 6371.00877;
const GRID = 5.0;
const SLAT1 = 30.0;
const SLAT2 = 60.0;
const OLON = 126.0;
const OLAT = 38.0;
const XO = 43;
const YO = 136;

function dfs_xy_conv(code, v1, v2) {
  var DEGRAD = Math.PI / 180.0;
  var RADDEG = 180.0 / Math.PI;

  var re = RE / GRID;
  var slat1 = SLAT1 * DEGRAD;
  var slat2 = SLAT2 * DEGRAD;
  var olon = OLON * DEGRAD;
  var olat = OLAT * DEGRAD;

  var sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  var rs = {};
  if (code == "toXY") {
    rs["lat"] = v1;
    rs["lng"] = v2;
    var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    var theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    rs["x"] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs["y"] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  } else {
    rs["x"] = v1;
    rs["y"] = v2;
    var xn = v1 - XO;
    var yn = ro - v2 + YO;
    ra = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) {
      ra = ra - 1.0;
    }
    var alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    if (xn < 0.0) {
      theta = -theta;
    }
    var alon = theta / sn + olon;
    rs["lat"] = alat * RADDEG;
    rs["lng"] = alon * RADDEG;
  }
  return rs;
}

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
  const [locationVal, setLocationVal] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const switchToGrid = dfs_xy_conv("toXY", latitude, longitude);
    const locationX = switchToGrid.x;
    const locationY = switchToGrid.y;
    setLocationVal([locationX, locationY]);
    const fullTime = new Date();
    const year = fullTime.getFullYear();
    let month = fullTime.getMonth() + 1;
    month = month >= 10 ? month : "0" + month;
    let day = fullTime.getDate();
    day = day >= 10 ? day : "0" + day;
    const hour = fullTime.getHours();
    const hournew = (hour - 1).toString().padStart(2, "0");
    const xhr = new XMLHttpRequest(),
      method = "GET",
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=HDxvF%2Bq4PsIMtuZBoqLHonXDQ0AG1YZjdrPoUeqeC922ITebwGCeM9cPfgC%2Bpz%2BsbUUtt1H5RLcOYuo3zoS6Jg%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${year}${month}${day}&base_time=0500&nx=${locationX}&ny=${locationY}`;
    xhr.open(method, url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const res = xhr.responseText;
        const parseData = JSON.parse(res);

        console.log(url);
        function ShowWeatherVal() {
          const cate = parseData.response.body.items.item[0].category;
        }

        function ChkSkyChodangi() {}
        ShowWeatherVal();
        //    ChkSky();
      }
    };
    xhr.send();
  }

  return (
    <>
      {" "}
      <div id="status"></div>
      <div id="locationVal">{locationVal}</div>
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
