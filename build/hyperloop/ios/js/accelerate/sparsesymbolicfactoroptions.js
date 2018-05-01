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
function SparseSymbolicFactorOptions (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseSymbolicFactorOptions)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseSymbolicFactorOptions=IC^i^i^?^?^?}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseSymbolicFactorOptions._imports = $imports;

	// properties
	Object.defineProperties(SparseSymbolicFactorOptions.prototype, {
	
		control: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_control) {
				$dispatch(this.$native, 'setValue:atIndex:', [_control, 0]);
			},
			enumerable: false
		},
	
		orderMethod: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_orderMethod) {
				$dispatch(this.$native, 'setValue:atIndex:', [_orderMethod, 1]);
			},
			enumerable: false
		},
	
		order: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_order) {
				$dispatch(this.$native, 'setValue:atIndex:', [_order, 2]);
			},
			enumerable: false
		},
	
		ignoreRowsAndColumns: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_ignoreRowsAndColumns) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ignoreRowsAndColumns, 3]);
			},
			enumerable: false
		},
	
		malloc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_malloc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_malloc, 4]);
			},
			enumerable: false
		},
	
		free: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_free) {
				$dispatch(this.$native, 'setValue:atIndex:', [_free, 5]);
			},
			enumerable: false
		},
	
		reportError: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_reportError) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reportError, 6]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseSymbolicFactorOptions;
