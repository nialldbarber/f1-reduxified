import React from 'react'
import { Provider } from 'react-redux'
// Redux
import { store } from 'store'
// Components
import Layout from 'components/pages/layout'

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
)

export default App
