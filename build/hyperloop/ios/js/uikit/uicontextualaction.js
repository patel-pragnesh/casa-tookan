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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIContextualAction.h
 * @class
 */
function UIContextualAction (pointer) {
	if (!(this instanceof UIContextualAction)) {
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
			class: 'UIContextualAction',
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
UIContextualAction.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UIContextualAction,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIContextualAction, NSObject);

Object.defineProperty(UIContextualAction, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIContextualAction, 'className', {
	value: 'UIContextualAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIContextualAction.prototype, 'className', {
	value: 'UIContextualAction',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIContextualAction.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIContextualAction, 'toString', {
	value: function () {
		return '[class UIContextualAction]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIColor = require('/hyperloop/uikit/uicolor');
	$imports.UIImage = require('/hyperloop/uikit/uiimage');
	$imports.NSString = require('/hyperloop/foundation/nsstring');

	$class = Hyperloop.createProxy({
		class: 'UIContextualAction',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIContextualAction, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIContextualAction, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(UIContextualAction.prototype, {
		backgroundColor: {
		
		
			set: function (_backgroundColor) {
				if (!$init) { $initialize(); }
				this.$private.backgroundColor = _backgroundColor;
				$dispatch(this.$native, 'setBackgroundColor:', _backgroundColor);
			},
			enumerable: false
		},
		handler: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'handler');
			},
		
			enumerable: false
		},
		image: {
		
		
			set: function (_image) {
				if (!$init) { $initialize(); }
				this.$private.image = _image;
				$dispatch(this.$native, 'setImage:', _image);
			},
			enumerable: false
		},
		style: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'style');
			},
		
			enumerable: false
		},
		title: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSString($dispatch(this.$native, 'title'));
			},
		
			set: function (_title) {
				if (!$init) { $initialize(); }
				this.$private.title = _title;
				$dispatch(this.$native, 'setTitle:', _title);
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

module.exports = UIContextualAction;