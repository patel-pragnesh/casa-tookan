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
function BNNSVectorDescriptor (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BNNSVectorDescriptor)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BNNSVectorDescriptor=Qiff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns');
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


	BNNSVectorDescriptor._imports = $imports;

	// properties
	Object.defineProperties(BNNSVectorDescriptor.prototype, {
	
		size: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_size) {
				$dispatch(this.$native, 'setValue:atIndex:', [_size, 0]);
			},
			enumerable: false
		},
	
		data_type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_data_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_type, 1]);
			},
			enumerable: false
		},
	
		data_scale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_data_scale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_scale, 2]);
			},
			enumerable: false
		},
	
		data_bias: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_data_bias) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_bias, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BNNSVectorDescriptor;
