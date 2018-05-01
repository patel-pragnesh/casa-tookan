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


var UIDynamicBehavior = require('/hyperloop/uikit/uidynamicbehavior');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIAttachmentBehavior.h
 * @class
 */
function UIAttachmentBehavior (pointer) {
	if (!(this instanceof UIAttachmentBehavior)) {
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
			class: 'UIAttachmentBehavior',
			alloc: true,
			init: 'init'
		});
	}
	UIDynamicBehavior.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIAttachmentBehavior.prototype = Object.create(UIDynamicBehavior.prototype, {
	constructor: {
		value: UIAttachmentBehavior,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIAttachmentBehavior, UIDynamicBehavior);

Object.defineProperty(UIAttachmentBehavior, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIAttachmentBehavior, 'className', {
	value: 'UIAttachmentBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIAttachmentBehavior.prototype, 'className', {
	value: 'UIAttachmentBehavior',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIAttachmentBehavior.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIAttachmentBehavior, 'toString', {
	value: function () {
		return '[class UIAttachmentBehavior]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};


	$class = Hyperloop.createProxy({
		class: 'UIAttachmentBehavior',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIAttachmentBehavior, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIAttachmentBehavior, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIAttachmentBehavior.prototype, 'setLength', {
		value: function (_length) {
			this.$private.setLength = this.$private.setLength || [];
			this.$private.setLength.push(_length);
			var result = $dispatch(this.$native, 'setLength:', [_length], true);
			return result;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIAttachmentBehavior.prototype, {
		length: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'length');
			},
		
			set: function (_length) {
				if (!$init) { $initialize(); }
				this.$private.length = _length;
				$dispatch(this.$native, 'setLength:', _length);
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

module.exports = UIAttachmentBehavior;
