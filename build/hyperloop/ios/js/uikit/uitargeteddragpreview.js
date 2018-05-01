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
function UITargetedDragPreview (pointer) {
	if (!(this instanceof UITargetedDragPreview)) {
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
			class: 'UITargetedDragPreview',
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
UITargetedDragPreview.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UITargetedDragPreview,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UITargetedDragPreview, NSObject);

Object.defineProperty(UITargetedDragPreview, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UITargetedDragPreview, 'className', {
	value: 'UITargetedDragPreview',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITargetedDragPreview.prototype, 'className', {
	value: 'UITargetedDragPreview',
	enumerable: false,
	writable: true
});

Object.defineProperty(UITargetedDragPreview.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UITargetedDragPreview, 'toString', {
	value: function () {
		return '[class UITargetedDragPreview]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIDragPreviewParameters = require('/hyperloop/uikit/uidragpreviewparameters');
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');
	$imports.UIDragPreviewTarget = require('/hyperloop/uikit/uidragpreviewtarget');
	$imports.UIView = require('/hyperloop/uikit/uiview');

	$class = Hyperloop.createProxy({
		class: 'UITargetedDragPreview',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UITargetedDragPreview, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UITargetedDragPreview, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UITargetedDragPreview.prototype, 'init', {
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
	Object.defineProperties(UITargetedDragPreview.prototype, {
		parameters: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIDragPreviewParameters($dispatch(this.$native, 'parameters'));
			},
		
			enumerable: false
		},
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'size'));
			},
		
			enumerable: false
		},
		target: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.UIDragPreviewTarget($dispatch(this.$native, 'target'));
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

module.exports = UITargetedDragPreview;
