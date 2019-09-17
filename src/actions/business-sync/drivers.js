import axios from 'axios'
import {
  fetchDriversBegin,
  fetchDriversSuccess,
  fetchDriversFailure
} from 'actions/state/drivers'

export function fetchDrivers() {
  return async (dispatch) => {
    try {
      dispatch(fetchDriversBegin())
      let { data } = await axios.get(
        'https://gist.githubusercontent.com/nialldbarber/48cfa93167b6d4cd79660fb050513dd4/raw/bf4507ae1fb3ccf726d2b84f4dc436d1e19e8752/f1-champs.json'
      )
      dispatch(fetchDriversSuccess(data))
      return data
    } catch (error) {
      if (!error.ok) {
        dispatch(fetchDriversFailure(error))
        throw Error(error)
      }
    }
  }
}
