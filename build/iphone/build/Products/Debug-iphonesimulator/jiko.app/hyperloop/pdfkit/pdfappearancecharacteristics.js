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
 * PDFKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/PDFKit.framework/Headers/PDFAppearanceCharacteristics.h
 * @class
 */
function PDFAppearanceCharacteristics (pointer) {
	if (!(this instanceof PDFAppearanceCharacteristics)) {
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
			class: 'PDFAppearanceCharacteristics',
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
PDFAppearanceCharacteristics.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: PDFAppearanceCharacteristics,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(PDFAppearanceCharacteristics, NSObject);

Object.defineProperty(PDFAppearanceCharacteristics, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(PDFAppearanceCharacteristics, 'className', {
	value: 'PDFAppearanceCharacteristics',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFAppearanceCharacteristics.prototype, 'className', {
	value: 'PDFAppearanceCharacteristics',
	enumerable: false,
	writable: true
});

Object.defineProperty(PDFAppearanceCharacteristics.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(PDFAppearanceCharacteristics, 'toString', {
	value: function () {
		return '[class PDFAppearanceCharacteristics]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'PDFAppearanceCharacteristics',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(PDFAppearanceCharacteristics, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(PDFAppearanceCharacteristics, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(PDFAppearanceCharacteristics.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
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

module.exports = PDFAppearanceCharacteristics;
