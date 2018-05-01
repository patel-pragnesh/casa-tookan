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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFActionGoTo.h
 * @class
 */
function PDFActionGoTo (pointer) {
	if (!(this instanceof PDFActionGoTo)) {
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
			class: 'PDFActionGoTo',
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
PDFActionGoTo.prototype = Object.create(PDFAction.prototype, {
	constructor: {
		value: PDFActionGoTo,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFActionGoTo, PDFAction);

Object.defineProperty(PDFActionGoTo, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFActionGoTo, 'className', {
	value: 'PDFActionGoTo',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionGoTo.prototype, 'className', {
	value: 'PDFActionGoTo',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionGoTo.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFActionGoTo, 'toString', {
	value: function () {
		return '[class PDFActionGoTo]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.PDFDestination = require('/hyperloop/pdfkit/pdfdestination');

	$class = Hyperloop.createProxy({
		class: 'PDFActionGoTo',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFActionGoTo, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFActionGoTo, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PDFActionGoTo.prototype, {
		destination: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.PDFDestination($dispatch(this.$native, 'destination'));
			},
		
			set: function (_destination) {
				if (!$init) { $initialize(); }
				this.$private.destination = _destination;
				$dispatch(this.$native, 'setDestination:', _destination);
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

module.exports = PDFActionGoTo;
