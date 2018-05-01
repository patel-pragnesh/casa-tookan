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
 * CoreText//Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/CTRunDelegate.h
 * @class
 */
function CTRunDelegateCallbacks (pointer) {
	if (pointer) {
		var oldWrapper = Hyperloop.getWrapper(pointer);
		if (oldWrapper) return oldWrapper;
	}
	if (!(this instanceof CTRunDelegateCallbacks)) { throw new TypeError('Cannot instantiate a class by calling it as a function'); }
	if (!$init) {
		$initialize();
	}
	
	if (!pointer) {
		pointer = Hyperloop.createPointer('{CTRunDelegateCallbacks=q^?^?^?^?}', 'CoreText', '/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator11.3.sdk/System/Library/Frameworks/CoreText.framework/Headers/CTRunDelegate');
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


	CTRunDelegateCallbacks._imports = $imports;

	// properties
	Object.defineProperties(CTRunDelegateCallbacks.prototype, {
	
		version: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 0);
			},
		
			set: function (_version) {
				$dispatch(this.$native, 'setValue:atIndex:', [_version, 0]);
			},
			enumerable: false
		},
	
		dealloc: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 1);
			},
		
			set: function (_dealloc) {
				$dispatch(this.$native, 'setValue:atIndex:', [_dealloc, 1]);
			},
			enumerable: false
		},
	
		getAscent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 2);
			},
		
			set: function (_getAscent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getAscent, 2]);
			},
			enumerable: false
		},
	
		getDescent: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 3);
			},
		
			set: function (_getDescent) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getDescent, 3]);
			},
			enumerable: false
		},
	
		getWidth: {
			get: function () {
				return $dispatch(this.$native, 'valueAtIndex:', 4);
			},
		
			set: function (_getWidth) {
				$dispatch(this.$native, 'setValue:atIndex:', [_getWidth, 4]);
			},
			enumerable: false
		}
	
	});

	$init = true;
}

module.exports = CTRunDelegateCallbacks;
