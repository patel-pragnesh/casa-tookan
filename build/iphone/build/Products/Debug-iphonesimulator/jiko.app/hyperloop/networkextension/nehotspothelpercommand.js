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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEHotspotHelper.h
 * @class
 */
function NEHotspotHelperCommand (pointer) {
	if (!(this instanceof NEHotspotHelperCommand)) {
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
			class: 'NEHotspotHelperCommand',
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
NEHotspotHelperCommand.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEHotspotHelperCommand,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEHotspotHelperCommand, NSObject);

Object.defineProperty(NEHotspotHelperCommand, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEHotspotHelperCommand, 'className', {
	value: 'NEHotspotHelperCommand',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEHotspotHelperCommand.prototype, 'className', {
	value: 'NEHotspotHelperCommand',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEHotspotHelperCommand.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEHotspotHelperCommand, 'toString', {
	value: function () {
		return '[class NEHotspotHelperCommand]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NEHotspotNetwork = require('/hyperloop/networkextension/nehotspotnetwork');

	$class = Hyperloop.createProxy({
		class: 'NEHotspotHelperCommand',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEHotspotHelperCommand, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEHotspotHelperCommand, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEHotspotHelperCommand.prototype, {
		network: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NEHotspotNetwork($dispatch(this.$native, 'network'));
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

module.exports = NEHotspotHelperCommand;
