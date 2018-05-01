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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFActionRemoteGoTo.h
 * @class
 */
function PDFActionRemoteGoTo (pointer) {
	if (!(this instanceof PDFActionRemoteGoTo)) {
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
			class: 'PDFActionRemoteGoTo',
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
PDFActionRemoteGoTo.prototype = Object.create(PDFAction.prototype, {
	constructor: {
		value: PDFActionRemoteGoTo,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFActionRemoteGoTo, PDFAction);

Object.defineProperty(PDFActionRemoteGoTo, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFActionRemoteGoTo, 'className', {
	value: 'PDFActionRemoteGoTo',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionRemoteGoTo.prototype, 'className', {
	value: 'PDFActionRemoteGoTo',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFActionRemoteGoTo.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFActionRemoteGoTo, 'toString', {
	value: function () {
		return '[class PDFActionRemoteGoTo]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSURL = require('/hyperloop/foundation/nsurl');
	$imports.CGPoint = require('/hyperloop/coregraphics/cgpoint');

	$class = Hyperloop.createProxy({
		class: 'PDFActionRemoteGoTo',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFActionRemoteGoTo, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFActionRemoteGoTo, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PDFActionRemoteGoTo.prototype, {
		URL: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSURL($dispatch(this.$native, 'URL'));
			},
		
			enumerable: false
		},
		point: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGPoint($dispatch(this.$native, 'point'));
			},
		
			set: function (_point) {
				if (!$init) { $initialize(); }
				this.$private.point = _point;
				$dispatch(this.$native, 'setPoint:', _point);
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

module.exports = PDFActionRemoteGoTo;
