import React from "react";

export default function Sunrise(props) {
  let sunrise = new Date(props.sunrise * 1000);
  let hours = sunrise.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = sunrise.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="Sunset">
      {hours}:{minutes}
    </span>
  );
}
