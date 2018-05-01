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
function SparseLSMROptions (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseLSMROptions)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseLSMROptions=^?diiddddi^?}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseLSMROptions._imports = $imports;

	// properties
	Object.defineProperties(SparseLSMROptions.prototype, {
	
		reportError: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_reportError) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reportError, 0]);
			},
			enumerable: false
		},
	
		lambda: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_lambda) {
				$dispatch(this.$native, 'setValue:atIndex:', [_lambda, 1]);
			},
			enumerable: false
		},
	
		nvec: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_nvec) {
				$dispatch(this.$native, 'setValue:atIndex:', [_nvec, 2]);
			},
			enumerable: false
		},
	
		convergenceTest: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_convergenceTest) {
				$dispatch(this.$native, 'setValue:atIndex:', [_convergenceTest, 3]);
			},
			enumerable: false
		},
	
		atol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_atol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_atol, 4]);
			},
			enumerable: false
		},
	
		rtol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_rtol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_rtol, 5]);
			},
			enumerable: false
		},
	
		btol: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_btol) {
				$dispatch(this.$native, 'setValue:atIndex:', [_btol, 6]);
			},
			enumerable: false
		},
	
		conditionLimit: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_conditionLimit) {
				$dispatch(this.$native, 'setValue:atIndex:', [_conditionLimit, 7]);
			},
			enumerable: false
		},
	
		maxIterations: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_maxIterations) {
				$dispatch(this.$native, 'setValue:atIndex:', [_maxIterations, 8]);
			},
			enumerable: false
		},
	
		reportStatus: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 9);
			},
		
			set: function (_reportStatus) {
				$dispatch(this.$native, 'setValue:atIndex:', [_reportStatus, 9]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseLSMROptions;
