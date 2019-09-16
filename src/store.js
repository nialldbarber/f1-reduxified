import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { driverReducer } from 'reducers/drivers'

export const store = createStore(driverReducer, applyMiddleware(thunk))
