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


var WKInterfaceObject = require('/hyperloop/watchkit/wkinterfaceobject');


/**
 * WatchKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchKit.framework/Headers/WKInterfaceSlider.h
 * @class
 */
function WKInterfaceSlider (pointer) {
	if (!(this instanceof WKInterfaceSlider)) {
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
			class: 'WKInterfaceSlider',
			alloc: true,
			init: 'init'
		});
	}
	WKInterfaceObject.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
WKInterfaceSlider.prototype = Object.create(WKInterfaceObject.prototype, {
	constructor: {
		value: WKInterfaceSlider,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKInterfaceSlider, WKInterfaceObject);

Object.defineProperty(WKInterfaceSlider, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKInterfaceSlider, 'className', {
	value: 'WKInterfaceSlider',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceSlider.prototype, 'className', {
	value: 'WKInterfaceSlider',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceSlider.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKInterfaceSlider, 'toString', {
	value: function () {
		return '[class WKInterfaceSlider]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'WKInterfaceSlider',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKInterfaceSlider, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKInterfaceSlider, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKInterfaceSlider.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
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

module.exports = WKInterfaceSlider;
