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
function vImageRGBPrimaries (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImageRGBPrimaries)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImageRGBPrimaries=ffffffff}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_CVUtilities');
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


	vImageRGBPrimaries._imports = $imports;

	// properties
	Object.defineProperties(vImageRGBPrimaries.prototype, {
	
		red_x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_red_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_red_x, 0]);
			},
			enumerable: false
		},
	
		green_x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_green_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_green_x, 1]);
			},
			enumerable: false
		},
	
		blue_x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_blue_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_blue_x, 2]);
			},
			enumerable: false
		},
	
		white_x: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_white_x) {
				$dispatch(this.$native, 'setValue:atIndex:', [_white_x, 3]);
			},
			enumerable: false
		},
	
		red_y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_red_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_red_y, 4]);
			},
			enumerable: false
		},
	
		green_y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 5);
			},
		
			set: function (_green_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_green_y, 5]);
			},
			enumerable: false
		},
	
		blue_y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 6);
			},
		
			set: function (_blue_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_blue_y, 6]);
			},
			enumerable: false
		},
	
		white_y: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 7);
			},
		
			set: function (_white_y) {
				$dispatch(this.$native, 'setValue:atIndex:', [_white_y, 7]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImageRGBPrimaries;
