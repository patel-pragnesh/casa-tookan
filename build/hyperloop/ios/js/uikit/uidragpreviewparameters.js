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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIDragPreviewParameters.h
 * @class
 */
function UIDragPreviewParameters (pointer) {
	if (!(this instanceof UIDragPreviewParameters)) {
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
			class: 'UIDragPreviewParameters',
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
UIDragPreviewParameters.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIDragPreviewParameters,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIDragPreviewParameters, NSObject);

Object.defineProperty(UIDragPreviewParameters, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIDragPreviewParameters, 'className', {
	value: 'UIDragPreviewParameters',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDragPreviewParameters.prototype, 'className', {
	value: 'UIDragPreviewParameters',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDragPreviewParameters.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIDragPreviewParameters, 'toString', {
	value: function () {
		return '[class UIDragPreviewParameters]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'UIDragPreviewParameters',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIDragPreviewParameters, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIDragPreviewParameters, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIDragPreviewParameters.prototype, 'init', {
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


	// instance properties
	Object.defineProperties(UIDragPreviewParameters.prototype, {
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

module.exports = UIDragPreviewParameters;
