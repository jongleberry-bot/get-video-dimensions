
# get-video-dimensions

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Get the dimensions of a video with `ffprobe`.
Requires the `ffprobe` binary installed.

```js
var getDimensions = require('get-video-dimensions');

getDimensions('video.mp4').then(function (dimensions) {
  console.log(dimensions.width);
  console.log(dimensions.height);
})
```

[gitter-image]: https://badges.gitter.im/mgmtio/get-video-dimensions.png
[gitter-url]: https://gitter.im/mgmtio/get-video-dimensions
[npm-image]: https://img.shields.io/npm/v/get-video-dimensions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/get-video-dimensions
[github-tag]: http://img.shields.io/github/tag/mgmtio/get-video-dimensions.svg?style=flat-square
[github-url]: https://github.com/mgmtio/get-video-dimensions/tags
[travis-image]: https://img.shields.io/travis/mgmtio/get-video-dimensions.svg?style=flat-square
[travis-url]: https://travis-ci.org/mgmtio/get-video-dimensions
[coveralls-image]: https://img.shields.io/coveralls/mgmtio/get-video-dimensions.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/mgmtio/get-video-dimensions
[david-image]: http://img.shields.io/david/mgmtio/get-video-dimensions.svg?style=flat-square
[david-url]: https://david-dm.org/mgmtio/get-video-dimensions
[license-image]: http://img.shields.io/npm/l/get-video-dimensions.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/get-video-dimensions.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/get-video-dimensions
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
