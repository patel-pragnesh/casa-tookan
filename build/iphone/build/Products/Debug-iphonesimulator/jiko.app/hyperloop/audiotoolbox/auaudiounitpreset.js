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
function AUAudioUnitPreset (pointer) {
	if (!(this instanceof AUAudioUnitPreset)) {
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
			class: 'AUAudioUnitPreset',
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
AUAudioUnitPreset.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: AUAudioUnitPreset,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(AUAudioUnitPreset, NSObject);

Object.defineProperty(AUAudioUnitPreset, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(AUAudioUnitPreset, 'className', {
	value: 'AUAudioUnitPreset',
	enumerable: false,
	writable: true
});

Object.defineProperty(AUAudioUnitPreset.prototype, 'className', {
	value: 'AUAudioUnitPreset',
	enumerable: false,
	writable: true
});

Object.defineProperty(AUAudioUnitPreset.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(AUAudioUnitPreset, 'toString', {
	value: function () {
		return '[class AUAudioUnitPreset]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'AUAudioUnitPreset',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(AUAudioUnitPreset, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(AUAudioUnitPreset, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(AUAudioUnitPreset.prototype, {
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
		},
		number: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'number');
			},
		
			set: function (_number) {
				if (!$init) { $initialize(); }
				this.$private.number = _number;
				$dispatch(this.$native, 'setNumber:', _number);
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

module.exports = AUAudioUnitPreset;
