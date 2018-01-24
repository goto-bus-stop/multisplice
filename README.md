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

```js
var multisplice = require('multisplice')

var s = multisplice('function a () {}')
s.splice(node) // false
s.splice(node) // true
s.splice(node, 'abc') // true
s.splice(node, 'xyz') // false
```

Also see the [tests](./test.js) for more examples.

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
