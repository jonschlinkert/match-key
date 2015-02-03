/*!
 * match-key <https://github.com/jonschlinkert/match-key>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var matcher = require('is-match');

module.exports = function matchKey(obj, pattern, options) {
  if (arguments.length < 2) {
    throw new Error('matchKey expects at least two arguments.');
  }

  var isMatch = matcher(pattern, options);
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (isMatch(key)) {
        var res = {};
        res[key] = obj[key];
        return res;
      }
    }
  }
  return null;
};
