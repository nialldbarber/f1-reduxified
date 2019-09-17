import {
  ADD_DRIVER,
  REMOVE_DRIVER,
  GET_NEW_DRIVER_INPUT_VALUES,
  RESET_DRIVER_INPUT_VALUES,
  FETCH_DRIVERS_BEGIN,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE
} from 'constants/drivers'

// Add driver
export const addDriver = (driver) => ({ type: ADD_DRIVER, driver })

// Remove driver
export const removeDriver = (id) => ({ type: REMOVE_DRIVER, id })

// Set input values
export const setInputValues = (value) => ({
  type: GET_NEW_DRIVER_INPUT_VALUES,
  value
})

export const resetDriverInputValuesToNull = () => ({
  type: RESET_DRIVER_INPUT_VALUES
})

// Fetch drivers
export const fetchDriversBegin = () => ({ type: FETCH_DRIVERS_BEGIN })
export const fetchDriversSuccess = (drivers) => ({
  type: FETCH_DRIVERS_SUCCESS,
  drivers
})
export const fetchDriversFailure = (error) => ({
  type: FETCH_DRIVERS_FAILURE,
  error
})
