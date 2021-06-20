import React from "react";

export default function Sunset(props) {
  let sunset = new Date(props.sunset * 1000);
  let hours = sunset.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = sunset.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span className="Sunset">
      {hours}:{minutes}
    </span>
  );
}
