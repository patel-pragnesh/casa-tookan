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
function vImage_ARGBToYpCbCrMatrix (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImage_ARGBToYpCbCrMatrix)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImage_ARGBToYpCbCrMatrix=ffffffff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_Types');
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


	vImage_ARGBToYpCbCrMatrix._imports = $imports;

	// properties
	Object.defineProperties(vImage_ARGBToYpCbCrMatrix.prototype, {
	
		R_Yp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_R_Yp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_R_Yp, 0]);
			},
			enumerable: false
		},
	
		G_Yp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_G_Yp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_G_Yp, 1]);
			},
			enumerable: false
		},
	
		B_Yp: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_B_Yp) {
				$dispatch(this.$native, 'setValue:atIndex:', [_B_Yp, 2]);
			},
			enumerable: false
		},
	
		R_Cb: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_R_Cb) {
				$dispatch(this.$native, 'setValue:atIndex:', [_R_Cb, 3]);
			},
			enumerable: false
		},
	
		G_Cb: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_G_Cb) {
				$dispatch(this.$native, 'setValue:atIndex:', [_G_Cb, 4]);
			},
			enumerable: false
		},
	
		B_Cb_R_Cr: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_B_Cb_R_Cr) {
				$dispatch(this.$native, 'setValue:atIndex:', [_B_Cb_R_Cr, 5]);
			},
			enumerable: false
		},
	
		G_Cr: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_G_Cr) {
				$dispatch(this.$native, 'setValue:atIndex:', [_G_Cr, 6]);
			},
			enumerable: false
		},
	
		B_Cr: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_B_Cr) {
				$dispatch(this.$native, 'setValue:atIndex:', [_B_Cr, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImage_ARGBToYpCbCrMatrix;
