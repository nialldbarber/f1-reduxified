import { connect } from 'react-redux'
import Table from 'components/molecules/table'
import { fetchDrivers } from 'business-sync/drivers'

const mapStateToProps = (state) => {
  return {
    drivers: state.drivers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: dispatch(fetchDrivers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table)
