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
 * WatchKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchKit.framework/Headers/WKInterfaceObject.h
 * @class
 */
function WKAccessibilityImageRegion (pointer) {
	if (!(this instanceof WKAccessibilityImageRegion)) {
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
			class: 'WKAccessibilityImageRegion',
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
WKAccessibilityImageRegion.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKAccessibilityImageRegion,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKAccessibilityImageRegion, NSObject);

Object.defineProperty(WKAccessibilityImageRegion, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKAccessibilityImageRegion, 'className', {
	value: 'WKAccessibilityImageRegion',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKAccessibilityImageRegion.prototype, 'className', {
	value: 'WKAccessibilityImageRegion',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKAccessibilityImageRegion.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKAccessibilityImageRegion, 'toString', {
	value: function () {
		return '[class WKAccessibilityImageRegion]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'WKAccessibilityImageRegion',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKAccessibilityImageRegion, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKAccessibilityImageRegion, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKAccessibilityImageRegion.prototype, 'setLabel', {
		value: function (_label) {
			this.$private.setLabel = this.$private.setLabel || [];
			this.$private.setLabel.push(_label);
			var result = $dispatch(this.$native, 'setLabel:', [_label], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(WKAccessibilityImageRegion.prototype, {
		frame: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGRect($dispatch(this.$native, 'frame'));
			},
		
			set: function (_frame) {
				if (!$init) { $initialize(); }
				this.$private.frame = _frame;
				$dispatch(this.$native, 'setFrame:', _frame);
			},
			enumerable: false
		},
		label: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'label'));
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

module.exports = WKAccessibilityImageRegion;
