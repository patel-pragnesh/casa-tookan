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
 * MultipeerConnectivity//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MultipeerConnectivity.framework/Headers/MCNearbyServiceBrowser.h
 * @class
 */
function MCNearbyServiceBrowser (pointer) {
	if (!(this instanceof MCNearbyServiceBrowser)) {
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
			class: 'MCNearbyServiceBrowser',
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
MCNearbyServiceBrowser.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MCNearbyServiceBrowser,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MCNearbyServiceBrowser, NSObject);

Object.defineProperty(MCNearbyServiceBrowser, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MCNearbyServiceBrowser, 'className', {
	value: 'MCNearbyServiceBrowser',
	enumerable: false,
	writable: true
});

Object.defineProperty(MCNearbyServiceBrowser.prototype, 'className', {
	value: 'MCNearbyServiceBrowser',
	enumerable: false,
	writable: true
});

Object.defineProperty(MCNearbyServiceBrowser.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MCNearbyServiceBrowser, 'toString', {
	value: function () {
		return '[class MCNearbyServiceBrowser]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'MCNearbyServiceBrowser',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MCNearbyServiceBrowser, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MCNearbyServiceBrowser, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MCNearbyServiceBrowser.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = MCNearbyServiceBrowser;
