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
 * CoreGraphics//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGDataProvider.h
 * @class
 */
function CGDataProviderDirectCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CGDataProviderDirectCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CGDataProviderDirectCallbacks=I^?^?^?^?}', 'CoreGraphics', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreGraphics.framework/Headers/CGDataProvider');
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


	CGDataProviderDirectCallbacks._imports = $imports;

	// properties
	Object.defineProperties(CGDataProviderDirectCallbacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		getBytePointer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_getBytePointer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getBytePointer, 1]);
			},
			enumerable: false
		},
	
		releaseBytePointer: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_releaseBytePointer) {
				$dispatch(this.$native, 'setValue:atIndex:', [_releaseBytePointer, 2]);
			},
			enumerable: false
		},
	
		getBytesAtPosition: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_getBytesAtPosition) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getBytesAtPosition, 3]);
			},
			enumerable: false
		},
	
		releaseInfo: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_releaseInfo) {
				$dispatch(this.$native, 'setValue:atIndex:', [_releaseInfo, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CGDataProviderDirectCallbacks;
