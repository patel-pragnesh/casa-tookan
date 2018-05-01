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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFDestination.h
 * @class
 */
function PDFDestination (pointer) {
	if (!(this instanceof PDFDestination)) {
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
			class: 'PDFDestination',
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
PDFDestination.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PDFDestination,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFDestination, NSObject);

Object.defineProperty(PDFDestination, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFDestination, 'className', {
	value: 'PDFDestination',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFDestination.prototype, 'className', {
	value: 'PDFDestination',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFDestination.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFDestination, 'toString', {
	value: function () {
		return '[class PDFDestination]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.PDFPage = require('/hyperloop/pdfkit/pdfpage');
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');

	$class = Hyperloop.createProxy({
		class: 'PDFDestination',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFDestination, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFDestination, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(PDFDestination.prototype, 'compare', {
		value: function (_destination) {
			this.$private.compare = this.$private.compare || [];
			this.$private.compare.push(_destination);
			var result = $dispatch(this.$native, 'compare:', [_destination], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(PDFDestination.prototype, {
		page: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFPage($dispatch(this.$native, 'page'));
			},
		
			enumerable: false
		},
		point: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGPoint($dispatch(this.$native, 'point'));
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

module.exports = PDFDestination;
