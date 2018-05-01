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
function vImage_YpCbCrToARGBMatrix (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImage_YpCbCrToARGBMatrix)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImage_YpCbCrToARGBMatrix=fffff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types');
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


	vImage_YpCbCrToARGBMatrix._imports = $imports;

	// properties
	Object.defineProperties(vImage_YpCbCrToARGBMatrix.prototype, {
	
		Yp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_Yp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Yp, 0]);
			},
			enumerable: false
		},
	
		Cr_R: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_Cr_R) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Cr_R, 1]);
			},
			enumerable: false
		},
	
		Cr_G: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_Cr_G) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Cr_G, 2]);
			},
			enumerable: false
		},
	
		Cb_G: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_Cb_G) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Cb_G, 3]);
			},
			enumerable: false
		},
	
		Cb_B: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_Cb_B) {
				$dispatch(this.$native, 'setValue:atIndex:', [_Cb_B, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImage_YpCbCrToARGBMatrix;
