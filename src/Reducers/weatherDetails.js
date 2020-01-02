import * as Types from "../Constants/action_types";

const initialState = {
  success: false,
  error: {},
  data: {}
}

export const getWeatherDetails = function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_WEATHER_DETAILS_SUCCESS:
      return {
        ...initialState,
        success: true,
        data: action.payload
      }
    case Types.GET_WEATHER_DETAILS_FAIL:
      return {
        success: false,
        error: action.payload
      }
    default: {
      return state;
    }
  }
}