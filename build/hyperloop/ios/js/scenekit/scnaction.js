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
 * SceneKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/SceneKit.framework/Headers/SCNAction.h
 * @class
 */
function SCNAction (pointer) {
	if (!(this instanceof SCNAction)) {
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
			class: 'SCNAction',
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
SCNAction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: SCNAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(SCNAction, NSObject);

Object.defineProperty(SCNAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(SCNAction, 'className', {
	value: 'SCNAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNAction.prototype, 'className', {
	value: 'SCNAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(SCNAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(SCNAction, 'toString', {
	value: function () {
		return '[class SCNAction]';
	},
	enumerable: false,
	writable: true
});


// class methods

Object.defineProperty(SCNAction, 'group', {
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

Object.defineProperty(SCNAction, 'hide', {
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

Object.defineProperty(SCNAction, 'sequence', {
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

Object.defineProperty(SCNAction, 'unhide', {
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
		class: 'SCNAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(SCNAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(SCNAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(SCNAction.prototype, {
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

module.exports = SCNAction;
