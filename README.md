# React Native - File Type

> ReactNative: Detect the file type of a Buffer/Uint8Array by reading from Local
> Storage

This library is a React Native wrapper around
[sindresorhus/file-type](https://github.com/sindresorhus/file-type) node.

The file type is detected by checking the
[magic number](<http://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files>)
of the buffer.

Before we dive into on how to use this library. We would like to thank all the
contributor of sindresorhus/file-type for providing such a awesome nice, cool
library

## Install

```
npm install react-native-file-type
```

Internally it uses [RNFS](https://github.com/itinance/react-native-fs) to read
file from the provided path

```
react-native link react-native-fs
```

## Usage

```
import fileType from 'react-native-file-type'

let type = fileType('local-storage-path')

//Ext: type.ext
//MimeType: type.mime
```

# Contribution

Any type of contribution will be very much appreciated

# License

Copyright @2017 Pranav Raj Singh Chauhan

The React Native File Type is provided under the MIT License.
