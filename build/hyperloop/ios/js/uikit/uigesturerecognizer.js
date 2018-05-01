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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIGestureRecognizer.h
 * @class
 */
function UIGestureRecognizer (pointer) {
	if (!(this instanceof UIGestureRecognizer)) {
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
			class: 'UIGestureRecognizer',
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
UIGestureRecognizer.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIGestureRecognizer,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIGestureRecognizer, NSObject);

Object.defineProperty(UIGestureRecognizer, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIGestureRecognizer, 'className', {
	value: 'UIGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGestureRecognizer.prototype, 'className', {
	value: 'UIGestureRecognizer',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIGestureRecognizer.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIGestureRecognizer, 'toString', {
	value: function () {
		return '[class UIGestureRecognizer]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.NSString = require('/hyperloop/foundation/nsstring');
	$imports.UIView = require('/hyperloop/uikit/uiview');

	$class = Hyperloop.createProxy({
		class: 'UIGestureRecognizer',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIGestureRecognizer, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIGestureRecognizer, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIGestureRecognizer.prototype, {
		delegate: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'delegate'));
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
		state: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'state');
			},
		
			enumerable: false
		},
		view: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIView($dispatch(this.$native, 'view'));
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

module.exports = UIGestureRecognizer;
