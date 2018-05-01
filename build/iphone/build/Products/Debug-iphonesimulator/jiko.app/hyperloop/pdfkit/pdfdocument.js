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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFDocument.h
 * @class
 */
function PDFDocument (pointer) {
	if (!(this instanceof PDFDocument)) {
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
			class: 'PDFDocument',
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
PDFDocument.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PDFDocument,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFDocument, NSObject);

Object.defineProperty(PDFDocument, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFDocument, 'className', {
	value: 'PDFDocument',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFDocument.prototype, 'className', {
	value: 'PDFDocument',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFDocument.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFDocument, 'toString', {
	value: function () {
		return '[class PDFDocument]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'PDFDocument',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFDocument, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFDocument, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFDocument.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(PDFDocument.prototype, 'initWithURL', {
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
	Object.defineProperties(PDFDocument.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = PDFDocument;
