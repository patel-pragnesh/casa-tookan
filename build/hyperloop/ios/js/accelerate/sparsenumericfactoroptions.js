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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve.h
 * @class
 */
function SparseNumericFactorOptions (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseNumericFactorOptions)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseNumericFactorOptions=IC^vdd}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseNumericFactorOptions._imports = $imports;

	// properties
	Object.defineProperties(SparseNumericFactorOptions.prototype, {
	
		control: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_control) {
				$dispatch(this.$native, 'setValue:atIndex:', [_control, 0]);
			},
			enumerable: false
		},
	
		scalingMethod: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_scalingMethod) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scalingMethod, 1]);
			},
			enumerable: false
		},
	
		scaling: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_scaling) {
				$dispatch(this.$native, 'setValue:atIndex:', [_scaling, 2]);
			},
			enumerable: false
		},
	
		pivotTolerance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_pivotTolerance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_pivotTolerance, 3]);
			},
			enumerable: false
		},
	
		zeroTolerance: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_zeroTolerance) {
				$dispatch(this.$native, 'setValue:atIndex:', [_zeroTolerance, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseNumericFactorOptions;
