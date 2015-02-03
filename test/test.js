
var assert = require('assert');

var getDimensions = require('..');

it('should get dimensions', function () {
  return getDimensions('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4').then(function (size) {
    assert.equal(size.width, 640);
    assert.equal(size.height, 360);
  });
})
