import { connect } from 'react-redux'
// Components
import Form from 'components/molecules/form'
// Actions
import {
  addDriver,
  setInputValues,
  resetDriverInputValuesToNull
} from 'actions/state/drivers'
import { getInputValuesFromNameAttr } from 'actions/business/drivers'
// Selectors
import { getDriverInput } from 'selectors/drivers'
import { store } from 'store'

const mapStateToProps = (state) => {
  return {
    input: getDriverInput(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDriverToDriverList: (e) => {
      e.preventDefault()
      dispatch(
        addDriver(
          store
            .getState()
            .get('input')
            .toJS()
        )
      )
      dispatch(resetDriverInputValuesToNull())
    },
    mapInputValuesToNewDriver: (e) => {
      dispatch(setInputValues(getInputValuesFromNameAttr(e)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
