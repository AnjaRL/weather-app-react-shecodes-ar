import React, { useState } from "react";
import "./WeatherUnits.css";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          <span className="active"> °C </span>|{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherUnits">
        <span className="currentTemperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | <span className="active"> °F</span>
        </span>
      </div>
    );
  }
}
