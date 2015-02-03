# match-key [![NPM version](https://badge.fury.io/js/match-key.svg)](http://badge.fury.io/js/match-key)

> Get a property from an object with the first key that matches the given glob pattern, function, regex or string.

## Install with [npm](npmjs.org)

```bash
npm i match-key --save
```

This returns one property. If you want to filter an object use [filter-object].

## Usage

```js
var matchKey = require('match-key');
matchKey(object, pattern, options);
```

**Params**:

- `object`: The object to search
- `pattern`: The pattern to match against. This may be string, function, glob pattern, or regex.
- `options`: options to pass to [micromatch]


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


## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/match-key/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 03, 2015._

[filter-object]: https:/github.com/jonschlinkert/filter-object
[arr-diff]: https://github.com/jonschlinkert/arr-diff
[arr-filter]: https://github.com/jonschlinkert/arr-filter
[arr-map]: https://github.com/jonschlinkert/arr-map
[array-slice]: https://github.com/jonschlinkert/array-slice
[braces]: https://github.com/jonschlinkert/braces
[expand-range]: https://github.com/jonschlinkert/expand-range
[filename-regex]: https://github.com/regexps/filename-regex
[fill-range]: https://github.com/jonschlinkert/fill-range
[for-in]: https://github.com/jonschlinkert/for-in
[for-own]: https://github.com/jonschlinkert/for-own
[glob-path-regex]: https://github.com/regexps/glob-path-regex
[is-glob]: https://github.com/jonschlinkert/is-glob
[is-match]: https://github.com/jonschlinkert/is-match
[is-number]: https://github.com/jonschlinkert/is-number
[isobject]: https://github.com/jonschlinkert/isobject
[kind-of]: https://github.com/jonschlinkert/kind-of
[make-iterator]: https://github.com/jonschlinkert/make-iterator
[micromatch]: https://github.com/jonschlinkert/micromatch
[preserve]: https://github.com/jonschlinkert/preserve
[randomatic]: https://github.com/jonschlinkert/randomatic
[repeat-element]: https://github.com/jonschlinkert/repeat-element
[repeat-string]: https://github.com/jonschlinkert/repeat-string

<!-- deps: helper-reflinks -->
