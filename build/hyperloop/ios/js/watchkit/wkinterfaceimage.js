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
 * WatchKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WatchKit.framework/Headers/WKInterfaceImage.h
 * @class
 */
function WKInterfaceImage (pointer) {
	if (!(this instanceof WKInterfaceImage)) {
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
			class: 'WKInterfaceImage',
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
WKInterfaceImage.prototype = Object.create(WKInterfaceObject.prototype, {
	constructor: {
		value: WKInterfaceImage,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKInterfaceImage, WKInterfaceObject);

Object.defineProperty(WKInterfaceImage, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKInterfaceImage, 'className', {
	value: 'WKInterfaceImage',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceImage.prototype, 'className', {
	value: 'WKInterfaceImage',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKInterfaceImage.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKInterfaceImage, 'toString', {
	value: function () {
		return '[class WKInterfaceImage]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'WKInterfaceImage',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKInterfaceImage, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKInterfaceImage, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(WKInterfaceImage.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKInterfaceImage.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(WKInterfaceImage.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(WKInterfaceImage.prototype, {
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
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

module.exports = WKInterfaceImage;
