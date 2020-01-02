import * as Types from "../Constants/action_types";
import axios from "axios";

export function getCityData(city) {
  let request = axios.get(`http://localhost:3003/weather/get_city_data/${city}`);
  return dispatch => {
    request
      .then(res => {
        if (res.data && res.data.success) {
          return dispatch({
            type: Types.GET_WEATHER_DETAILS_SUCCESS,
            payload: res.data
          })
        } else {
          return dispatch({
            type: Types.GET_WEATHER_DETAILS_FAIL,
            payload: res.data
          })
        }
      })
      .catch(error => {
        if (error.response.status === 400) {
          return dispatch({
            type: Types.GET_WEATHER_DETAILS_FAIL,
            payload: error.response
          })
        }
      })
  }
}