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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSCoreTypes.h
 * @class
 */
function MPSRegion (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSRegion)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	this.$origin = {};
	if (pointer) {
		this.$origin.x = $dispatch(pointer, 'valueAtIndex:', 0);
	}
	if (pointer) {
		this.$origin.y = $dispatch(pointer, 'valueAtIndex:', 1);
	}
	if (pointer) {
		this.$origin.z = $dispatch(pointer, 'valueAtIndex:', 2);
	}
	this.$size = {};
	if (pointer) {
		this.$size.width = $dispatch(pointer, 'valueAtIndex:', 3);
	}
	if (pointer) {
		this.$size.height = $dispatch(pointer, 'valueAtIndex:', 4);
	}
	if (pointer) {
		this.$size.depth = $dispatch(pointer, 'valueAtIndex:', 5);
	}
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSRegion={MPSOrigin=ddd}{MPSSize=ddd}}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Headers/MPSCoreTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	Object.defineProperty(this.$origin, 'x', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 0]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 0);
		},
	});
	Object.defineProperty(this.$origin, 'y', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 1]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 1);
		},
	});
	Object.defineProperty(this.$origin, 'z', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 2]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 2);
		},
	});
	Object.defineProperty(this.$size, 'width', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 3]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 3);
		},
	});
	Object.defineProperty(this.$size, 'height', {
		set: function (_value) {
			$dispatch(pointer, 'setValue:atIndex:',[_value, 4]);
		},
		get: function () {
			return $dispatch(pointer, 'valueAtIndex:', 4);
		},
	});
	Object.defineProperty(this.$size, 'depth', {
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
	$imports.MPSOrigin = require('/hyperloop/metalperformanceshaders/mpsorigin');
	$imports.MPSSize = require('/hyperloop/metalperformanceshaders/mpssize');

	MPSRegion._imports = $imports;

	// properties
	Object.defineProperties(MPSRegion.prototype, {
	
		origin: {
			get: function () {
				return this.$origin;
			},
		
			set: function (_origin) {
				this.$origin.x = _origin.x;
				this.$origin.y = _origin.y;
				this.$origin.z = _origin.z;
			},
			enumerable: false
		},
	
		size: {
			get: function () {
				return this.$size;
			},
		
			set: function (_size) {
				this.$size.width = _size.width;
				this.$size.height = _size.height;
				this.$size.depth = _size.depth;
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSRegion;
