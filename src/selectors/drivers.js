import { createSelector } from 'reselect'
// Getters
import { getDriverInputValue, getListOfDrivers } from 'getters/drivers'

// Get input for driver input
export const getDriverInput = createSelector(
  getDriverInputValue,
  (input) => input
)

// Get a list of drivers
export const getDrivers = createSelector(
  getListOfDrivers,
  (drivers) => drivers
)
