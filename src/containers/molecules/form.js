import { connect } from 'react-redux'
import Form from 'components/molecules/form'
import { addDriver } from 'actions/drivers'

const mapStateToProps = (state) => {
  return {
    input: state.input
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
