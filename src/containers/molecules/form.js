import { connect } from 'react-redux'
// Components
import Form from 'components/molecules/form'
// Actions
import { addDriver } from 'actions/state/drivers'
// Selectors
import { getDriverInput } from 'selectors/drivers'

const mapStateToProps = (state) => {
  return {
    input: getDriverInput(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddDriver(driver) {
      dispatch(addDriver(driver))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
