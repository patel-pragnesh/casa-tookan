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
 * Accelerate//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/clapack.h
 * @class
 */
function CLPK_doublecomplex (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CLPK_doublecomplex)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CLPK_doublecomplex=dd}', 'Accelerate', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/Headers/clapack');
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


	CLPK_doublecomplex._imports = $imports;

	// properties
	Object.defineProperties(CLPK_doublecomplex.prototype, {
	
		r: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_r) {
				$dispatch(this.$native, 'setValue:atIndex:', [_r, 0]);
			},
			enumerable: false
		},
	
		i: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_i) {
				$dispatch(this.$native, 'setValue:atIndex:', [_i, 1]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CLPK_doublecomplex;
