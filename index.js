'use strict';

var escapeStringRegexp = require('escape-string-regexp');
var flag = 'g';

module.exports = function (str, repl, flags) {

	if (typeof str !== 'string') {
		throw new TypeError('Expected string as first argument');
	}

	if (typeof repl !== 'string') {
		throw new TypeError('Expected string as second argument');
	}

	if ( (typeof flags !== 'string') && (typeof flags !== 'undefined') ) {
		throw new TypeError('Expected string as third argument');
	}

	repl = escapeStringRegexp(repl);
	flags = flags ? flags : '';
	flag = flags.indexOf('g') === -1 ? flag + flags : flags;
	var regexp = new RegExp('(^' +  repl + ')|(' +  repl + '$)', flag);

	return str.replace(regexp, '');
};
