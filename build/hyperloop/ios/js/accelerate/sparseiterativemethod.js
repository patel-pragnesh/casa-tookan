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
function SparseIterativeMethod (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof SparseIterativeMethod)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{SparseIterativeMethod=i(?={_SparseIterativeMethodBaseOptions=^?}{?=^?idd^?}{?=^?Ciidd^?}{?=^?diiddddi^?}[256c])}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/Sparse/Solve');
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


	SparseIterativeMethod._imports = $imports;

	// properties
	Object.defineProperties(SparseIterativeMethod.prototype, {
	
		method: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_method) {
				$dispatch(this.$native, 'setValue:atIndex:', [_method, 0]);
			},
			enumerable: false
		},
	
		options: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_options) {
				$dispatch(this.$native, 'setValue:atIndex:', [_options, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = SparseIterativeMethod;
