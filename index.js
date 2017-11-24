import RNFS from 'react-native-fs'
import { Base64 } from 'js-base64'
import fileType from 'file-type'

function FileType(path) {
  let promise = Promise.Create()

  RNFS.readFile(path, 'base64')
    .then(fileData => {
      let convertedData = CovertBase64ToUTF8(fileData)
      let type = fileType(convertedData)

      promise.resolve(type)
    })
    .catch(reason => {
      promise.reject(reason)
    })

  return promise
}

function CovertBase64ToUTF8(data) {
  let UTF8Data = Base64.atob(data)
  let UTF8DataLength = UTF8Data.length

  let bytes = new Uint8Array(UTF8DataLength)

  for (var i = 0; i < UTF8DataLength; i++) {
    bytes[i] = UTF8Data.charCodeAt(i)
  }

  return bytes.buffer
}

export default FileType
