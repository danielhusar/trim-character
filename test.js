'use strict';

var assert = require('assert');
var trim = require('./');

it('Simple trim should work', function () {
	assert.equal(trim(',foo,', ','), 'foo');
	assert.equal(trim(',foo,bar,', ','), 'foo,bar');
	assert.equal(trim('123', '1'), '23');
});

it('Simple trim should work with special characters', function () {
	assert.equal(trim('^foo bar^', '^'), 'foo bar');
	assert.equal(trim('$foo bar^', '$'), 'foo bar^');
});

it('Custom flags should work', function () {
	assert.equal(trim('FooBaF', 'f'), 'FooBaF');
	assert.equal(trim('FooBaF', 'f', 'i'), 'ooBa');
	assert.equal(trim('FooBaF', 'f', 'gi'), 'ooBa');
	assert.equal(trim('FooBaF', 'f', 'ig'), 'ooBa');
});

