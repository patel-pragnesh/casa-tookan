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
 * WebKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/WebKit.framework/Headers/WKSnapshotConfiguration.h
 * @class
 */
function WKSnapshotConfiguration (pointer) {
	if (!(this instanceof WKSnapshotConfiguration)) {
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
			class: 'WKSnapshotConfiguration',
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
WKSnapshotConfiguration.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: WKSnapshotConfiguration,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(WKSnapshotConfiguration, NSObject);

Object.defineProperty(WKSnapshotConfiguration, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(WKSnapshotConfiguration, 'className', {
	value: 'WKSnapshotConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKSnapshotConfiguration.prototype, 'className', {
	value: 'WKSnapshotConfiguration',
	enumerable: false,
	writable: true
});

Object.defineProperty(WKSnapshotConfiguration.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(WKSnapshotConfiguration, 'toString', {
	value: function () {
		return '[class WKSnapshotConfiguration]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');

	$class = Hyperloop.createProxy({
		class: 'WKSnapshotConfiguration',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(WKSnapshotConfiguration, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(WKSnapshotConfiguration, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(WKSnapshotConfiguration.prototype, {
		rect: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGRect($dispatch(this.$native, 'rect'));
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

module.exports = WKSnapshotConfiguration;
