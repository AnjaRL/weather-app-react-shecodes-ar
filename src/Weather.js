import React from "react";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Trou aux Biches",
    date: "Friday, March 26, 16:18",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    description: "Clear Sky",
    temperature: "25",
    feelsLike: "26",
    sunrise: "06:17",
    sunset: "18:08",
    humidity: "84",
    wind: "5",
  };

  return (
    <div className="container">
      <SearchEngine />

      <h1 className="city"> {WeatherData.city}</h1>
      <h2 className="date"> {WeatherData.date}</h2>
      <img className="current-temp-icon" src={WeatherData.imgUrl} alt="" />

      <h3 className="card-title" id="description">
        {" "}
        {WeatherData.description}
      </h3>

      <h4 className="temperature'">
        {" "}
        <span className="temp">{WeatherData.temperature}</span>
        <span className="scale">
          <a href="/" id="celsiusLink" className="active">
            °C
          </a>
          |{" "}
          <a href="/" id="farenheitLink">
            °F
          </a>
        </span>
      </h4>

      <div className="weatherattributes">
        <span
          className="iconify"
          data-icon="la:temperature-high"
          data-inline="false"
        ></span>
        <span className="feelsLike">{WeatherData.feelsLike}</span>
        °&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify"
          data-icon="carbon:sunrise"
          data-inline="false"
        ></span>
        <span className="sunrise">{WeatherData.sunrise}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify"
          data-icon="carbon:sunset"
          data-inline="false"
        ></span>
        <span className="sunset">{WeatherData.sunset}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify data"
          data-icon="line-md:paint-drop-filled"
          data-inline="false"
        ></span>
        <span id="humidity">{WeatherData.humidity}%</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify data"
          data-icon="fa-solid:wind"
          data-inline="false"
        ></span>
        <span id="wind"> {WeatherData.wind} km/h</span>
      </div>

      <Forecast />
    </div>
  );
}
