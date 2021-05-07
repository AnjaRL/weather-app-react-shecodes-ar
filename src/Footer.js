import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Built by {""}
        <a
          href="https://www.linkedin.com/in/aramihone/"
          className="footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anja Ramihone {""}
        </a>
        and open-sourced on {""}
        <a
          href="https://github.com/AnjaRL/weather-app-react-shecodes-ar"
          className="footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
