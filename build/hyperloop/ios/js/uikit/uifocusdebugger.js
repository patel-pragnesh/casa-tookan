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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIFocusDebugger.h
 * @class
 */
function UIFocusDebugger (pointer) {
	if (!(this instanceof UIFocusDebugger)) {
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
			class: 'UIFocusDebugger',
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
UIFocusDebugger.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIFocusDebugger,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIFocusDebugger, NSObject);

Object.defineProperty(UIFocusDebugger, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIFocusDebugger, 'className', {
	value: 'UIFocusDebugger',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusDebugger.prototype, 'className', {
	value: 'UIFocusDebugger',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIFocusDebugger.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIFocusDebugger, 'toString', {
	value: function () {
		return '[class UIFocusDebugger]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(UIFocusDebugger, 'status', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'status', null, false);
			if (result === undefined || result === null) return result;
			result = new $imports.NSObject(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'UIFocusDebugger',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIFocusDebugger, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIFocusDebugger, '$private', {
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

module.exports = UIFocusDebugger;
