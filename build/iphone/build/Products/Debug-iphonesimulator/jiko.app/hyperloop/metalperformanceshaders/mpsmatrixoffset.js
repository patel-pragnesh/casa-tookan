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
 * MetalPerformanceShaders//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixTypes.h
 * @class
 */
function MPSMatrixOffset (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof MPSMatrixOffset)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{MPSMatrixOffset=II}', 'MetalPerformanceShaders', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Headers/MPSMatrixTypes');
	}
	Object.defineProperty(this, '$native', {
		value: pointer,
		writable: false,
		enumerable: true, 
		configurable: false
	});
	Hyperloop.registerWrapper(this);
	
}

function $initialize () {
	$imports = {};


	MPSMatrixOffset._imports = $imports;

	// properties
	Object.defineProperties(MPSMatrixOffset.prototype, {
	
		rowOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_rowOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rowOffset, 0]);
			},
			enumerable: false
		},
	
		columnOffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_columnOffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_columnOffset, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = MPSMatrixOffset;
