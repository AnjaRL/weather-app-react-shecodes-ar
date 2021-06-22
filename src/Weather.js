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
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      city: response.data.name,
      timezone: response.data.timezone,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      sunrise: response.data.sys.sunrise + response.data.timezone,
      sunset: response.data.sys.sunset + response.data.timezone,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "a257756ae2a3fd143b9b01623be675be";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        alert("Wrong city. Enter another one ! 🌎");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function searchCurrentPosition(position) {
    const apiKey = "a257756ae2a3fd143b9b01623be675be";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl.then(handleResponse));
  }
  function handleCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentPosition);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchEngine">
          <form onSubmit={handleSubmit}>
            <div className="form-row align-items-center">
              <div className="col-9">
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
                  onClick={handleCurrentLocation}
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
        <Forecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#F6B2B3" height={80} width={80} />;
  }
}
