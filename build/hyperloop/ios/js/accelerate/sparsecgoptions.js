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
function SparseCGOptions (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseCGOptions)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseCGOptions=^?idd^?}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseCGOptions._imports = $imports;

	// properties
	Object.defineProperties(SparseCGOptions.prototype, {
	
		reportError: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_reportError) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reportError, 0]);
			},
			enumerable: false
		},
	
		maxIterations: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_maxIterations) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxIterations, 1]);
			},
			enumerable: false
		},
	
		atol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_atol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_atol, 2]);
			},
			enumerable: false
		},
	
		rtol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_rtol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rtol, 3]);
			},
			enumerable: false
		},
	
		reportStatus: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_reportStatus) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reportStatus, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseCGOptions;
