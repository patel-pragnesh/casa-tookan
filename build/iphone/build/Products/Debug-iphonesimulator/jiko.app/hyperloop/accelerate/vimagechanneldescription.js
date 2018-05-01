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
function vImageChannelDescription (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof vImageChannelDescription)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{vImageChannelDescription=dddd}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Headers/vImage_CVUtilities');
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


	vImageChannelDescription._imports = $imports;

	// properties
	Object.defineProperties(vImageChannelDescription.prototype, {
	
		min: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_min) {
				$dispatch(this.$native, 'setValue:atIndex:', [_min, 0]);
			},
			enumerable: false
		},
	
		zero: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_zero) {
				$dispatch(this.$native, 'setValue:atIndex:', [_zero, 1]);
			},
			enumerable: false
		},
	
		full: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_full) {
				$dispatch(this.$native, 'setValue:atIndex:', [_full, 2]);
			},
			enumerable: false
		},
	
		max: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_max) {
				$dispatch(this.$native, 'setValue:atIndex:', [_max, 3]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = vImageChannelDescription;
