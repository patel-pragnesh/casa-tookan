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
 * MapKit//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MapKit.framework/Headers/MKMapSnapshotOptions.h
 * @class
 */
function MKMapSnapshotOptions (pointer) {
	if (!(this instanceof MKMapSnapshotOptions)) {
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
			class: 'MKMapSnapshotOptions',
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
MKMapSnapshotOptions.prototype = Object.create(NSObject.prototype, {
	constructor: {
		value: MKMapSnapshotOptions,
		enumerable: false,
		writable: true,
		configurable: true
	}
});
Object.setPrototypeOf(MKMapSnapshotOptions, NSObject);

Object.defineProperty(MKMapSnapshotOptions, '$class', {
	get: function () {
		if (!$init) { $initialize(); }
		return $class;
	},
	enumerable: false
});

Object.defineProperty(MKMapSnapshotOptions, 'className', {
	value: 'MKMapSnapshotOptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKMapSnapshotOptions.prototype, 'className', {
	value: 'MKMapSnapshotOptions',
	enumerable: false,
	writable: true
});

Object.defineProperty(MKMapSnapshotOptions.prototype, 'toString', {
	value: function () {
		return Hyperloop.stringValue(this.$native);
	},
	enumerable: false,
	writable: true
});


Object.defineProperty(MKMapSnapshotOptions, 'toString', {
	value: function () {
		return '[class MKMapSnapshotOptions]';
	},
	enumerable: false,
	writable: true
});



function $initialize () {
	$imports = {};
	$imports.CGSize = require('/hyperloop/coregraphics/cgsize');

	$class = Hyperloop.createProxy({
		class: 'MKMapSnapshotOptions',
		alloc: false,
		init: 'class'
	});
	Object.defineProperty(MKMapSnapshotOptions, '$imports', {
		value: $imports,
		writable: true,
		enumerable: false,
		configurable: false
	});
	Object.defineProperty(MKMapSnapshotOptions, '$private', {
		value: {},
		writable: true,
		enumerable: false,
		configurable: false
	});


	// instance properties
	Object.defineProperties(MKMapSnapshotOptions.prototype, {
		scale: {
			get: function () {
				if (!$init) { $initialize(); }
				return $dispatch(this.$native, 'scale');
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

module.exports = MKMapSnapshotOptions;
