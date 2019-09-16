import uuid from 'uuid'
import {
  ADD_DRIVER,
  REMOVE_DRIVER,
  FETCH_DRIVERS_BEGIN,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE
} from 'constants/drivers'

// init state with driver info
const initialState = {
  drivers: [],
  loading: false,
  error: null
}

// reducer function
export const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_BEGIN:
      return {
        drivers: [],
        loading: true,
        error: null
      }
    case FETCH_DRIVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        drivers: action.drivers
      }
    case FETCH_DRIVERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        drivers: []
      }
    case ADD_DRIVER:
      return {
        ...state,
        drivers: [
          ...state.drivers,
          {
            _id: uuid(),
            name: action.driver.name,
            age: action.driver.age,
            country: action.driver.country,
            team: action.driver.team,
            poles: action.driver.poles,
            wins: action.driver.wins,
            championships: action.driver.championships
          }
        ]
      }
    case REMOVE_DRIVER:
      return {
        drivers: state.drivers.filter((driver) => driver._id !== action.id)
      }
    default:
      return state
  }
}
