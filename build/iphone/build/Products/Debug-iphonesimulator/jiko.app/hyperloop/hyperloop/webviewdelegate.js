/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports,
	$class;


var NSObject = require('/hyperloop/foundation/nsobject');


/**
 * Hyperloop/
 * @class
 */
function WebViewDelegate (pointer) {
	if (!(this instanceof WebViewDelegate)) {
		throw new TypeError('Cannot instantiate a class by calling it as a function');
	}

	if (!$init) {
		$initialize();
	}

	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer.$native ? pointer.$native : pointer);
		if (oldWrapper) {
			if (oldWrapper.__proto__ !== this.__proto__) {
				oldWrapper = Object.setPrototypeOf(oldWrapper, this.__proto__);
			}
			return oldWrapper;
		}
	}

	if (!pointer) {
		pointer = Hyperloop.createProxy({
			class: 'WebViewDelegate',
			alloc: true,
			init: 'init'
		});
	}
	NSObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
WebViewDelegate.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WebViewDelegate,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WebViewDelegate, NSObject);

Object.defineProperty(WebViewDelegate, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WebViewDelegate, 'className', {
	value: 'WebViewDelegate',
	enumerable: false,
	writable: true
});

Object.defineProperty(WebViewDelegate.prototype, 'className', {
	value: 'WebViewDelegate',
	enumerable: false,
	writable: true
});

Object.defineProperty(WebViewDelegate.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WebViewDelegate, 'toString', {
	value: function () {
		return '[class WebViewDelegate]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(WebViewDelegate, 'addMethod', {
	value: function () {
		if (!$init) { $initialize(); }
		return Hyperloop.addMethod(this, arguments[0]);
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'WebViewDelegate',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WebViewDelegate, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WebViewDelegate, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});



	$init = true;
}

/**
 * ticore compatibility with ES6
 */
Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

module.exports = WebViewDelegate;
