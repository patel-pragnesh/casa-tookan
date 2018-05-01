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
 * CoreGraphics//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGFunction.h
 * @class
 */
function CGFunctionCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CGFunctionCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CGFunctionCallbacks=I^?^?}', 'CoreGraphics', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGFunction');
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


	CGFunctionCallbacks._imports = $imports;

	// properties
	Object.defineProperties(CGFunctionCallbacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		evaluate: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_evaluate) {
				$dispatch(this.$native, 'setValue:atIndex:', [_evaluate, 1]);
			},
			enumerable: false
		},
	
		releaseInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_releaseInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_releaseInfo, 2]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CGFunctionCallbacks;
