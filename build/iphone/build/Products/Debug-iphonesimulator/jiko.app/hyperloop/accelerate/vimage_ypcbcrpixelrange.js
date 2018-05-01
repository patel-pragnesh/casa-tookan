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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types.h
 * @class
 */
function vImage_YpCbCrPixelRange (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImage_YpCbCrPixelRange)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImage_YpCbCrPixelRange=iiiiiiii}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types');
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


	vImage_YpCbCrPixelRange._imports = $imports;

	// properties
	Object.defineProperties(vImage_YpCbCrPixelRange.prototype, {
	
		Yp_bias: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_Yp_bias) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Yp_bias, 0]);
			},
			enumerable: false
		},
	
		CbCr_bias: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_CbCr_bias) {
				$dispatch(this.$native, 'setValue:atIndex:', [_CbCr_bias, 1]);
			},
			enumerable: false
		},
	
		YpRangeMax: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_YpRangeMax) {
				$dispatch(this.$native, 'setValue:atIndex:', [_YpRangeMax, 2]);
			},
			enumerable: false
		},
	
		CbCrRangeMax: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_CbCrRangeMax) {
				$dispatch(this.$native, 'setValue:atIndex:', [_CbCrRangeMax, 3]);
			},
			enumerable: false
		},
	
		YpMax: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_YpMax) {
				$dispatch(this.$native, 'setValue:atIndex:', [_YpMax, 4]);
			},
			enumerable: false
		},
	
		YpMin: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_YpMin) {
				$dispatch(this.$native, 'setValue:atIndex:', [_YpMin, 5]);
			},
			enumerable: false
		},
	
		CbCrMax: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_CbCrMax) {
				$dispatch(this.$native, 'setValue:atIndex:', [_CbCrMax, 6]);
			},
			enumerable: false
		},
	
		CbCrMin: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_CbCrMin) {
				$dispatch(this.$native, 'setValue:atIndex:', [_CbCrMin, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImage_YpCbCrPixelRange;
