import { combineReducers } from "redux";
import { getWeatherDetails } from "./weatherDetails"

const weatherReducers = combineReducers({
  weatherDetails: getWeatherDetails
})

export default weatherReducers;