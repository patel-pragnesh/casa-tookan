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
 * QuartzCore//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/QuartzCore.framework/Headers/CAEmitterCell.h
 * @class
 */
function CAEmitterCell (pointer) {
	if (!(this instanceof CAEmitterCell)) {
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
			class: 'CAEmitterCell',
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
CAEmitterCell.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: CAEmitterCell,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(CAEmitterCell, NSObject);

Object.defineProperty(CAEmitterCell, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(CAEmitterCell, 'className', {
	value: 'CAEmitterCell',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAEmitterCell.prototype, 'className', {
	value: 'CAEmitterCell',
	enumerable: false,
	writable: true
});

Object.defineProperty(CAEmitterCell.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(CAEmitterCell, 'toString', {
	value: function () {
		return '[class CAEmitterCell]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.NSDictionary = require('/hyperloop/foundation/nsdictionary');

	$class = Hyperloop.createProxy({
		class: 'CAEmitterCell',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(CAEmitterCell, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(CAEmitterCell, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(CAEmitterCell.prototype, {
		color: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'color');
			},
		
			set: function (_color) {
				if (!$init) { $initialize(); }
				this.$private.color = _color;
				$dispatch(this.$native, 'setColor:', _color);
			},
			enumerable: false
		},
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
			},
		
			set: function (_duration) {
				if (!$init) { $initialize(); }
				this.$private.duration = _duration;
				$dispatch(this.$native, 'setDuration:', _duration);
			},
			enumerable: false
		},
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
		scale: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'scale');
			},
		
			enumerable: false
		},
		speed: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'speed');
			},
		
			set: function (_speed) {
				if (!$init) { $initialize(); }
				this.$private.speed = _speed;
				$dispatch(this.$native, 'setSpeed:', _speed);
			},
			enumerable: false
		},
		style: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSDictionary($dispatch(this.$native, 'style'));
			},
		
			set: function (_style) {
				if (!$init) { $initialize(); }
				this.$private.style = _style;
				$dispatch(this.$native, 'setStyle:', _style);
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

module.exports = CAEmitterCell;
