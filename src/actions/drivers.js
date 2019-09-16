import {
  ADD_DRIVER,
  REMOVE_DRIVER,
  FETCH_DRIVERS_BEGIN,
  FETCH_DRIVERS_SUCCESS,
  FETCH_DRIVERS_FAILURE
} from 'constants/drivers'

// add driver
export const addDriver = (driver) => ({ type: ADD_DRIVER, driver })
// remove driver
export const removeDriver = (id) => ({ type: REMOVE_DRIVER, id })
// fetch drivers
export const fetchDriversBegin = () => ({ type: FETCH_DRIVERS_BEGIN })
export const fetchDriversSuccess = (drivers) => ({
  type: FETCH_DRIVERS_SUCCESS,
  drivers
})
export const fetchDriversFailure = (error) => ({
  type: FETCH_DRIVERS_FAILURE,
  error
})
