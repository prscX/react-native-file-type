

<h1 align="center">

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-file-type"><img src="http://img.shields.io/npm/v/react-native-file-type.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-file-type/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-file-type#License"><img src="https://img.shields.io/npm/l/react-native-file-type.svg?style=flat" /></a>
</p>

    ReactNative - File Type (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>


> ReactNative: Detect the file type of a Buffer/Uint8Array by reading it from
> device (Android/iOS/Widnows) file system

This library is a React Native wrapper around
[sindresorhus/file-type](https://github.com/sindresorhus/file-type) node module.

The file type is detected by checking the
[magic number](<http://en.wikipedia.org/wiki/Magic_number_(programming)#Magic_numbers_in_files>)
of the buffer.

[sindresorhus/file-type](https://github.com/sindresorhus/file-type):
fileType(buffer) API, accepts a buffer of binary file data in order to determine
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

## 💻 Usage

```
import fileType from 'react-native-file-type'

fileType('local-storage-path').then((type) => {
    //Ext: type.ext
    //MimeType: type.mime
})
```


## ✨ Credits

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-file-type/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache License.

RNFileType @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >