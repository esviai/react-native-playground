//import App from './src/App.js'
//
//export default App

import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/store/configureStore'
import AppSrc from './src/App.js'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppSrc />
      </Provider>
    )
  }
}
export default App
