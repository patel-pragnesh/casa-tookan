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
function BNNSImageStackDescriptor (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof BNNSImageStackDescriptor)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{BNNSImageStackDescriptor=QQQQQiff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/BNNS/bnns');
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


	BNNSImageStackDescriptor._imports = $imports;

	// properties
	Object.defineProperties(BNNSImageStackDescriptor.prototype, {
	
		width: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_width) {
				$dispatch(this.$native, 'setValue:atIndex:', [_width, 0]);
			},
			enumerable: false
		},
	
		height: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_height) {
				$dispatch(this.$native, 'setValue:atIndex:', [_height, 1]);
			},
			enumerable: false
		},
	
		channels: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_channels) {
				$dispatch(this.$native, 'setValue:atIndex:', [_channels, 2]);
			},
			enumerable: false
		},
	
		row_stride: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_row_stride) {
				$dispatch(this.$native, 'setValue:atIndex:', [_row_stride, 3]);
			},
			enumerable: false
		},
	
		image_stride: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_image_stride) {
				$dispatch(this.$native, 'setValue:atIndex:', [_image_stride, 4]);
			},
			enumerable: false
		},
	
		data_type: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_data_type) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_type, 5]);
			},
			enumerable: false
		},
	
		data_scale: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_data_scale) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_scale, 6]);
			},
			enumerable: false
		},
	
		data_bias: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_data_bias) {
				$dispatch(this.$native, 'setValue:atIndex:', [_data_bias, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = BNNSImageStackDescriptor;
