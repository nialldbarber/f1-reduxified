import { connect } from 'react-redux'
// Components
import Table from 'components/molecules/table'
// Actions
import { fetchDrivers } from 'actions/business-sync/drivers'
import { removeDriver } from 'actions/state/drivers'
// Selectors
import { getDrivers } from 'selectors/drivers'

const mapStateToProps = (state) => {
  return {
    drivers: getDrivers(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDrivers: dispatch(fetchDrivers()),
    removeDriverFromList: (id) => {
      dispatch(removeDriver(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
