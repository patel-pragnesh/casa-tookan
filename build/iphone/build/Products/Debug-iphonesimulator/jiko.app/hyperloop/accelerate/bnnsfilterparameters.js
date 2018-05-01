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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns.h
 * @class
 */
function BNNSFilterParameters (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BNNSFilterParameters)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BNNSFilterParameters=IQ^?^?}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns');
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


	BNNSFilterParameters._imports = $imports;

	// properties
	Object.defineProperties(BNNSFilterParameters.prototype, {
	
		flags: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_flags) {
				$dispatch(this.$native, 'setValue:atIndex:', [_flags, 0]);
			},
			enumerable: false
		},
	
		n_threads: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_n_threads) {
				$dispatch(this.$native, 'setValue:atIndex:', [_n_threads, 1]);
			},
			enumerable: false
		},
	
		alloc_memory: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_alloc_memory) {
				$dispatch(this.$native, 'setValue:atIndex:', [_alloc_memory, 2]);
			},
			enumerable: false
		},
	
		free_memory: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_free_memory) {
				$dispatch(this.$native, 'setValue:atIndex:', [_free_memory, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BNNSFilterParameters;
