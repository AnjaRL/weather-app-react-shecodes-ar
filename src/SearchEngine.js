import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="form-row align-items-center">
          <div className="col-9">
            <input
              type="text"
              id="search-city-input"
              className="form-control form-control-sm shadow-sm border-0"
              placeholder="Enter a city"
              autocomplete="off"
            />
          </div>
          <div className="col-1">
            <button
              type="submit"
              className="form-control form-control-sm btn-sm btn-light shadow-sm border-0 searchButton"
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
    </div>
  );
}
