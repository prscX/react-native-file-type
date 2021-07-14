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
import RNFetchBlob from 'rn-fetch-blob'

let Base64 = require('js-base64').Base64

let JPGFile = require('./fixture/fixture.jpg');

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
    let photoPath = RNFS.DocumentDirectoryPath + '/photo.jpg';
    let binaryFile = resolveAssetSource(JPGFile);

    RNFetchBlob.config({fileCache: true})
      .fetch('GET', binaryFile.uri)
      .then((resp: {path: () => string}) => {
        RNFS.moveFile(resp.path(), photoPath)
          .then(() => {
            console.log('FILE WRITTEN!');

            FileType(photoPath).then(type => {
              console.log(`Type: `, type);
            });
          })
          .catch(err => {
            console.log(err.message);

            FileType(photoPath).then(type => {
              console.log(`Type: `, type);
            });
          });
      })
      .catch((err: {message: any}) => {
        console.log(err.message);
      });
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
