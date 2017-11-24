import RNFS from 'react-native-fs'
import { Base64 } from 'js-base64'
import fileType from 'file-type'

function FileType(path) {
  return new Promise((resolve, reject) => {
    RNFS.readFile(path, 'base64')
      .then(fileData => {
        let convertedData = CovertBase64ToArrayBuffer(fileData)
        convertedData = new Uint8Array(convertedData)

        let type = fileType(convertedData)

        resolve(type)
      })
      .catch(reason => {
        reject(reason)
      })
  })
}

function CovertBase64ToArrayBuffer(data) {
  let UTF8Data = Base64.atob(data)
  let UTF8DataLength = UTF8Data.length

  let bytes = new Uint8Array(UTF8DataLength)

  for (var i = 0; i < UTF8DataLength; i++) {
    bytes[i] = UTF8Data.charCodeAt(i)
  }

  return bytes.buffer
}

export default FileType
