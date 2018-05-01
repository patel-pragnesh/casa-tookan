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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_CVUtilities.h
 * @class
 */
function vImageTransferFunction (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImageTransferFunction)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImageTransferFunction=dddddddd}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_CVUtilities');
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


	vImageTransferFunction._imports = $imports;

	// properties
	Object.defineProperties(vImageTransferFunction.prototype, {
	
		c0: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_c0) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c0, 0]);
			},
			enumerable: false
		},
	
		c1: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_c1) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c1, 1]);
			},
			enumerable: false
		},
	
		c2: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_c2) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c2, 2]);
			},
			enumerable: false
		},
	
		c3: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_c3) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c3, 3]);
			},
			enumerable: false
		},
	
		gamma: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_gamma) {
				$dispatch(this.$native, 'setValue:atIndex:', [_gamma, 4]);
			},
			enumerable: false
		},
	
		cutoff: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_cutoff) {
				$dispatch(this.$native, 'setValue:atIndex:', [_cutoff, 5]);
			},
			enumerable: false
		},
	
		c4: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_c4) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c4, 6]);
			},
			enumerable: false
		},
	
		c5: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_c5) {
				$dispatch(this.$native, 'setValue:atIndex:', [_c5, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImageTransferFunction;
