# tuples

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

A tiny tuple-like implementation in JavaScript.

## Installation

```
npm install tuples
```

## Usage

``` javascript
const { tuple, fst, snd, swap } = require('tuples')

const t = tuple(1, 2) // => [1, 2]
fst(t)                // => 1
snd(t)                // => 2
swap(t)               // => [2, 1]
```

## API

### t = tuple(...any)

Construct a new tuple.

### fst(t)

Extract the first component of a pair.

### snd(t)

Extract the second component of a pair.

### swap(t)

Swap the components of a pair.

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/tuples.svg?style=flat-square
[npm-url]: https://npmjs.com/package/tuples
[license-img]: http://img.shields.io/npm/l/tuples.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/tuples.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/tuples
