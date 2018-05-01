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
 * UIKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/UIKit.framework/Headers/UICollectionViewLayout.h
 * @class
 */
function UICollectionViewLayoutAttributes (pointer) {
	if (!(this instanceof UICollectionViewLayoutAttributes)) {
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
			class: 'UICollectionViewLayoutAttributes',
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
UICollectionViewLayoutAttributes.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: UICollectionViewLayoutAttributes,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(UICollectionViewLayoutAttributes, NSObject);

Object.defineProperty(UICollectionViewLayoutAttributes, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(UICollectionViewLayoutAttributes, 'className', {
	value: 'UICollectionViewLayoutAttributes',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewLayoutAttributes.prototype, 'className', {
	value: 'UICollectionViewLayoutAttributes',
	enumerable: false,
	writable: true
});

Object.defineProperty(UICollectionViewLayoutAttributes.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(UICollectionViewLayoutAttributes, 'toString', {
	value: function () {
		return '[class UICollectionViewLayoutAttributes]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGRect = require('/hyperloop/coregraphics/cgrect');
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');
	$imports.CGAffineTransform = require('/hyperloop/coregraphics/cgaffinetransform');

	$class = Hyperloop.createProxy({
		class: 'UICollectionViewLayoutAttributes',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(UICollectionViewLayoutAttributes, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(UICollectionViewLayoutAttributes, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});

	// instance methods

	Object.defineProperty(UICollectionViewLayoutAttributes.prototype, 'isEqual', {
		value: function (_object) {
			this.$private.isEqual = this.$private.isEqual || [];
			this.$private.isEqual.push(_object);
			var result = $dispatch(this.$native, 'isEqual:', [_object], true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UICollectionViewLayoutAttributes.prototype, 'release', {
		value: function () {
			var result = $dispatch(this.$native, 'release', null, true);
			return result;
		},
		enumerable: false,
		writable: true
	});

	Object.defineProperty(UICollectionViewLayoutAttributes.prototype, 'self', {
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
	Object.defineProperties(UICollectionViewLayoutAttributes.prototype, {
		frame: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGRect($dispatch(this.$native, 'frame'));
			},
		
			set: function (_frame) {
				if (!$init) { $initialize(); }
				this.$private.frame = _frame;
				$dispatch(this.$native, 'setFrame:', _frame);
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
		size: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGSize($dispatch(this.$native, 'size'));
			},
		
			set: function (_size) {
				if (!$init) { $initialize(); }
				this.$private.size = _size;
				$dispatch(this.$native, 'setSize:', _size);
			},
			enumerable: false
		},
		transform: {
			get: function () {
				if (!$init) { $initialize(); }
				return new $imports.CGAffineTransform($dispatch(this.$native, 'transform'));
			},
		
			set: function (_transform) {
				if (!$init) { $initialize(); }
				this.$private.transform = _transform;
				$dispatch(this.$native, 'setTransform:', _transform);
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

module.exports = UICollectionViewLayoutAttributes;
