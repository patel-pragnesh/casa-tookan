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
 * GameKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameKit.framework/Headers/GKScore.h
 * @class
 */
function GKScore (pointer) {
	if (!(this instanceof GKScore)) {
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
			class: 'GKScore',
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
GKScore.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: GKScore,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKScore, NSObject);

Object.defineProperty(GKScore, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKScore, 'className', {
	value: 'GKScore',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKScore.prototype, 'className', {
	value: 'GKScore',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKScore.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKScore, 'toString', {
	value: function () {
		return '[class GKScore]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'GKScore',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKScore, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKScore, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(GKScore.prototype, 'setValue', {
		value: function (_value) {
			this.$private.setValue = this.$private.setValue || [];
			this.$private.setValue.push(_value);
			var result = $dispatch(this.$native, 'setValue:', [_value], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(GKScore.prototype, {
		category: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'category'));
			},
		
			enumerable: false
		},
		context: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'context');
			},
		
			set: function (_context) {
				if (!$init) { $initialize(); }
				this.$private.context = _context;
				$dispatch(this.$native, 'setContext:', _context);
			},
			enumerable: false
		},
		value: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'value');
			},
		
			set: function (_value) {
				if (!$init) { $initialize(); }
				this.$private.value = _value;
				$dispatch(this.$native, 'setValue:', _value);
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

module.exports = GKScore;
