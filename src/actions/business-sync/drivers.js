import {
  fetchDriversBegin,
  fetchDriversSuccess,
  fetchDriversFailure
} from 'actions/state/drivers'

export const fetchDrivers = () => {
  return (dispatch) => {
    dispatch(fetchDriversBegin())
    return fetch(
      'https://gist.githubusercontent.com/nialldbarber/48cfa93167b6d4cd79660fb050513dd4/raw/bf4507ae1fb3ccf726d2b84f4dc436d1e19e8752/f1-champs.json'
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchDriversSuccess(json))
        return json
      })
      .catch((error) => dispatch(fetchDriversFailure(error)))
  }
}

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}
