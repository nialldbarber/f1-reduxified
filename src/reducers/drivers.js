import { Map, List } from 'immutable'
import uuid from 'uuid'
import {
  ADD_DRIVER,
  REMOVE_DRIVER,
  GET_NEW_DRIVER_INPUT_VALUES,
  RESET_DRIVER_INPUT_VALUES,
  FETCH_DRIVERS_BEGIN,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE
} from 'constants/drivers'

// init state with driver info
const initialState = Map({
  input: Map({
    name: null,
    age: null,
    country: null,
    team: null,
    poles: null,
    wins: null,
    championships: null
  }),
  drivers: List(),
  loading: false,
  error: null
})

// reducer function
export const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVERS_BEGIN:
      console.log('fetching...')
      return state
        .set('drivers', List())
        .set('loading', true)
        .set('error', null)
    case FETCH_DRIVERS_SUCCESS:
      console.log('fetch successful!')
      return state.set('drivers', action.drivers).set('loading', false)
    case FETCH_DRIVERS_FAILURE:
      return state
        .set('drivers', List())
        .set('loading', false)
        .set('error', action.error)
    case ADD_DRIVER:
      const {
        driver: { name, age, country, team, poles, wins, championships }
      } = action
      return state.update('drivers', (drivers) =>
        drivers.concat({
          _id: uuid(),
          name,
          age,
          country,
          team,
          poles,
          wins,
          championships
        })
      )
    case REMOVE_DRIVER:
      return {
        drivers: state.drivers.filter((driver) => driver._id !== action.id)
      }
    case GET_NEW_DRIVER_INPUT_VALUES:
      return state.update('input', (input) => input.concat(action.value))
    case RESET_DRIVER_INPUT_VALUES:
      return state.set('input', Map({}))
    default:
      return state
  }
}
