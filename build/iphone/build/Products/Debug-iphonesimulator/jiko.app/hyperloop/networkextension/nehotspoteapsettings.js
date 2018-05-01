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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEHotspotConfigurationManager.h
 * @class
 */
function NEHotspotEAPSettings (pointer) {
	if (!(this instanceof NEHotspotEAPSettings)) {
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
			class: 'NEHotspotEAPSettings',
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
NEHotspotEAPSettings.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEHotspotEAPSettings,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEHotspotEAPSettings, NSObject);

Object.defineProperty(NEHotspotEAPSettings, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEHotspotEAPSettings, 'className', {
	value: 'NEHotspotEAPSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEHotspotEAPSettings.prototype, 'className', {
	value: 'NEHotspotEAPSettings',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEHotspotEAPSettings.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEHotspotEAPSettings, 'toString', {
	value: function () {
		return '[class NEHotspotEAPSettings]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'NEHotspotEAPSettings',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEHotspotEAPSettings, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEHotspotEAPSettings, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEHotspotEAPSettings.prototype, {
		password: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'password'));
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

module.exports = NEHotspotEAPSettings;
