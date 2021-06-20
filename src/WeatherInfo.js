import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city"> {props.data.city}</div>
      <div className="date">
        {" "}
        <FormattedDate timezone={props.data.timezone} />
      </div>
      <div className="weatherIcon">
        <WeatherIcon code={props.data.icon} size={78} />
      </div>
      <div className=" description"> {props.data.description} </div>

      <WeatherUnits celsius={props.data.temperature} />

      <div className="weatherattributes">
        <span
          className="iconify"
          data-icon="la:temperature-high"
          data-inline="false"
        ></span>
        <span className="feelsLike">{Math.round(props.data.feelsLike)}</span>
        °&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify"
          data-icon="carbon:sunrise"
          data-inline="false"
        ></span>
        <span className="sunrise">
          {" "}
          <Sunrise sunrise={props.data.sunrise} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          className="iconify"
          data-icon="carbon:sunset"
          data-inline="false"
        ></span>
        <span className="sunset">
          {" "}
          <Sunset sunset={props.data.sunset} />
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          class="iconify"
          data-icon="fluent:drop-16-regular"
          data-inline="false"
        ></span>
        <span id="humidity">{props.data.humidity}%</span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span
          class="iconify"
          data-icon="ph:wind-light"
          data-inline="false"
        ></span>
        <span id="wind">{Math.round(props.data.wind)} km/h</span>
      </div>
    </div>
  );
}
