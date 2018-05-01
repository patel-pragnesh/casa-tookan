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
 * NetworkExtension//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/NetworkExtension.framework/Headers/NEVPNManager.h
 * @class
 */
function NEVPNManager (pointer) {
	if (!(this instanceof NEVPNManager)) {
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
			class: 'NEVPNManager',
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
NEVPNManager.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: NEVPNManager,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(NEVPNManager, NSObject);

Object.defineProperty(NEVPNManager, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(NEVPNManager, 'className', {
	value: 'NEVPNManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNManager.prototype, 'className', {
	value: 'NEVPNManager',
	enumerable: false,
	writable: true
});

Object.defineProperty(NEVPNManager.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(NEVPNManager, 'toString', {
	value: function () {
		return '[class NEVPNManager]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NEVPNProtocol = require('/hyperloop/networkextension/nevpnprotocol');

	$class = Hyperloop.createProxy({
		class: 'NEVPNManager',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(NEVPNManager, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(NEVPNManager, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(NEVPNManager.prototype, {
		enabled: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'enabled');
			},
		
			set: function (_enabled) {
				if (!$init) { $initialize(); }
				this.$private.enabled = _enabled;
				$dispatch(this.$native, 'setEnabled:', _enabled);
			},
			enumerable: false
		},
		protocol: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NEVPNProtocol($dispatch(this.$native, 'protocol'));
			},
		
			set: function (_protocol) {
				if (!$init) { $initialize(); }
				this.$private.protocol = _protocol;
				$dispatch(this.$native, 'setProtocol:', _protocol);
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

module.exports = NEVPNManager;
