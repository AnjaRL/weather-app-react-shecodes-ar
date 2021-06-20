import React from "react";

export default function FormattedDate(props) {
  let time = new Date();
  let localTimeOffset = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTimeOffset + props.timezone);

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[time.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[time.getDay()];
  let date = time.getDate();
  let hours = time.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {month} {date} | {hours}:{minutes}
    </div>
  );
}
