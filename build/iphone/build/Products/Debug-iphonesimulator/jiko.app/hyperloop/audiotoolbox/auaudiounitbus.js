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
 * AudioToolbox//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/AudioToolbox.framework/Headers/AUAudioUnit.h
 * @class
 */
function AUAudioUnitBus (pointer) {
	if (!(this instanceof AUAudioUnitBus)) {
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
			class: 'AUAudioUnitBus',
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
AUAudioUnitBus.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AUAudioUnitBus,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AUAudioUnitBus, NSObject);

Object.defineProperty(AUAudioUnitBus, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AUAudioUnitBus, 'className', {
	value: 'AUAudioUnitBus',
	enumerable: false,
	writable: true
});

Object.defineProperty(AUAudioUnitBus.prototype, 'className', {
	value: 'AUAudioUnitBus',
	enumerable: false,
	writable: true
});

Object.defineProperty(AUAudioUnitBus.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AUAudioUnitBus, 'toString', {
	value: function () {
		return '[class AUAudioUnitBus]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.AVAudioFormat = require('/hyperloop/avfoundation/avaudioformat');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AUAudioUnitBus',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AUAudioUnitBus, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AUAudioUnitBus, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AUAudioUnitBus.prototype, {
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
		format: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.AVAudioFormat($dispatch(this.$native, 'format'));
			},
		
			enumerable: false
		},
		index: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'index');
			},
		
			enumerable: false
		},
		name: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'name'));
			},
		
			set: function (_name) {
				if (!$init) { $initialize(); }
				this.$private.name = _name;
				$dispatch(this.$native, 'setName:', _name);
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

module.exports = AUAudioUnitBus;
