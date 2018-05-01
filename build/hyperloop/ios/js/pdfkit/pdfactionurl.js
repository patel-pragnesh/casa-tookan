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


var PDFAction = require('/hyperloop/pdfkit/pdfaction');


/**
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFActionURL.h
 * @class
 */
function PDFActionURL (pointer) {
	if (!(this instanceof PDFActionURL)) {
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
			class: 'PDFActionURL',
			alloc: true,
			init: 'init'
		});
	}
	PDFAction.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
PDFActionURL.prototype = Object.create(PDFAction.prototype, {
	constructor: {
		value: PDFActionURL,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFActionURL, PDFAction);

Object.defineProperty(PDFActionURL, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFActionURL, 'className', {
	value: 'PDFActionURL',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionURL.prototype, 'className', {
	value: 'PDFActionURL',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionURL.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFActionURL, 'toString', {
	value: function () {
		return '[class PDFActionURL]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');

	$class = Hyperloop.createProxy({
		class: 'PDFActionURL',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFActionURL, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFActionURL, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFActionURL.prototype, 'initWithURL', {
		value: function (_url) {
			var result = $dispatch(this.$native, 'initWithURL:', [_url], true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			instance.$private.initWithURL = instance.$private.initWithURL || [];
			instance.$private.initWithURL.push(_url);
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PDFActionURL.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		}
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

module.exports = PDFActionURL;
