/**
 * HYPERLOOP GENERATED - DO NOT MODIFY
 *
 * This source code is Copyright (c) 2018 by Appcelerator, Inc.
 * All Rights Reserved.  This code contains patents and/or patents pending.
 */
var $dispatch = Hyperloop.dispatch,
	$init,
	$imports;

/**
 * Metal//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLTypes.h
 * @class
 */
function MTLRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MTLRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$origin = {};
	if (pointer) {
		this.$origin.f0 = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$origin.f1 = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$origin.f2 = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	this.$size = {};
	if (pointer) {
		this.$size.f0 = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$size.f1 = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$size.f2 = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MTLRegion={?=QQQ}{?=QQQ}}', 'Metal', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Metal.framework/Headers/MTLTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$origin, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$origin, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$origin, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$size, 'f0', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$size, 'f1', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$size, 'f2', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 5]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 5);
		},
	});
}

function $initialize () {
	$imports = {};


	MTLRegion._imports = $imports;

	// properties
	Object.defineProperties(MTLRegion.prototype, {
	
		origin: {
			get: function () {
				return this.$origin;
			},
		
			set: function (_origin) {
				this.$origin.f0 = _origin.f0;
				this.$origin.f1 = _origin.f1;
				this.$origin.f2 = _origin.f2;
			},
			enumerable: false
		},
	
		size: {
			get: function () {
				return this.$size;
			},
		
			set: function (_size) {
				this.$size.f0 = _size.f0;
				this.$size.f1 = _size.f1;
				this.$size.f2 = _size.f2;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MTLRegion;
