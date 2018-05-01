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


var UIView = require('/hyperloop/uikit/uiview');


/**
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKAnnotationView.h
 * @class
 */
function MKAnnotationView (pointer) {
	if (!(this instanceof MKAnnotationView)) {
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
			class: 'MKAnnotationView',
			alloc: true,
			init: 'init'
		});
	}
	UIView.call(this, pointer);
	Object.defineProperty(this, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});
}
// superclass
MKAnnotationView.prototype = Object.create(UIView.prototype, {
	constructor: {
		value: MKAnnotationView,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKAnnotationView, UIView);

Object.defineProperty(MKAnnotationView, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKAnnotationView, 'className', {
	value: 'MKAnnotationView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKAnnotationView.prototype, 'className', {
	value: 'MKAnnotationView',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKAnnotationView.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKAnnotationView, 'toString', {
	value: function () {
		return '[class MKAnnotationView]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.UIImage = require('/hyperloop/uikit/uiimage');

	$class = Hyperloop.createProxy({
		class: 'MKAnnotationView',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKAnnotationView, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKAnnotationView, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKAnnotationView.prototype, {
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
		image: {
		
		
			set: function (_image) {
				if (!$init) { $initialize(); }
				this.$private.image = _image;
				$dispatch(this.$native, 'setImage:', _image);
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

module.exports = MKAnnotationView;
