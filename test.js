'use strict';

var assert = require('assert');
var trim = require('./');

it('Trim should work', function () {
	assert.equal(trim(',foo,', ','), 'foo');
	assert.equal(trim(',foo,bar,', ','), 'foo,bar');
	assert.equal(trim('123', '1'), '23');
});

it('Trim should work with special characters', function () {
	assert.equal(trim('^foo bar^', '^'), 'foo bar');
	assert.equal(trim('$foo bar^', '$'), 'foo bar^');
	assert.equal(trim('|foo bar|', '|'), 'foo bar');
});

it('Trim should work with mutiple characters', function () {
	assert.equal(trim('foo bar foo', 'foo'), ' bar ');
	assert.equal(trim('$$$foo bar$$$', '$$$'), 'foo bar');
});

it('Trim with custom flags should work', function () {
	assert.equal(trim('FooBaF', 'f'), 'FooBaF');
	assert.equal(trim('FooBaF', 'f', 'i'), 'ooBa');
	assert.equal(trim('FooBaF', 'f', 'gi'), 'ooBa');
	assert.equal(trim('FooBaF', 'f', 'ig'), 'ooBa');
});

it('Left trim should work', function () {
	assert.equal(trim.left(',foo,', ','), 'foo,');
	assert.equal(trim.left(',foo,bar,', ','), 'foo,bar,');
	assert.equal(trim.left('123', '1'), '23');
});

it('Left trim should work with special characters', function () {
	assert.equal(trim.left('^foo bar^', '^'), 'foo bar^');
});

it('Left trim should work with mutiple characters', function () {
	assert.equal(trim.left('foo bar foo', 'foo'), ' bar foo');
	assert.equal(trim.left('$$$foo bar$$$', '$$$'), 'foo bar$$$');
});

it('Left trim with custom flags should work', function () {
	assert.equal(trim.left('FooBaF', 'f'), 'FooBaF');
	assert.equal(trim.left('FooBaF', 'f', 'i'), 'ooBaF');
	assert.equal(trim.left('FooBaF', 'f', 'gi'), 'ooBaF');
	assert.equal(trim.left('FooBaF', 'f', 'ig'), 'ooBaF');
});

it('Right trim should work', function () {
	assert.equal(trim.right(',foo,', ','), ',foo');
	assert.equal(trim.right(',foo,bar,', ','), ',foo,bar');
	assert.equal(trim.right('1231', '1'), '123');
});

it('Right trim should work with special characters', function () {
	assert.equal(trim.right('^foo bar^', '^'), '^foo bar');
});

it('Right trim should work with mutiple characters', function () {
	assert.equal(trim.right('foo bar foo', 'foo'), 'foo bar ');
	assert.equal(trim.right('$$$foo bar$$$', '$$$'), '$$$foo bar');
});

it('Right trim with custom flags should work', function () {
	assert.equal(trim.right('FooBaF', 'f'), 'FooBaF');
	assert.equal(trim.right('FooBaF', 'f', 'i'), 'FooBa');
	assert.equal(trim.right('FooBaF', 'f', 'gi'), 'FooBa');
	assert.equal(trim.right('FooBaF', 'f', 'ig'), 'FooBa');
});

