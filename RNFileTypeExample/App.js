/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

import RNFS from 'react-native-fs'
import FileType from 'react-native-file-type'

let Base64 = require('js-base64').Base64

let JPGFile = require('./fixture/fixture.pdf')

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

export default class App extends Component<{}> {
  componentDidMount() {
    this.specs()
  }

  specs() {
    let fixture = resolveAssetSource(JPGFile)

    fetch(fixture.uri).then(response => {
      Base64.extendString()
      let data = response._bodyText.toBase64()

      RNFS.writeFile(
        RNFS.DocumentDirectoryPath + '/JPGFile.jpg',
        data,
        'base64'
      )
        .then(() => {
          FileType(RNFS.DocumentDirectoryPath + '/JPGFile.jpg').then(type => {
            console.log('Type: ' + type)
          })
        })
        .catch(() => {})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
