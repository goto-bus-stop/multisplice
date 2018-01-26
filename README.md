# multisplice

easily splice a string multiple times, using offsets into the original string

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/multisplice.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/multisplice
[travis-image]: https://img.shields.io/travis/goto-bus-stop/multisplice.svg?style=flat-square
[travis-url]: https://travis-ci.org/goto-bus-stop/multisplice
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install multisplice
```

## Usage

Renaming identifiers in Javascript code:

```js
var multisplice = require('./')
var dedent = require('dedent')
var astw = require('astw')

var src = dedent`
  function beep (boop) {
    boop *= baz
    console.log(boop)
  }
  var baz = 10
  beep(17)
`

var splicer = multisplice(src)
var renames = {}
var nextName = 'a'.charCodeAt()
astw(src)(function (node) {
  if (node.type === 'Identifier') {
    if (!renames[node.name]) renames[node.name] = String.fromCharCode(nextName++)

    splicer.splice(node.start, node.end, renames[node.name])
  }
})

console.log(splicer.toString())
```

```
function a (b) {
  b *= c
  d.e(b)
}
var c = 10
a(17)
```

## API

### `var s = multisplice(string)`

Create a string splicer instance. This instance will splice things into `string`.

### `s.splice(start, end, value)`

Replace the slice from indices `start` to `end` in the original string with `value`.

### `s.slice(start, end)`

Get a part of the spliced string, using indices `start` to `end` from the original string.

### `s.toString()`

Get the full spliced string (`.slice(0)`).

## License

[Apache-2.0](LICENSE.md)
