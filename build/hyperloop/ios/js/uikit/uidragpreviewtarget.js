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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UITargetedDragPreview.h
 * @class
 */
function UIDragPreviewTarget (pointer) {
	if (!(this instanceof UIDragPreviewTarget)) {
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
			class: 'UIDragPreviewTarget',
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
UIDragPreviewTarget.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIDragPreviewTarget,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIDragPreviewTarget, NSObject);

Object.defineProperty(UIDragPreviewTarget, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIDragPreviewTarget, 'className', {
	value: 'UIDragPreviewTarget',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDragPreviewTarget.prototype, 'className', {
	value: 'UIDragPreviewTarget',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIDragPreviewTarget.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIDragPreviewTarget, 'toString', {
	value: function () {
		return '[class UIDragPreviewTarget]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGAffineTransform = require('/hyperloop/coregraphics/cgaffinetransform');

	$class = Hyperloop.createProxy({
		class: 'UIDragPreviewTarget',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIDragPreviewTarget, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIDragPreviewTarget, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIDragPreviewTarget.prototype, 'init', {
		value: function () {
			var result = $dispatch(this.$native, 'init', null, true);
			if (result === undefined || result === null) return result;
			result = new this.constructor(result);
			var instance = result;
			return instance;
		},
		enumerable: false,
		writable: true
	});


	// instance properties
	Object.defineProperties(UIDragPreviewTarget.prototype, {
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGAffineTransform($dispatch(this.$native, 'transform'));
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

module.exports = UIDragPreviewTarget;
