import React from "react";
import locationSymbol from "../../Assets/Images/location.png";
import weatherSymbol from "../../Assets/Images/weather.png"
const HeaderView = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#563D7C" }}>
        {props.image ?
          <img src={locationSymbol} style={{ "width": "15%" }} alt="location" /> :
          <img src={weatherSymbol}  style={{ "width": "10.5%" }} alt="weather" />
        }
        <span className="navbar-brand">{props.text}</span>
      </nav>
    </React.Fragment>
  )
}

export default HeaderView;