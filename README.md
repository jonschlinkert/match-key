# match-key [![NPM version](https://badge.fury.io/js/match-key.svg)](http://badge.fury.io/js/match-key)

> Get a property from an object with the first key that matches the given glob pattern, function, regex or string.

This returns one property. If you want to filter an object use [filter-object].

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i match-key --save
```

## Usage

```js
var matchKey = require('match-key');
matchKey(object, pattern, options);
```

**Params**:

* `object`: The object to search
* `pattern`: The pattern to match against. This may be string, function, glob pattern, or regex.
* `options`: options to pass to [micromatch](https://github.com/jonschlinkert/micromatch)

### Valid patterns

**String:**

```js
matchKey({a: 'b', c: 'd'}, 'a');
//=> {a: 'b'}
```

**Function:**

```js
matchKey({a: 'b', c: 'd'}, function (key) {
  return key === 'a'
});
//=> {'a': 'b'}
```

**Glob pattern:**

```js
matchKey(o, '*');
//=> {a: 'b'}

matchKey(o, '*c');
//=> {c: 'd'}
```

**Regular expression:**

```js
matchKey({a: 'b', aa: 'bb'}, /\w{2}/);
//=> {aa: 'bb'}
```

## Related

* [has-glob](https://www.npmjs.com/package/has-glob): Returns `true` if an array has a glob pattern. | [homepage](https://github.com/jonschlinkert/has-glob)
* [is-glob](https://www.npmjs.com/package/is-glob): Returns `true` if the given string looks like a glob pattern. | [homepage](https://github.com/jonschlinkert/is-glob)
* [is-match](https://www.npmjs.com/package/is-match): Create a matching function from a glob pattern, regex, string, array, object or function. | [homepage](https://github.com/jonschlinkert/is-match)
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://www.npmjs.com/package/micromatch) | [homepage](https://github.com/jonschlinkert/micromatch)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/match-key/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 08, 2015._
