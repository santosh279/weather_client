import React from "react";
import "./getCitiesListView.css"

const GetCitiesListView = (props) => {
  const { cities, onSelect, selected } = props;
  return (
    cities.length !== 0 ? cities.map((city, cityIndex) => {
      return (
        <div
          className="list-group group"
          key={cityIndex}>
          <div
            className={
              (selected === city.value)
                ? `list-group-item active` :
                `list-group-item`}
            onClick={() => onSelect(city.value)}
          >
            {city.label}
          </div>
        </div>
      )
    }) : <div style={{ textAlign: "center" }}> {"No Data"}</div>
  )
}


export default GetCitiesListView;