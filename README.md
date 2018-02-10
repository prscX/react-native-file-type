# React Native - File Type

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


## Other Contributions
- React Native - Spruce: [react-native-spruce](https://github.com/prscX/react-native-spruce)

![Screenshots](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

- React Native - App Tour Library: [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

![Screenshots](https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif)
![Screenshots](https://github.com/aromajoin/material-showcase-ios/raw/master/art/material-showcase.gif?raw=true)

- React Native - Bottom Action Sheet: [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif)

- React Native - Popover: [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)

![](https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png)

- React Native - Tooltips: [react-native-tooltips](https://github.com/prscX/react-native-tooltips)

![](https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966)

- React Native - Shine Button: [react-native-shine-button](https://github.com/prscX/react-native-shine-button)

![Screenshots](https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif)

- React Native Iconic: [react-native-iconic](https://github.com/prscX/react-native-iconic)
![Screenshots](https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966)

- React Native Download Button: [react-native-download-button](https://github.com/prscX/react-native-download-button)

![](https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif)

- React Native Siri Wave View: [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)

![](https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif)

- React Native Material Shadows: [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)

![](
https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png
)

- React Native Gradient Blur View: [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)

![](
https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png
)

- Visual Code Essential Plugins: [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)

![Screenshots](https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg)

- Prettier Pack: [prettier-pack](https://github.com/prscX/prettier-pack)

![Screenshots](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

