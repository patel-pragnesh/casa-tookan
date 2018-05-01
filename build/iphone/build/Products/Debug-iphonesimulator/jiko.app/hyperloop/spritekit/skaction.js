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
 * SpriteKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SpriteKit.framework/Headers/SKAction.h
 * @class
 */
function SKAction (pointer) {
	if (!(this instanceof SKAction)) {
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
			class: 'SKAction',
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
SKAction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SKAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SKAction, NSObject);

Object.defineProperty(SKAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SKAction, 'className', {
	value: 'SKAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction.prototype, 'className', {
	value: 'SKAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SKAction, 'toString', {
	value: function () {
		return '[class SKAction]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(SKAction, 'group', {
	value: function (_actions) {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'group:', [_actions], false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction, 'hide', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'hide', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction, 'pause', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'pause', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction, 'sequence', {
	value: function (_actions) {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'sequence:', [_actions], false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction, 'stop', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'stop', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});

Object.defineProperty(SKAction, 'unhide', {
	value: function () {
		if (!$init) { $initialize(); }
			var result = $dispatch(this.$class, 'unhide', null, false);
			if (result === undefined || result === null) return result;
			result = new this(result);
		return result;
	},
	enumerable: false,
	writable: true
});


function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'SKAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SKAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SKAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SKAction.prototype, {
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

module.exports = SKAction;
