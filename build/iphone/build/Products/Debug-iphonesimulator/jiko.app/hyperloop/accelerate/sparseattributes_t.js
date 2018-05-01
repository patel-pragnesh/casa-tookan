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
function SparseAttributes_t (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseAttributes_t)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseAttributes_t=BCIIB}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseAttributes_t._imports = $imports;

	// properties
	Object.defineProperties(SparseAttributes_t.prototype, {
	
		transpose: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_transpose) {
				$dispatch(this.$native, 'setValue:atIndex:', [_transpose, 0]);
			},
			enumerable: false
		},
	
		triangle: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_triangle) {
				$dispatch(this.$native, 'setValue:atIndex:', [_triangle, 1]);
			},
			enumerable: false
		},
	
		kind: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_kind) {
				$dispatch(this.$native, 'setValue:atIndex:', [_kind, 2]);
			},
			enumerable: false
		},
	
		_reserved: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (__reserved) {
				$dispatch(this.$native, 'setValue:atIndex:', [__reserved, 3]);
			},
			enumerable: false
		},
	
		_allocatedBySparse: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (__allocatedBySparse) {
				$dispatch(this.$native, 'setValue:atIndex:', [__allocatedBySparse, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseAttributes_t;
