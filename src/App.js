import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Journals from './components/Journals'

export default App = StackNavigator({
  Home: { screen: Journals },
})


//export default class App extends React.Component {
//  render() {
//    return (
//      <Journals />
//    )
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
