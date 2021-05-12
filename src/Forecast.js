import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="row">
          <ForecastDay data={forecastData[0]} />
          <ForecastDay data={forecastData[1]} />
          <ForecastDay data={forecastData[2]} />
          <ForecastDay data={forecastData[3]} />
          <ForecastDay data={forecastData[4]} />
          <ForecastDay data={forecastData[5]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "a257756ae2a3fd143b9b01623be675be";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
