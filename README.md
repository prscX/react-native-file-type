# React Native - File Type

> ReactNative: Detect the file type of a Buffer/Uint8Array by reading it from
> device (Android/iOS/Widnows) file system

This library is a React Native wrapper around
[sindresorhus/file-type](https://github.com/sindresorhus/file-type) node module.

The file type is detected by checking the
[magic number](<http://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files>)
of the buffer.

[sindresorhus/file-type](https://github.com/sindresorhus/file-type):
fileType(buffer) API, expects a buffer of binary file data in order to determine
it's meta data. Please find below usage for the same:

```
const readChunk = require('read-chunk');
const fileType = require('file-type');
const buffer = readChunk.sync('unicorn.png', 0, 4100);

fileType(buffer);
//=> {ext: 'png', mime: 'image/png'}
```

We have created this library for the ease of use. Based on local storage path
provided we internally use [RNFS](https://github.com/itinance/react-native-fs)
to read file and [js-base64](https://github.com/dankogai/js-base64) to convert
data into Uint8Array buffer which is expected by
[sindresorhus/file-type](https://github.com/sindresorhus/file-type):
fileType(buffer) API

```
fileType('local-storage-path')
```

Before we dive into on how to use this library. We would like to thank all the
contributor of
[sindresorhus/file-type](https://github.com/sindresorhus/file-type) for
providing such a awesome nice, cool library

## Install

```
npm install react-native-file-type
```

Internally we are using [RNFS](https://github.com/itinance/react-native-fs) to
read file. We have to link this library with our project:

```
react-native link react-native-fs
```

## Usage

```
import fileType from 'react-native-file-type'

fileType('local-storage-path').then((type) => {
    //Ext: type.ext
    //MimeType: type.mime
})
```

# Contribution

Any type of contribution will be very much appreciated

# License

Copyright @2017 Pranav Raj Singh Chauhan

The React Native File Type is provided under the MIT License.
