'use strict';

var $ = require('jquery');
var delve = require('delve');

var lang = {};

$('script[type="text/x-i18n-json"]').each(function () {
	var object;

	// The error it tries to throw is beyond useless
	try {
		object = JSON.parse(this.innerHTML);
	} catch (e) {
		throw new Error('Invalid JSON in script tag');
	}

	lang = $.extend(object, lang);
});

module.exports = function (entry) {
	return delve(lang, entry);
};
