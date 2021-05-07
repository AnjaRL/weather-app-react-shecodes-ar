import React, { useState } from "react";
import Forecast from "./Forecast";
import Loader from "react-loader-spinner";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      sunrise: "06:17",
      sunset: "18:08",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <SearchEngine />

        <div className="city"> {weatherData.city}</div>
        <div className="date">
          {" "}
          <FormattedDate date={weatherData.date} />
        </div>
        <img
          className="current-temp-icon"
          src={weatherData.iconUrl}
          alt={weatherData.description}
        />

        <div className=" description"> {weatherData.description} </div>

        <span className="temperature">
          {Math.round(weatherData.temperature)}
        </span>
        <span className="scale">
          <a href="/" id="celsiusLink" className="active">
            {" "}
            °C
          </a>{" "}
          |{" "}
          <a href="/" id="farenheitLink">
            °F
          </a>
        </span>

        <div className="weatherattributes">
          <span
            className="iconify"
            data-icon="la:temperature-high"
            data-inline="false"
          ></span>
          <span className="feelsLike">{Math.round(weatherData.feelsLike)}</span>
          °&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            className="iconify"
            data-icon="carbon:sunrise"
            data-inline="false"
          ></span>
          <span className="sunrise">06:18</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            className="iconify"
            data-icon="carbon:sunset"
            data-inline="false"
          ></span>
          <span className="sunset">17:58</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            class="iconify"
            data-icon="fluent:drop-16-regular"
            data-inline="false"
          ></span>
          <span id="humidity">{weatherData.humidity}%</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            class="iconify"
            data-icon="ph:wind-light"
            data-inline="false"
          ></span>
          <span id="wind">{Math.round(weatherData.wind)} km/h</span>
        </div>

        <Forecast />
      </div>
    );
  } else {
    const apiKey = "a257756ae2a3fd143b9b01623be675be";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader type="ThreeDots" color="#F6B2B3" height={80} width={80} />;
  }
}

function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="form-row align-items-center">
          <div className="col-7">
            <input
              type="search"
              className="form-control form-control-sm shadow-sm border-0"
              placeholder="Enter a city"
              autoFocus="on"
              autoComplete="off"
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="form-control form-control-sm shadow-sm border-0 searchButton"
            >
              <i
                className="iconify iconSearch"
                data-icon="fluent:search-28-filled"
                data-inline="false"
              ></i>
            </button>
          </div>
          <div className="btn-group col-1">
            <button
              type="button"
              className="btn btn-sm btn-light shadow-sm locationButton"
            >
              <i
                className="iconify iconSearch"
                data-icon="fluent:location-28-filled"
                data-inline="false"
              ></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
