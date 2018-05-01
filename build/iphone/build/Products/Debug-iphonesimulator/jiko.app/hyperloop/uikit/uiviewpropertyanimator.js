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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIViewPropertyAnimator.h
 * @class
 */
function UIViewPropertyAnimator (pointer) {
	if (!(this instanceof UIViewPropertyAnimator)) {
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
			class: 'UIViewPropertyAnimator',
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
UIViewPropertyAnimator.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIViewPropertyAnimator,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIViewPropertyAnimator, NSObject);

Object.defineProperty(UIViewPropertyAnimator, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIViewPropertyAnimator, 'className', {
	value: 'UIViewPropertyAnimator',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIViewPropertyAnimator.prototype, 'className', {
	value: 'UIViewPropertyAnimator',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIViewPropertyAnimator.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIViewPropertyAnimator, 'toString', {
	value: function () {
		return '[class UIViewPropertyAnimator]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIViewPropertyAnimator',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIViewPropertyAnimator, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIViewPropertyAnimator, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIViewPropertyAnimator.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIViewPropertyAnimator.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIViewPropertyAnimator.prototype, 'self', {
		value: function () {
			var result = $dispatch(this.$native, 'self', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIViewPropertyAnimator.prototype, {
		delay: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'delay');
			},
		
			enumerable: false
		},
		duration: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'duration');
			},
		
			enumerable: false
		},
		hash: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'hash');
			},
		
			enumerable: false
		},
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'state');
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

module.exports = UIViewPropertyAnimator;
