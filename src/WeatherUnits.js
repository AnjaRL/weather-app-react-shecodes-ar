import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          <span className="active"> °C </span>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
        </span>
      </div>
    );
  }
}
