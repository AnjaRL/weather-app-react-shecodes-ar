import React, { useState } from "react";
import Forecast from "./Forecast";
import Loader from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      sunrise: "06:17",
      sunset: "18:08",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "a257756ae2a3fd143b9b01623be675be";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchEngine">
          <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center">
              <div className="col-7">
                <input
                  type="search"
                  className="form-control form-control-sm shadow-sm border-0"
                  placeholder="Enter a city"
                  autoFocus="on"
                  autoComplete="off"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#F6B2B3" height={80} width={80} />;
  }
}
