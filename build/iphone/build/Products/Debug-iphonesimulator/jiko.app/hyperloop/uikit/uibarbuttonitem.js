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


var UIBarItem = require('/hyperloop/uikit/uibaritem');


/**
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UIBarButtonItem.h
 * @class
 */
function UIBarButtonItem (pointer) {
	if (!(this instanceof UIBarButtonItem)) {
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
			class: 'UIBarButtonItem',
			alloc: true,
			init: 'init'
		});
	}
	UIBarItem.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
UIBarButtonItem.prototype = Object.create(UIBarItem.prototype, {
	constructor: {
		value: UIBarButtonItem,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UIBarButtonItem, UIBarItem);

Object.defineProperty(UIBarButtonItem, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UIBarButtonItem, 'className', {
	value: 'UIBarButtonItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIBarButtonItem.prototype, 'className', {
	value: 'UIBarButtonItem',
	enumerable: false,
	writable: true
});

Object.defineProperty(UIBarButtonItem.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UIBarButtonItem, 'toString', {
	value: function () {
		return '[class UIBarButtonItem]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.NSObject = require('/hyperloop/foundation/nsobject');
	$imports.UIColor = require('/hyperloop/uikit/uicolor');

	$class = Hyperloop.createProxy({
		class: 'UIBarButtonItem',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UIBarButtonItem, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UIBarButtonItem, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UIBarButtonItem.prototype, 'init', {
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

	Object.defineProperty(UIBarButtonItem.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIBarButtonItem.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UIBarButtonItem.prototype, 'self', {
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
	Object.defineProperties(UIBarButtonItem.prototype, {
		action: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'action');
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
		style: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'style');
			},
		
			set: function (_style) {
				if (!$init) { $initialize(); }
				this.$private.style = _style;
				$dispatch(this.$native, 'setStyle:', _style);
			},
			enumerable: false
		},
		target: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.NSObject($dispatch(this.$native, 'target'));
			},
		
			enumerable: false
		},
		tintColor: {
		
		
			set: function (_tintColor) {
				if (!$init) { $initialize(); }
				this.$private.tintColor = _tintColor;
				$dispatch(this.$native, 'setTintColor:', _tintColor);
			},
			enumerable: false
		},
		width: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'width');
			},
		
			set: function (_width) {
				if (!$init) { $initialize(); }
				this.$private.width = _width;
				$dispatch(this.$native, 'setWidth:', _width);
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

module.exports = UIBarButtonItem;
