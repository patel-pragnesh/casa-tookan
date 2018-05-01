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


var GKComponent = require('/hyperloop/gameplaykit/gkcomponent');


/**
 * GameplayKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/GameplayKit.framework/Headers/GKAgent.h
 * @class
 */
function GKAgent (pointer) {
	if (!(this instanceof GKAgent)) {
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
			class: 'GKAgent',
			alloc: true,
			init: 'init'
		});
	}
	GKComponent.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
GKAgent.prototype = Object.create(GKComponent.prototype, {
	constructor: {
		value: GKAgent,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(GKAgent, GKComponent);

Object.defineProperty(GKAgent, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(GKAgent, 'className', {
	value: 'GKAgent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKAgent.prototype, 'className', {
	value: 'GKAgent',
	enumerable: false,
	writable: true
});

Object.defineProperty(GKAgent.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(GKAgent, 'toString', {
	value: function () {
		return '[class GKAgent]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');

	$class = Hyperloop.createProxy({
		class: 'GKAgent',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(GKAgent, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(GKAgent, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(GKAgent.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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

module.exports = GKAgent;
