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
function BNNSActivation (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BNNSActivation)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BNNSActivation=iffiiir^ir^ir^i}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns');
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


	BNNSActivation._imports = $imports;

	// properties
	Object.defineProperties(BNNSActivation.prototype, {
	
		function: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_function) {
				$dispatch(this.$native, 'setValue:atIndex:', [_function, 0]);
			},
			enumerable: false
		},
	
		alpha: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_alpha) {
				$dispatch(this.$native, 'setValue:atIndex:', [_alpha, 1]);
			},
			enumerable: false
		},
	
		beta: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_beta) {
				$dispatch(this.$native, 'setValue:atIndex:', [_beta, 2]);
			},
			enumerable: false
		},
	
		iscale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_iscale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_iscale, 3]);
			},
			enumerable: false
		},
	
		ioffset: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_ioffset) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ioffset, 4]);
			},
			enumerable: false
		},
	
		ishift: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_ishift) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ishift, 5]);
			},
			enumerable: false
		},
	
		iscale_per_channel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_iscale_per_channel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_iscale_per_channel, 6]);
			},
			enumerable: false
		},
	
		ioffset_per_channel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_ioffset_per_channel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ioffset_per_channel, 7]);
			},
			enumerable: false
		},
	
		ishift_per_channel: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 8);
			},
		
			set: function (_ishift_per_channel) {
				$dispatch(this.$native, 'setValue:atIndex:', [_ishift_per_channel, 8]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BNNSActivation;
