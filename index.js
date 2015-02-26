'use strict';

var escapeStringRegexp = require('escape-string-regexp');
var flag = 'g';

function errors (str, repl, flags) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected string as first argument');
	}

	if (typeof repl !== 'string') {
		throw new TypeError('Expected string as second argument');
	}

	if ( (typeof flags !== 'string') && (typeof flags !== 'undefined') ) {
		throw new TypeError('Expected string as third argument');
	}
}

function defaults (str, repl, flags) {
	errors(str, repl, flags);
	flags = flags ? flags : '';

	return {
		'repl' : escapeStringRegexp(repl),
		'flag' : flags.indexOf('g') === -1 ? flag + flags : flags
	};
}

module.exports = function (str, repl, flags) {
	var params = defaults(str, repl, flags);
	var regexp = new RegExp('^(' +  params.repl + ')+|(' +  params.repl + ')+$', params.flag);
	return str.replace(regexp, '');
};

module.exports.left = function (str, repl, flags) {
	var params = defaults(str, repl, flags);
	var regexp = new RegExp('^(' +  params.repl + ')+', params.flag);
	return str.replace(regexp, '');
};

module.exports.right = function (str, repl, flags) {
	var params = defaults(str, repl, flags);
	var regexp = new RegExp('(' +  params.repl + ')+$', params.flag);
	return str.replace(regexp, '');
};
