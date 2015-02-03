/*!
 * match-key <https://github.com/jonschlinkert/match-key>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var matchKey = require('./');

var o = {a: 'b', c: 'd', ee: 'f', f: 'i', '.g': 'h'};

describe('matchKey', function () {
  it('should return `null` when no matches are found', function () {
    (matchKey(o, 'foo') == null).should.be.true;
  });

  it('should use a string for matching', function () {
    matchKey(o, 'a').should.eql({a: 'b'});
  });

  it('should use a function for matching', function () {
    matchKey(o, function (key) {
      return key === '.g'
    }).should.eql({'.g' :'h'});
  });

  it('should use a regex for matching', function () {
    var a = /\w{2}/;
    var b = /^\./;
    matchKey(o, a).should.eql({ee: 'f'});
    matchKey(o, b).should.eql({'.g': 'h'});
  });

  it('should use a glob pattern for matching', function () {
    matchKey(o, '*').should.eql({a: 'b'});
    matchKey(o, '*c').should.eql({c: 'd'});
    matchKey(o, '{f,g}').should.eql({f: 'i'});
    matchKey(o, '{,.}g').should.eql({'.g': 'h'});
  });
});
